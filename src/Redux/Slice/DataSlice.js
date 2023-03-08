/* eslint-disable array-callback-return */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFirestore, collection,getDocs } from "firebase/firestore";
import { app } from "../../Firebase/FirebaseAuth";

const fireStoreDb = getFirestore(app);

export const STATUS=Object.freeze({
  IDEL:'idle',
  ERROR:'Error',
  LOADING:'loading',
})


const DataSlice=createSlice({
  name:"QuestionData",
  initialState:{
    QuestionData:[],
    QuestionCategoryData:[],
    fliterQuestions:[],
    ProjectData:[],
    fliterProjectData:[],
    RelatedProjectData: [],
    SeachProjectData: [],
    status:STATUS.IDEL,
  },reducers:{
    getQuestion(state,action){
      if(state.QuestionData){
        const {level,category}=action.payload
        console.log(level,category);
       const filterdata= state.QuestionData.filter((x)=>x.category===category)
        .filter((x)=>x.level===level)

        state.fliterQuestions=filterdata
      }
    },
    getProjectData(state,action){
      if(state.ProjectData){
  
        console.log(action.payload);
    
       const filterdata= state.ProjectData.filter((x)=>x.level===action.payload)
       console.log(filterdata);

        state.fliterProjectData=filterdata
      }
      }
 ,
      getRealatedProject(state, action) {
        if (state.ProjectData) {
          const filterdata = state.ProjectData.filter(
            (x) => x.level === action.payload
          );
          let related = [];
          filterdata.map((x, index) => {
            if (index < 3) {
              related = [...related, x];
            }
          });
  
          state.RelatedProjectData = related;
        }
      },
      searchProject(state, action) {
        if(state.ProjectData){
          const finddata =  state.ProjectData.filter(
            (x) => x.projectName === action.payload
          );
          state.SeachProjectData = finddata;
        }
       
      },
    
      },extraReducers:(builder)=>{
        builder.addCase(featchAllData.pending, (state) => {
            console.log("pending");
            state.status =STATUS.LOADING;
          })
          .addCase(featchAllData.fulfilled,(state,action)=>{
            state.QuestionData=action.payload.Questiondata
            state.QuestionCategoryData=action.payload.CategoryQData
            state.ProjectData=action.payload.ProjectData
            console.log("Success");
            state.status=STATUS.IDEL
          })
          .addCase(featchAllData.rejected,(state,actions)=>{
            console.log("rejected");
            state.status=STATUS.ERROR
          })

    }
})

export const featchAllData=createAsyncThunk("Info/QuestionData",async()=>{
  const allQuestionData = await getDocs(collection(fireStoreDb, "Question"));
  const allCategoryData = await getDocs(collection(fireStoreDb, "SubjectCategory"));
  const allProjectData = await getDocs(collection(fireStoreDb, "Projects"));

  let Questiondata=[] 
  let CategoryQData=[] 
  let ProjectData=[] 
  
  allQuestionData.forEach((doc) => { Questiondata=[...Questiondata,doc.data()] })
  allCategoryData.forEach((doc) => { CategoryQData=[...CategoryQData,doc.data()] })
  allProjectData.forEach((doc) => { ProjectData=[...ProjectData,doc.data()] })


   return {Questiondata:Questiondata,CategoryQData:CategoryQData,ProjectData:ProjectData}
})

export default DataSlice.reducer
export const {getQuestion,getProjectData,getRealatedProject,searchProject,}=DataSlice.actions