export interface BranchesType {
  id?: string;
  name?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
  status?: boolean;
}

export interface CategoriesType {
  estimatedTime?: number;
  id?: string;
  name?: string;
  price?: number;
  specialists?: string[];
  type?: string;
}
export interface ServicesType {
  id?: string;
  branchId?: string;
  code?: string;
  categories?: CategoriesType[];
  description?: string;
  name?: string;
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
  status?: boolean;
}

export interface SpecialistType {
  id: string;
  address?: string;
  age?: number;
  branchId?: string;
  city?: string;
  clientCount?: number;
  country?: string;
  createdAt?: string;
  createdBy?: string;
  description?: string;
  email?: string;
  imageUrl?: string;
  name?: string;
  phone?: string;
  rating?: number;
  specialties?: [
    {
      category?: CategoriesType[];
      id?: string;
    }
  ];
  state?: string;
  status?: boolean;
  totalCompletedAppointments?: number;
  totalRatings?: number;
  updatedAt?: string;
  updatedBy?: string;
}

export interface BookAppointmentType {
  specialistId: string;
  appointmentDateTime: string;
  branchId: string;
  totalCost: number;
  numberOfClients: number;
  serviceSelections: {
    serviceId: string;
    categoryIds: string[];
  }[];
  currency?: string;
  notes?: string;
}

export interface MakeAppointmentPaymentType {
  appointmentId?: string | null;
}

