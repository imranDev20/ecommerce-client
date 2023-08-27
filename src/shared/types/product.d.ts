import { Brand } from "./brand";

export type Category = {
  _id: string;
  name: string;
  products: string[];
  description: string;
  __v: number;
};

export type Attributes = {
  name: string;
  values: string[];
  unit: string;
};

export type Product = {
  _id: string;
  name: string;
  description: string;
  images: string[];
  regularPrice: number;
  discountPrice: number;
  discountPercentage: number | null;
  unit: "kg" | "litre" | "pcs" | "bag";
  stock: number;
  status: "in stock" | "out of stock" | "discontinued";
  brand: {
    name: string;
    id: string;
  };
  rating: number;
  attributes: Attributes[];
  category: {
    name: string;
    id: string;
  };
  createdAt: string;
  updatedAt: string;
  _v: number;
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
  brands: Brand[];
  error?: string;
};

export type ProductsCardProps = {
  products: Product[];
  error?: string;
};

export type WishListCardProps = {
  product: Partial<Product>;
};

export type CartProduct = (Product | Partial<Product>) & {
  quantity: number;
};

export type CartPayload = Product | Partial<Product>;

export type CartProductProps = {
  product: CartProduct;
};
