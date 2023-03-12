import React,{useState} from 'react'
import { collection,addDoc,getFirestore } from "firebase/firestore"; 
import { app } from '../../Firebase/FirebaseAuth'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { featchcommentData } from '../../Redux/Slice/CommentSlice';



const db=getFirestore(app)
const PostComments = ({projectId}) => {
    const [Comment,setComment]=useState("")
    const {userEmail} =useSelector((state)=>state.AuthSlice)
    const navigate=useNavigate()
    const currDate=new Date()
    const dispatch=useDispatch()
    
    const sendComments=async()=>{
        await addDoc(collection(db, "userComments"), {
            comment:Comment,
            email:userEmail,
            projectId:projectId,
            commentTime:currDate.toLocaleTimeString(),
            commentDate:currDate.toLocaleDateString()
          });
    }

const commentSubmit=(e)=>{
    e.preventDefault()
    console.log(Comment);
    if(userEmail){
        sendComments()
        dispatch(featchcommentData())
        
    }else{
        navigate('/login')
  

    }
    
    }


 
  return (
    <div className=" w-[100%] h-[30%]">
    <form className="w-[95%] bg-white rounded-lg px-4 mx-2 mt-2" onSubmit={commentSubmit}>
          <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
          <div className="w-[100%] md:w-full px-3 mb-2 mt-2">
             <textarea value={Comment} onChange={(e)=>setComment(e.target.value)} className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment' required></textarea>
          </div>
          <div className="md:w-[100%] flex items-start  px-3">
             <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                <svg fill="none" className="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p className="text-xs md:text-sm pt-px">Some HTML is okay.</p>
             </div>
             <div className="-mr-1">
                <input type='submit' className="bg-green-500 shadow-lg shadow- shadow-green-600 text-white font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1   " value='Post Comment'/>
             </div>
          </div>
       </form>
    </div>
  )
}

export default PostComments