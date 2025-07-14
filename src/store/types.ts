import { BranchesType } from "@/types/book-appointment";
import { UserProfileType } from "@/types/user";

export interface Appointment {
  id: string;
  specialistId: string;
  appointmentDateTime: string;
  selectedBranch: BranchesType |null;
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

export interface AuthState {
  accessToken?: string | null;
  user?: UserProfileType | null;
}
