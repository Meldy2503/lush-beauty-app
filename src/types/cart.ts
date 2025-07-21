export interface ProductsType {
  id: string;
  name: string;
  description: string;
  code: string;
  currency: string;
  status: boolean;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
  imageUrl: string;
  heading: string;
  price?: number;
  category: {
    id: string;
    name: string;
    description: string;
    code: string;
  };
}

export interface AddToCartType {
  guestId: string;
  productId: string;
  quantity: number;
}
export interface CartItemsType {
  createdAt?: string;
  guestId?: string;
  id?: string;
  productId?: string;
  productItem?: ProductsType;
  updatedAt?: string;
  userId?: string;
  quantity?: number;
}
