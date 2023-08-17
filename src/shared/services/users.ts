import { apiGet, apiGetSingle, apiPatch, apiPost } from "../utils/api";

export const getUsers = async () => {
  return apiGet("/users");
};

export const getUser = async (email: string, aggregate?: string) => {
  return apiGetSingle("/users", email, aggregate);
};

export const createUser = async (userData: object) => {
  return apiPost("/users", userData);
};

export const updateUser = async (id: string, userData: object) => {
  return apiPatch("/users", id, userData);
};
