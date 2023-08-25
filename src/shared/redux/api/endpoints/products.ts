import { Product } from "@/shared/types/product";
import { api } from "../apiSlice";

type ProductsResponse = {
  message: string;
  data: Product[];
  success: boolean;
};

type ProductResponse = {
  data: Product;
  success: boolean;
};

const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products",

      providesTags: ["Products"],
      transformResponse: (response: ProductsResponse) => response.data,
    }),

    getProduct: builder.query<Product, string>({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["Product"],
      transformResponse: (response: ProductResponse) => response.data,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  util: { getRunningQueriesThunk },
} = productsApi;

export const { getProducts, getProduct } = productsApi.endpoints;
