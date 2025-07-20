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
