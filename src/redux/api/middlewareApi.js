import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const middlewareApi = createApi({
  reducerPath: "middlewareApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.applefixzone.com" }),
  keepUnusedDataFor: 60,
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/api/products`,
    }),
    getSingleProduct: builder.query({
      query: (name) => `/api/products/${name}`,
    }),
    getCategories: builder.query({
      query: (name) => `/api/categories/${name}`,
    }),
    signinUser: builder.mutation({
      query: ({ email, password }) => {
        return {
          url: "/user/signin",
          method: "post",
          body: { email, password },
        };
      },
    }),
    signupUser: builder.mutation({
      query: (user) => {
        const { name, email, password } = user;
        return {
          url: "/api/auth/signup",
          method: "POST",
          body: {
            name: name,
            email: email,
            password: password,
          },
        };
      },
    }),
    sendMailForVerification: builder.mutation({
      query: ({ email }) => {
        return {
          url: "/user/send-verification-mail",
          method: "post",
          body: email,
        };
      },
    }),
    verifyUser: builder.mutation({
      query: (token) => {
        return {
          url: "/api/auth",
          method: "GET",
          headers: {
            Authorization: "eyJhb " + token,
          },
        };
      },
    }),
    sendMailForgotPassword: builder.mutation({
      query: ({ email }) => {
        return {
          url: "/user/forgot-password",
          method: "post",
          body: email,
        };
      },
    }),
    resetPassword: builder.mutation({
      query: ({ token, password }) => {
        return {
          url: "/user/verify-forgot-mail",
          method: "post",
          body: { token, password },
        };
      },
    }),
    getUserDetails: builder.query({
      query: (userId) => {
        return {
          url: `/api/users/${userId}`,
          method: "GET",
        };
      },
    }),
  }),
});
export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useGetCategoriesQuery,
  useSigninUserMutation,
  useSignupUserMutation,
  useSendMailForVerificationMutation,
  useGetUserDetailsQuery,
  useSendMailForgotPasswordMutation,
  useResetPasswordMutation,
  useVerifyUserMutation,
} = middlewareApi;
