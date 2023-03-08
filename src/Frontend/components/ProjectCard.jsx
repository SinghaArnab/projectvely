import React,{useEffect,useState} from "react";

import {getStorage,getDownloadURL,ref} from "firebase/storage"
import {app} from '../../Firebase/FirebaseAuth'
import { Link } from "react-router-dom";

const firestorage=getStorage(app)
const ProjectCard = ({x}) => {
  const [imageURL, setimageURL] = useState()

   /////featching the image 

const getCategoryImge=(path)=>{
  return getDownloadURL(ref(firestorage,path))
  }
    useEffect(() => {
      getCategoryImge(x.projectImage).then((url)=>setimageURL(url))
      console.log("I am project card")
  
    }, [x.projectImage])

  return (
    <div className="">
    <Link to={`/Projects/${x.id}`}>
    <div className="max-w-lg bg-white px-6 pt-6 pb-2 sm:m-0 m-3 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
        <h3 className="mb-3 text-xl font-bold text-indigo-600">{x.projectName}</h3>
        <div className="relative">
          <img className="w-full rounded-xl" src={imageURL} alt="Colors" />
          <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p>
        </div>
        {/* <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">React js Projects  for {x.Level}</h1> */}
        <h1 className="mt-4 text-gray-800   cursor-pointer"> {x.ProjectDes.slice(0,82)}</h1>
        <div className="my-4">
      
          <div className="flex space-x-1 items-center">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
            <p>{x.level} Projects</p>
          </div>
          <div className="flex space-x-1 items-center">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </span>
            <p>Html CSS JS</p>
          </div>
          <button className="mt-4 text-xl w-full text-white bg-green-500 py-2 rounded-xl shadow-lg" >See More</button>
        </div>
      </div>
      </Link>
      </div>
  )
}

export default ProjectCard