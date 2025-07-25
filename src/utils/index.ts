export interface TimeSlot {
  label: string;
  value: string;
}

export interface ParsedDateTime {
  date: Date;
  time: string | null;
}

// Parse stored datetime string into initial date and time values
export const parseStoredDateTime = (
  appointmentDateTime: string | null | undefined,
  timeSlots: TimeSlot[]
): ParsedDateTime => {
  if (!appointmentDateTime) return { date: new Date(), time: null };

  try {
    const date = new Date(appointmentDateTime);
    if (isNaN(date.getTime())) return { date: new Date(), time: null };

    const timeString = date
      .toLocaleTimeString("en-US", {
        hour12: true,
        hour: "numeric",
        minute: "2-digit",
      })
      .replace(/\s/g, "")
      .toLowerCase();

    const availableTime = timeSlots.find(
      (slot) => slot.value.toLowerCase() === timeString
    );

    return { date, time: availableTime?.value || null };
  } catch {
    return { date: new Date(), time: null };
  }
};

//  Create formatted datetime string from date and time
export const createFormattedDateTime = (
  date: Date,
  time: string
): string | null => {
  if (!time) return null;

  const match = time.match(/(\d{1,2}):(\d{2})(am|pm)/i);
  if (!match) return null;

  const [, hoursStr, minutesStr, period] = match;
  let hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);

  if (period.toLowerCase() === "pm" && hours !== 12) hours += 12;
  else if (period.toLowerCase() === "am" && hours === 12) hours = 0;

  const datetime = new Date(date);
  datetime.setHours(hours, minutes, 0, 0);

  return `${datetime.getFullYear()}-${String(datetime.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(datetime.getDate()).padStart(2, "0")} ${String(
    datetime.getHours()
  ).padStart(2, "0")}:${String(datetime.getMinutes()).padStart(2, "0")}:00.000`;
};

//  Format datetime string for display
export const formatAppointmentDateTime = (
  dateTimeString: string | null | undefined
) => {
  if (!dateTimeString) return { date: "", time: "" };

  try {
    const date = new Date(dateTimeString);
    if (isNaN(date.getTime())) {
      return { date: "", time: "" };
    }

    // Format date as "Tue, June 02, 2025"
    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "2-digit",
    });

    // Format time as "09:00 AM"
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
    });

    return { date: formattedDate, time: formattedTime };
  } catch (error) {
    console.error("Error formatting appointment datetime:", error);
    return { date: "", time: "" };
  }
};


let navigationHandler: ((path: string) => void) | null = null;

export const setNavigationHandler = (handler: (path: string) => void) => {
  navigationHandler = handler;
};

export const navigateTo = (path: string) => {
  if (navigationHandler) {
    navigationHandler(path);
  } else {
    // Fallback to window.location if router not available
    window.location.href = path;
  }
};


// function to scroll to top
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};