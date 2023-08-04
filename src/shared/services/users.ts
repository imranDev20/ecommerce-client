import { apiGet, apiPost } from "../utils/api";

export const getUsers = async () => {
  return apiGet("/users");
};

export const createUser = async (userData: object) => {
  return apiPost("/users", userData);
};
