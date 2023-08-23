import { createApi } from "@reduxjs/toolkit/query/react";
import apiBaseQuery from "./apiBaseQuery";
import { User, UserWithWishlist } from "@/shared/types/user";

type UserApiResponse = {
  success: boolean;
  data: User;
};

type AggregatedUserApiResponse = {
  success: boolean;
  data: UserWithWishlist;
};

export const usersApiSlice = createApi({
  reducerPath: "users",
  baseQuery: apiBaseQuery,
  endpoints: (builder) => ({
    getLoggedInUser: builder.query<User, void>({
      query: () => "/users/me",
      transformResponse: (response: UserApiResponse) => response.data,
    }),

    getAggregatedLoggedInUser: builder.query<
      UserWithWishlist,
      { aggregate: string }
    >({
      query: ({ aggregate }) => ({
        url: "/users/me",
        params: { aggregate },
      }),
      transformResponse: (response: AggregatedUserApiResponse) => response.data,
    }),
  }),
});

export const { useGetLoggedInUserQuery, useGetAggregatedLoggedInUserQuery } =
  usersApiSlice;
