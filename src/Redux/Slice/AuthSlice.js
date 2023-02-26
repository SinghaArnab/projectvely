import { createSlice } from "@reduxjs/toolkit";


const AuthSlice=createSlice({
    name:'authSlice',
    initialState:{
        userEmail:""
    },
    reducers:{
        singInUser(state,action){
            state.userEmail=action.payload
        }
    }
})


export default AuthSlice.reducer

export const {singInUser}=AuthSlice.actions

