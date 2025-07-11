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
  addresses: UserAddressType[];
  createdAt: string;
  email: string;
  fullName: string;
  id: string;
  imageUrl: string;
  phone: string;
  status: boolean;
  updatedAt: string;
}

export interface AddAddressType {
  address: string;
  state?: string;
  country?: string;
  isDefault?: boolean;
}
