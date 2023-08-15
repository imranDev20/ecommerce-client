import { apiGet, apiPost } from "../utils/api";

export const getProducts = async (query?: any) => {
  if (query && Object.keys(query).length !== 0) {
    const url = `/products?${
      query.categories
        ? `categories=${encodeURIComponent(query.categories)}`
        : ""
    }&${query.brands ? `brands=${encodeURIComponent(query.brands)}` : ""}`;

    console.log(url);

    return apiGet(url);
  }

  return apiGet("/products");
};

export const createProduct = (productData: object) => {
  return apiPost("/products", productData);
};

// ...other product-related API functions
