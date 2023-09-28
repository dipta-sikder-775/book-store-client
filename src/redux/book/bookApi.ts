import { api } from "../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    imageUpload: builder.mutation({
      query: (image) => ({
        url: "/file/upload",
        method: "POST",
        body: image,
      }),
    }),

    bookPost: builder.mutation({
      query: (data) => ({
        url: "/book/create-book",
        method: "POST",
        body: data.book,
        headers: {
          Authorization: `Bearer ${data.token}`,
          "Content-Type": "application/json",
        },
      }),
    }),

    bookReview: builder.mutation({
      query: (data) => ({
        url: `/book/review-book/${data.id}`,
        method: "POST",
        body: data.review,
        headers: {
          Authorization: `Bearer ${data.token}`,
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["book"],
    }),

    bookUpdate: builder.mutation({
      query: (data) => ({
        url: `/book/update-book/${data.id}`,
        method: "PATCH",
        body: data.book,
        headers: {
          Authorization: `Bearer ${data.token}`,
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["book"],
    }),

    deleteBook: builder.mutation({
      query: (data) => ({
        url: `/book/delete-book/${data.id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${data.token}`,
          "Content-Type": "application/json",
        },
      }),
    }),

    getBooks: builder.query({
      query: (data) =>
        `/book/get-books?searchTerm=${data.search}&sort=${data.filter}`,
      // providesTags: ['search'],
      // invalidatesTags: ['search']
    }),

    getSingleBook: builder.query({
      query: (id) => `/book/get-single-book/${id}`,
      providesTags: ["book"],
    }),

    getLatestBook: builder.query({
      query: () => `/book/get-leatest-books`,
    }),
  }),
});

export const {
  useImageUploadMutation,
  useBookReviewMutation,
  useGetLatestBookQuery,
  useDeleteBookMutation,
  useBookUpdateMutation,
  useBookPostMutation,
  useGetBooksQuery,
  useGetSingleBookQuery,
} = bookApi;
