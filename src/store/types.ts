import { BranchesType, CategoriesType, SpecialistType } from "@/types/book-appointment";
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


// {
//   "serviceSelections": [
//     {
//       "serviceId": "46c4c0fc-9344-484d-970b-daf25a68968f",
//       "categoryIds": [
//         "dc81db61-726e-4f10-9b17-cf2baedf78c3",
//         "0fde510b-1953-41e8-a018-d66756367770"
//       ]
//     }
//   ],
//   "specialistId": "3626e0e5-2f84-4693-80c4-8fbffb7e54f4",
//   "appointmentDateTime": "2025-06-13 21:48:36.078",
//   "branchId": "89b0dc2b-c751-4c28-a54c-6f4f35ba478c",
//   "totalCost" : 10000,
//   "numberOfClients": 1,
//   "currency": "usd",
//   "notes": "Hello there"
// }


