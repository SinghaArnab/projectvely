import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../Slice/AuthSlice";
import DataSlice from "../Slice/DataSlice";


export const Store=configureStore({
    reducer :{
        AuthSlice:AuthSlice,
        QuestionData:DataSlice,
    }
})
