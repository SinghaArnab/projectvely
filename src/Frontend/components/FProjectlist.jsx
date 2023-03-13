import React, { useEffect, useState } from 'react'
import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { app } from '../../Firebase/FirebaseAuth';
import { useNavigate } from 'react-router-dom';

const fireStorage = getStorage(app);

const FProjectlist = ({x}) => {
  
  const Navigate = useNavigate();

  const [imageurl, setImageUrl] = useState()

  const getProjectImg = (path) => {
    return getDownloadURL(ref(fireStorage, path))
  }

  console.log(x)
  useEffect(() => {
    getProjectImg(x.projectImage).then((url) => setImageUrl(url))
    console.log("I am Show Cars Card")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handelUpdate = (x, projectId) => {
    const data = { x: x, projectId: projectId }
    Navigate('/userProfile/updateproject', { state: data });
  }

  return (
    <>
      <div className="max-w-sm lg:min-w-[45%] bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
        <h3 className="mb-3 text-xl font-bold text-indigo-600">{x && x.projectName}</h3>
        <div className="relative">
          <img className="w-full rounded-xl" src={imageurl && imageurl} alt="Colors" />
          <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">React JS</p>
        </div>
        <h1 className="mt-4 text-gray-800  font-bold cursor-pointer"> {x && x.ProjectDes.slice(0, 50)}</h1>
        <div className="my-4">

          <div className="flex space-x-1 items-center">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
            <p>{x && x.level} Projects</p>
          </div>
          <div className="flex space-x-1 items-center">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </span>
            <p>Html CSS JS</p>
          </div>
          <div className="flex  w-full justify-evenly">

            <button onClick={() => handelUpdate(x)} className="mt-4 text-xl w-[40%] text-white bg-[crimson] py-2 rounded-xl shadow-lg">Edit</button>
            <a href={x && x.projectLiveLink} target="_blank" rel="noreferrer" className='w-[40%]'>
              <button className="mt-4 text-xl  w-[100%] text-white bg-purple-400 py-2 rounded-xl shadow-lg">Live Demo</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default FProjectlist
