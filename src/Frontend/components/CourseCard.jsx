import React,{useEffect,useState} from "react";

import {getStorage,getDownloadURL,ref} from "firebase/storage"
import { app } from '../../Firebase/FirebaseAuth'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { courseDetails } from "../../Redux/Slice/DataSlice";

const firestorage=getStorage(app)

const CourseCard = ({x}) => {
  const Dispatch=useDispatch()

  const [imageURL, setimageURL] = useState()

  const getCategoryImge=(path)=>{
    return getDownloadURL(ref(firestorage,path))
    }

  useEffect(() => {
    getCategoryImge(x.CourseImage).then((url)=>setimageURL(url))
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const senddetails=()=>{
    Dispatch(courseDetails(x.CategoryName))
  }

  return (
    
<div className="sm:w-[23%] w-[90%] bg-white   rounded-xl shadow-lg transform hover:scale-105 transition duration-500 mb-3 ">
        <Link to={`/courses/${x.CategoryName}`} onClick={senddetails}>
        <div className="relative ">
          <img className="w-full  " src={imageURL} alt="Colors" />
          <p className="absolute top-0 bg-[crimson] text-white font-semibold py-1 px-3 rounded-br-lg ">FREE</p>
        </div>
        <h1 className="mt-4 text-gray-800 text-2xl font-bold text-center  cursor-pointer"> {x.CategoryName}</h1>
        <h1 className="mt-4 text-gray-800  font-bold cursor-pointer pl-5  text-lg "> {x.CourseTitle}</h1>
        <div className="my-4 pl-5">
      
          <div className="flex space-x-1 p-2 items-center text-lg">
            <p>{x.CourseDuration}</p>
            <p>Advance</p>
          </div>
          <div className="flex space-x-1 p-2  items-center font-bold text-lg">
            <p><i className="fa-sharp fa-solid fa-indian-rupee-sign pr-2"></i>{x.Price}</p>
          </div>
          <div className="flex space-x-1 p-2 justify-between items-center">
            <img className='h-8 w-8 rounded-full' src="https://geeks-react.netlify.app/static/media/avatar-3.d3ce7f20113e7d124501.jpg" alt="" />
            <p>{x.adminEmail}</p>
          </div>
         
        </div>
        </Link>
      </div>
  )
}

export default CourseCard