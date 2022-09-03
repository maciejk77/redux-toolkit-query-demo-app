// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const catApi = createApi({
  reducerPath: "catApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thecatapi.com/v1/images/",
  }),
  endpoints: (builder) => ({
    getCat: builder.query({
      query: () => `search`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCatQuery } = catApi;
