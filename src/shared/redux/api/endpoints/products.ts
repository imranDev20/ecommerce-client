import { Product } from "@/shared/types/product";
import { api } from "../apiSlice";

const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product, void>({
      query: () => "/products",

      providesTags: ["Products"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductsQuery } = productsApi;
