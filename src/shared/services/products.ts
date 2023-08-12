import { apiGet, apiPost } from "../utils/api";

export const getProducts = (query?: any) => {
  if (query && Object.keys(query).length !== 0) {
    const url = `/products?${
      query.categories
        ? `categories=${encodeURIComponent(query.categories)}`
        : ""
    }${query.brands ? `brands=${encodeURIComponent(query.brands)}` : ""}`;

    return apiGet(url);
  }

  return apiGet("/products");
};

export const createProduct = (productData: object) => {
  return apiPost("/products", productData);
};

// ...other product-related API functions
