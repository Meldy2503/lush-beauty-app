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
            selectedSpecialist: null,
            selectedBranch: null,
            appointmentDateTime: "",
            totalPrice: 0,
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
    // to clear appointments list
    clearAppointments: (state) => {
      state.appointments = [];
    },
  },
});

export const { updateAppointment, clearAppointments } =
  appointmentSlice.actions;
export default appointmentSlice.reducer;
