import { createSlice } from "@reduxjs/toolkit";
import { signOut,getAuth } from 'firebase/auth'
import { app } from "../../Firebase/FirebaseAuth";


const auth=getAuth(app)
const AuthSlice=createSlice({
    name:'authSlice',
    initialState:{
        userEmail:""
    },
    reducers:{
        singInUser(state,action){
            state.userEmail=action.payload
        },
        SignoutUser(state){
            signOut(auth) 
            state.userEmail=""
        }
    }
})


export default AuthSlice.reducer

export const {singInUser,SignoutUser}=AuthSlice.actions

