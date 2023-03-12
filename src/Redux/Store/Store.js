import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../Slice/AuthSlice";
import DataSlice from "../Slice/DataSlice";
import CommentSlice from "../Slice/CommentSlice";


export const Store=configureStore({
    reducer :{
        AuthSlice:AuthSlice,
        QuestionData:DataSlice,
        Comments:CommentSlice
    }
})
