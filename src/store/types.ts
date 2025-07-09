// Appointment types

export interface Appointment {
  id: string;
  specialistId: string;
  appointmentDateTime: string;
  branchId: string;
  totalCost: number;
  numberOfClients: number;
  serviceSelections: {
    serviceId: string;
    categoryIds: string[];
  }[];
  currency?: string; // e.g., "GBP", "USD"
  notes?: string;
}

export interface AppointmentState {
  appointments: Appointment[];
  loading: boolean;
}
  

export interface AuthState {
  accessToken: string | null;
  loading: boolean;
}