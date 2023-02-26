import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../Slice/AuthSlice";


export const Store=configureStore({
    reducer :{
        AuthSlice:AuthSlice
    }
})
