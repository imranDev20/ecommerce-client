import { getTokenFromLocalStorage } from "@/shared/utils/functions";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiBaseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  prepareHeaders: (headers) => {
    // Include the bearer token in the Authorization header
    const token = getTokenFromLocalStorage();
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export default apiBaseQuery;
