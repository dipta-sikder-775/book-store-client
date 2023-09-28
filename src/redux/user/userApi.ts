
import { api } from "../api/apiSlice";

type UserLogin = {
    name?:string;
    email: string;
    password: string;
}
const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (user: UserLogin) => ({
                url: '/user/register',
                method: 'POST',
                body: user
            })
        }),
        loginUser: builder.mutation({
            query: (user: UserLogin) => ({
                url: '/user/login',
                method: 'POST',
                body: user
            })
        }),
    })
})

export const {useRegisterUserMutation, useLoginUserMutation} = userApi;