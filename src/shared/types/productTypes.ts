type Attribute = {
  name: string;
  value: string[];
  unit: string;
  _id: string;
};

type Brand = {
  name: string;
  id: string;
};

export type Category = {
  _id: string;
  name: string;
  products: string[];
  description: string;
  __v: number;
};

export type Product = {
  name: string;
  description: string;
  regularPrice: number;
  discountPrice: number;
  images: string[];
  unit: string;
  brand: Brand;
  rating: number;
  attributes: Attribute[];
  category: Category;
  _id: string;
  __v: number;
};

export type ProductProps = {
  product: Product;
};

export type Products = {
  products: Product[];
};

export type Categories = {
  categories: Category[];
};

export type ProductsPageProps = {
  products: Product[];
  categories: Category[];
};
