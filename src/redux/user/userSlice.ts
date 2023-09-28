import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../types/types';


const initialState: IUser = {
    _id: null,
    email: null,
    name: null,
    token: null,

}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userSet: (state, action) => {

            state._id = action.payload.data._id;
            state.email = action.payload.data.email;
            state.name = action.payload.data.name;
            state.token = action.payload.accessToken;
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
        removeUser: (state) => {
            state._id = null
            state.email = null
            state.name = null
            state.token = null
            localStorage.removeItem('user')
        }
    }
})

export const { userSet, removeUser } = userSlice.actions
export default userSlice.reducer;