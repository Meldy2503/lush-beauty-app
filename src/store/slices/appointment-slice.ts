import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppointmentState, Appointment } from "../types";

const initialState: AppointmentState = {
  appointments: [],
  loading: false,
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
            branchId: "",
            appointmentDateTime: "",
            totalCost: 0,
            numberOfClients: 1,
            serviceSelections: [],
          },
        ];
      }
      // Merge the new data into the first appointment
      state.appointments[0] = { ...state.appointments[0], ...action.payload };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { updateAppointment, setLoading } = appointmentSlice.actions;
export default appointmentSlice.reducer;



