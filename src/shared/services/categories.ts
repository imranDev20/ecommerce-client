import { apiGet, apiPost } from "../utils/api";

export const getCategories = () => {
  return apiGet("/categories");
};

export const getCategory = () => {
  return apiGet("/products");
};
