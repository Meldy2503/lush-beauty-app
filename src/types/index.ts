export interface APIResponse<T = unknown> {
  success: boolean;
  message: string;
  data: T | null;
}

export interface Meta {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

export interface DataType<T>  {
  message?: string;
  data?: T | null;
  meta?: Meta;
};

export interface Params {
  term?: string;
  page: number;
  pageSize?: number;
  limit?: number;
  categoryId?: string;
}
