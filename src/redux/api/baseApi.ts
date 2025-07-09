import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["book", "borrow"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://b5-a3-mongoose-mongo-db-type-script.vercel.app" }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["book"],
    }),
    createBook: builder.mutation({
      query: (bookData) => ({
        url: "/create-book",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["book"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["book"],
    }),
    editBook: builder.mutation({
      query: ({id, updateBook}) => ({
        url: `/edit-book/${id}`,
        method: "PATCH",
        body: updateBook
      }),
      invalidatesTags: ["book"],
    }),
    getBorrow: builder.query({
      query: () => "/borrow-summary",
      providesTags: ["borrow"],
    }),
    createBorrow: builder.mutation({
      query: ({id, borrowData}) => ({
        url: `/borrow/${id}`,
        method: "POST",
        body: borrowData,
      }),
      invalidatesTags: ["book", "borrow"],
    })
  }),
});

export const {
  useGetBooksQuery,
  useCreateBookMutation,
  useDeleteBookMutation,
  useEditBookMutation,
  useGetBorrowQuery,
  useCreateBorrowMutation
} = baseApi;
