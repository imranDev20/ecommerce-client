import { apiGet, apiGetSingle, apiPatch, apiPost } from "../utils/api";

export const getUsers = async () => {
  return apiGet("/users");
};

export const getUser = async (id: string, populate?: string) => {
  return apiGetSingle("/users", id, populate);
};

export const createUser = async (userData: object) => {
  return apiPost("/users", userData);
};

export const updateUser = async (id: string, userData: object) => {
  return apiPatch("/users", id, userData);
};
