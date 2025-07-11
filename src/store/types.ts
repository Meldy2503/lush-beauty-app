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
}


export interface LoggedInUser {
  createdAt?: string;
  email?: string;
  fullName?: string;
  id?: string;
  imageUrl?: string;
  phone?: string;
  status?: boolean;
  updatedAt?: string;
}
export interface AuthState {
  accessToken: string | null;
  user?: LoggedInUser | null;
}