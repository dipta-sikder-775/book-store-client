import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://book-store-bay-seven.vercel.app/api/v1' }),
    endpoints: ()=> ({}),
    tagTypes: ['book', 'wishlist', 'search']
})