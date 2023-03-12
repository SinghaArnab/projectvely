import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../Firebase/FirebaseAuth";

const fireStoreDb = getFirestore(app);

const CommentSlice = createSlice({
  name: "comments",
  initialState: {
    CommentsData: [],
  },
  reducers: {},
  extraReducers:(builder) =>{
    builder.addCase(featchcommentData.pending,(state)=>{
        console.log("pending");

    })
    .addCase(featchcommentData.fulfilled,(state,action)=>{
        state.CommentsData=action.payload.Commentsdata
    })
    .addCase(featchcommentData.rejected,(state)=>{
        console.log("failed");

    })
    
  },
});

export const featchcommentData = createAsyncThunk("Info/CommnetsData", async () => {
  const Comments = await getDocs(collection(fireStoreDb, "userComments"));

  let comment = [];
 let  commentsid={}

  Comments.forEach((doc) => {
    commentsid={...doc.data(),orgID:doc.id}

    comment = [...comment, commentsid];
  });

  return {
    Commentsdata: comment,
  };
});



export default CommentSlice.reducer