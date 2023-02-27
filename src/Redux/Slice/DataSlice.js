import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFirestore, collection, getDocs,} from "firebase/firestore";
import { app } from "../../Firebase/FirebaseAuth";


const fireStore=getFirestore(app)

const DataSlice=createSlice({
    name:'dataSlice',
    initialState:{
        QuestionData:[],
        ProjectData:[],
        Category:[],
        status:""
    },
    reducers:{

    },
   extraReducers: (builder) => {

    builder.addCase(fetchData.pending, (state) => {
        console.log("pending");
        state.status ="pending"
      })
        .addCase(fetchData.fulfilled, (state, action) => {
          state.QuestionData = action.payload.QueData
          state.ProjectData = action.payload.ProData
          state.Category = action.payload.Category
          console.log("Success");
          state.status="Success"
        })
        .addCase(fetchData.rejected, (state) => {
          console.log("rejected");
          state.status="rejected"
        })

    }
})


export const fetchData=createAsyncThunk('dataSlice/ProjectData',async ()=>{

    const getQuesionData=await getDocs(collection(fireStore,'Question'))
    const getProjectData=await getDocs(collection(fireStore,'Projects'))
    const getCategoryData=await getDocs(collection(fireStore,'SubjectCategory'))

    let QueData = []
    let ProData = []
    let Category = []
    getQuesionData.forEach((doc) => {
      QueData = [...QueData, doc.data()]
    })
    getProjectData.forEach((doc) => {
      ProData = [...ProData, doc.data()]
    })
    getCategoryData.forEach((doc) => {
      Category = [...Category, doc.data()]
    })
  
    return { QueData: QueData, ProData: ProData, Category: Category }
})


export default DataSlice.reducer

