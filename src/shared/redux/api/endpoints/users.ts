import { User, UserWithWishlist } from "@/shared/types/user";
import { api } from "../apiSlice";

type UserApiResponse = {
  success: boolean;
  data: User;
};

type AggregatedUserApiResponse = {
  success: boolean;
  data: UserWithWishlist;
};

const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getLoggedInUser: builder.query<User, void>({
      query: () => "/users/me",
      transformResponse: (response: UserApiResponse) => response.data,
      providesTags: ["Users"],
    }),
    getAggregatedLoggedInUser: builder.query<
      UserWithWishlist,
      { aggregate: string }
    >({
      query: ({ aggregate }) => ({
        url: "/users/me",
        params: { aggregate },
      }),
      providesTags: ["UsersWishlist"],
      transformResponse: (response: AggregatedUserApiResponse) => response.data,
    }),
  }),
  overrideExisting: false,
});

export const { useGetLoggedInUserQuery, useGetAggregatedLoggedInUserQuery } =
  usersApi;
