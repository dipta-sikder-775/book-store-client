import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  reducerPath: "api",
  // baseQuery: fetchBaseQuery({
  //   baseUrl: "http://localhost:8000/api/v1",
  // }),
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-store-new-pi.vercel.app/api/v1",
  }),
  endpoints: () => ({}),
  tagTypes: ["book", "wishlist", "search"],
});
