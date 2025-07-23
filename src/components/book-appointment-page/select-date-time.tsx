"use client";

import { RootState } from "@/store";
import { updateAppointment } from "@/store/slices/appointment-slice";
import { createFormattedDateTime, parseStoredDateTime } from "@/utils";
import { Box, Flex, Heading, HStack, RadioGroup, Text } from "@chakra-ui/react";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { useDispatch, useSelector } from "react-redux";
import CalendarComponent from "../shared/calendar";
import StepNavigationBtns from "../shared/navigation-btns";
import BookingSummary from "./booking-summary";
import { useRouter } from "next/navigation";

const timeSlots = [
  { label: "9:00am", value: "9:00am" },
  { label: "11:00am", value: "11:00am" },
  { label: "1:00pm", value: "1:00pm" },
  { label: "3:00pm", value: "3:00pm" },
  { label: "5:00pm", value: "5:00pm" },
  { label: "7:00pm", value: "7:00pm" },
];

const SelectDateTimePage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const appointmentDateTime = useSelector(
    (state: RootState) => state.appointment.appointments[0]?.appointmentDateTime
  );

  const { date: initialDate, time: initialTime } = parseStoredDateTime(
    appointmentDateTime,
    timeSlots
  );
  const [selectedTime, setSelectedTime] = useState<string | null>(initialTime);
  const [selectedDate, setSelectedDate] = useState<Date>(initialDate);

  const updateAppointmentDateTime = (date: Date, time: string | ""): void => {
    const formatted = createFormattedDateTime(date, time);
    if (formatted) {
      dispatch(updateAppointment({ appointmentDateTime: formatted }));
    }
  };
  const handleDateChange = (newDate: Date) => {
    setSelectedDate(newDate);
    updateAppointmentDateTime(newDate, selectedTime || "");
  };

  const handleTimeChange = (newTime: string) => {
    setSelectedTime(newTime);
    updateAppointmentDateTime(selectedDate, newTime);
  };

  return (
    <Flex gap="2rem" alignItems="stretch">
      <Flex
        w={{ base: "100%", md: "65%" }}
        bg="white"
        shadow="sm"
        px="2rem"
        pt="2rem"
        flexDir="column"
      >
        <Heading
          as="h3"
          fontSize={{ base: "1.7rem", md: "1.8rem" }}
          fontFamily="playfair"
          mb="2rem"
          lineHeight={1.3}
          textTransform="uppercase"
        >
          Select Date/Time
        </Heading>
        <Flex
          flexDir={"column"}
          justifyContent={"space-between"}
          h={{ base: "100%", md: "78.2vh" }}
          overflowY={"auto"}
        >
          <Flex
            flexDir={{ base: "column-reverse", lg: "column" }}
            gap={{ base: "4rem", md: "5rem" }}
            pb={{ base: "5rem", md: "2rem" }}
          >
            <Box mt="1rem">
              <CalendarComponent
                value={selectedDate}
                onChange={handleDateChange}
              />
            </Box>

            <Box>
              <Text
                pb="2rem"
                pt={{ base: "1rem", md: "0rem" }}
                fontWeight="600"
              >
                Available Time
              </Text>
              <RadioGroup.Root
                value={selectedTime ?? ""}
                onValueChange={({ value }) => handleTimeChange(value ?? "")}
                display="flex"
                justifyContent="space-between"
                px="2px"
              >
                <HStack gap={{ base: "3rem", md: "3rem 4rem" }} flexWrap="wrap">
                  {timeSlots.map((item) => (
                    <RadioGroup.Item
                      key={item.value}
                      value={item.value}
                      display="flex"
                      justifyContent="space-between"
                    >
                      <RadioGroup.ItemHiddenInput />
                      <RadioGroup.ItemIndicator scale="1.4" />
                      <RadioGroup.ItemText
                        fontSize={{ base: "1.5rem", sm: "1.6rem" }}
                        ml=".2rem"
                      >
                        {item.label}
                      </RadioGroup.ItemText>
                    </RadioGroup.Item>
                  ))}
                </HStack>
              </RadioGroup.Root>
            </Box>
          </Flex>
          <StepNavigationBtns
            prevOnClick={() => router.back()}
            nextOnClick={() => router.push("/book-appointment/confirm-booking")}
            nextDisabled={!selectedDate || !selectedTime}
          />
        </Flex>
      </Flex>

      <Box
        w={{ base: "100%", md: "35%" }}
        display={{ base: "none", md: "flex" }}
      >
        <BookingSummary />
      </Box>
    </Flex>
  );
};

export default SelectDateTimePage;
