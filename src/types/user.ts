export interface UserAddressType {
  id: string;
  address?: string;
  country?: string;
  isDefault?: boolean;
  state?: string;
  createdAt?: string;
  updatedAt?: string;
  userId?: string;
}
export interface UserProfileType {
  addresses?: UserAddressType[];
  createdAt?: string;
  email?: string;
  fullName?: string;
  id?: string;
  imageUrl?: string;
  phone?: string;
  status?: boolean;
  updatedAt?: string;
}

export interface AddAddressType {
  address?: string;
  state?: string;
  country?: string;
  isDefault?: boolean;
}

export interface UpdateUserProfileType {
  fullName?: string;
  phone?: string;
}
export interface userApptServiceCategoryType {
  estimatedTime?: number;
  description?: string;
  name?: string;
  price?: number;
}
export interface userApptServiceType {
  categories?: {
    category?: userApptServiceCategoryType;
    appointmentServiceId?: string;
    id?: string;
  }[];
  service?: {
    name?: string;
    id?: string;
    description?: string;
  };
}

export interface UserAppointmentType {
  appointmentDate?: string;
  branch?: {
    address?: string;
    city?: string;
    country?: string;
    id?: string;
    name?: string;
    state?: string;
  };
  branchId?: string;
  cancelReason?: string;
  createdAt?: string;
  currency?: string;
  id?: string;
  notes?: string;
  numberOfClients?: number;
  payment?: string;
  status?: string;
  totalCost?: number;
  type?: string;
  updatedAt?: string;
  services?: userApptServiceType[];
  specialist?: {
    email?: string;
    id?: string;
    name?: string;
    phone?: string;
  };
}

export interface OrderItems {
  createdAt?: string;
  id?: string;
  orderId?: string;
  price?: number;
  product?: {
    categoryId: string;
    code: string;
    createdAt: string;
    currency: string;
    description: string;
    id: string;
    imageUrl: string;
    name: string;
    price: number;
    status: boolean;
    updatedAt: string;
  };
  productId?: string;
  quantity?: number;
  updatedAt?: string;
}

export interface UserOrderType {
  cancelReason?: string;
  code?: string;
  createdAt?: string;
  currency?: string;
  id?: string;
  items: OrderItems[];
  note?: string;
  status?: string;
  totalAmount?: number;
  updatedAt?: string;
  userId?: string;
  imageUrl?: string;
}
