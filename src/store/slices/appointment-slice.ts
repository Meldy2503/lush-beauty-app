import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppointmentState, Appointment } from "../types";

const initialState: AppointmentState = {
  appointments: [],
};

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    // Single reducer to update ANY appointment field
    updateAppointment: (state, action: PayloadAction<Partial<Appointment>>) => {
      if (state.appointments.length === 0) {
        // Initialize with empty appointment if none exists
        state.appointments = [
          {
            id: "",
            specialistId: "",
            selectedBranch: null,
            appointmentDateTime: "",
            totalCost: 0,
            numberOfClients: 1,
            serviceSelections: [],
            serviceClientCounts: {},
          },
        ];
      }

      const existing = state.appointments[0];
      const incoming = action.payload;

      state.appointments[0] = {
        ...existing,
        ...incoming,
        serviceClientCounts: {
          ...existing.serviceClientCounts,
          ...incoming.serviceClientCounts,
        },
      };
    },
  },
});

export const { updateAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;
