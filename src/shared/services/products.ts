import { apiGet, apiPost } from "../utils/api";

export const getProducts = async () => {
  return apiGet("/products");
};

export const createProduct = async (productData: object) => {
  return apiPost("/products", productData);
};

// ...other product-related API functions
