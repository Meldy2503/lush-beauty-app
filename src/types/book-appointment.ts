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
