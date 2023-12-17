import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api" }),
  endpoints: (build) => ({
    getUsers: build.query({
      query: (page: number) => `/users?page=${page}`,
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
