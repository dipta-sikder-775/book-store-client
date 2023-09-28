import { api } from "../api/apiSlice";

const wishlistApi = api.injectEndpoints({
    endpoints: (builder) => ({
        addWishlist: builder.mutation({
            query: (data) => ({
                url: `/wishlist/create-wishlist`,
                method: 'POST',
                body: data.wishlist,
                headers: {
                    Authorization: `Bearer ${data.token}`,
                    'Content-Type': 'application/json',
                }
            }),
            invalidatesTags: ['wishlist']
        }),
        getWishlist: builder.query({
            query: (token) =>({
                url: '/wishlist/get-wishlist',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            }),
            providesTags: ['wishlist']
        }),
        deleteWishlist: builder.mutation({
            query: (data) => ({
                url: `/wishlist/delete-wishlist/${data.id}`,
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${data.token}`,
                    'Content-Type': 'application/json',
                }
            }),
            invalidatesTags: ['wishlist']
        }),
    })
})

export const {useAddWishlistMutation, useGetWishlistQuery, useDeleteWishlistMutation} = wishlistApi;