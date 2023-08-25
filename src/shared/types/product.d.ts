import { Brand } from "./brand";

type Attribute = {
  name: string;
  value: string[];
  unit: string;
  _id: string;
};

type ProductBrand = {
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

export type CategoryInProduct = {
  id: string;
  name: string;
};

export type Product = {
  name: string;
  description: string;
  regularPrice: number;
  discountPrice: number;
  images: string[];
  unit: string;
  brand: ProductBrand;
  rating: number;
  attributes: Attribute[];
  category: CategoryInProduct;
  _id: string;
  createdAt: string;
  updatedAt: string;
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
  brands: Brand[];
  error?: string;
};

export type ProductsCardProps = {
  products: Product[];
  error?: string;
};

export type WishlistProduct = {
  _id: string;
  name: string;
  images: string[];
  regularPrice: number;
  discountPrice: number;
  rating: number;
};

export type WishListCardProps = {
  product: WishlistProduct;
};

export type CartProduct = (Product | WishlistProduct) & {
  quantity: number;
};

export type CartPayload = Product | WishlistProduct;

export type CartProductProps = {
  product: CartProduct;
};
