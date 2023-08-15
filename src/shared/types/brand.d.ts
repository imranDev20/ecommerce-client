type ProductId = string;
type StoreId = string;

type Store = {
  name: string;
  phone: string;
  id: StoreId;
  _id: string;
};

export type Brand = {
  _id: string;
  name: string;
  description: string;
  website: string;
  origin: string;
  products: ProductId[];
  store: Store[];
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Brands = {
  brands: Brand[];
};
