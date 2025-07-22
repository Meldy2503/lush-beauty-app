import {
  BranchesType,
  CategoriesType,
  SpecialistType,
} from "@/types/book-appointment";
import { UserProfileType } from "@/types/user";

export interface Appointment {
  id: string;
  selectedSpecialist: SpecialistType | null;
  appointmentDateTime: string;
  selectedBranch: BranchesType | null;
  totalPrice: number;
  numberOfClients: number;
  serviceClientCounts?: Record<string, number>;
  serviceSelections: {
    serviceId: string;
    categoryIds: CategoriesType[];
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

export interface CartItem {
  quantity: number;
  productId: string;
  guestId: string;
}

export interface CartState {
  cartItems: CartItem[];
  guestId: string | null;
  redirectToOrderSummary: boolean;
}
