import * as yup from "yup";

export const bookAppointmentSchema = yup.object({
  serviceSelections: yup
    .array(
      yup.object({
        serviceId: yup.string().required("Service ID is required"),
        categoryIds: yup
          .array(yup.string().required())
          .min(1, "Select at least one category"),
      })
    )
    .min(1, "Select at least one service"),
  specialistId: yup.string().required("Specialist ID is required"),
  appointmentDateTime: yup
    .string()
    .required("Appointment date and time is required"),
  branchId: yup.string().required("Branch ID is required"),
  totalCost: yup
    .number()
    .min(0, "Total cost must be a positive number")
    .required("Total cost is required"),
  numberOfClients: yup
    .number()
    .integer()
    .min(1, "At least one client is required")
    .required("Number of clients is required"),
  notes: yup.string().optional(),
  currency: yup
    .string()
    .oneOf(["usd", "eur", "gbp", "ngn"], "Invalid currency")
    .default("gbp"),
});
