import { apiGet, apiPost } from "../utils/api";

export const getProducts = async (query?: any) => {
  if (query && Object.keys(query).length !== 0) {
    return apiGet("/products", query);
  }

  return apiGet("/products");
};

export const createProduct = (productData: object) => {
  return apiPost("/products", productData);
};

// ...other product-related API functions
