import { apiGet, apiGetSingle, apiPatch, apiPost } from "../utils/api";

export const getUsers = async () => await apiGet("/users");

export const getUser = async (email: string, aggregate?: string) => {
  const params = { aggregate: aggregate };
  return await apiGetSingle("/users", email, params);
};

export const createUser = async (userData: object) =>
  await apiPost("/users", userData);

export const loginUser = async (email: string) =>
  await apiPatch("/users/login", email, null);

export const updateUser = async (id: string, userData: object) =>
  await apiPatch("/users", id, userData);

export const getLoggedInUser = async () => await apiGet("/users/me");

// Migrating to RTK Query
