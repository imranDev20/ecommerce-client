import { apiGet, apiPost } from "../utils/api";

export const getProducts = () => {
  return apiGet("/products");
};

export const createProduct = (productData: object) => {
  return apiPost("/products", productData);
};

// ...other product-related API functions
