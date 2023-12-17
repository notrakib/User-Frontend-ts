import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface UserResponse {
  id?: number;
  token: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

export const signApi = createApi({
  reducerPath: "signApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api" }),
  endpoints: (build) => ({
    signUp: build.mutation<UserResponse, LoginRequest>({
      query: (body) => ({
        url: `/register`,
        method: "POST",
        body,
      }),
    }),
    signIn: build.mutation<UserResponse, LoginRequest>({
      query: (body) => ({
        url: `/login`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = signApi;
