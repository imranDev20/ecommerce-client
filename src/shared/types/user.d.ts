import { Dayjs } from "dayjs";
import { Product, WishlistProduct } from "./product";

type PaymentMethod = {
  type: string;
  cardNumber: string;
  expirationDate: string;
  cardholderName: string;
  _id: string;
};

type Address = {
  type: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  _id: string;
};

export type User = {
  _id: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  birthDate: string | null;
  paymentMethods: PaymentMethod[];
  wishlist: string[] | Product[]; // You can replace 'any' with a more specific type if needed
  addresses: Address[];
  supportTicket: any[]; // You can replace 'any' with a more specific type if needed
  orders: any[]; // You can replace 'any' with a more specific type if needed
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type UserWithWishlist = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  wishlistProducts: WishlistProduct[];
};

export type WishListProps = {
  user: UserWithWishlist;
};

export type UserProps = {
  user: User;
};

export type Users = {
  users: User[];
};
