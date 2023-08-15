import { Product } from "./product";

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
  birthDate: string;
  paymentMethods: PaymentMethod[];
  wishlist: string[] | Product[]; // You can replace 'any' with a more specific type if needed
  addresses: Address[];
  supportTicket: any[]; // You can replace 'any' with a more specific type if needed
  orders: any[]; // You can replace 'any' with a more specific type if needed
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type UserWishListPopulated = {
  _id: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  paymentMethods: PaymentMethod[];
  wishlist: Product[]; // You can replace 'any' with a more specific type if needed
  addresses: Address[];
  supportTicket: any[]; // You can replace 'any' with a more specific type if needed
  orders: any[]; // You can replace 'any' with a more specific type if needed
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type WishListProps = {
  user: UserWishListPopulated;
};

export type UserProps = {
  user: User;
};

export type Users = {
  users: User[];
};
