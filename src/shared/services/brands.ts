import { apiGet, apiPost } from "../utils/api";

export const getBrands = () => {
  return apiGet("/brands");
};

export const getBrand = () => {
  return apiGet("/brands");
};
