import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


import { getStorage, getDownloadURL, ref } from "firebase/storage"
import { app } from "../../Firebase/FirebaseAuth";


const firestorage = getStorage(app)

const InterviewCard = ({ x }) => {
  const [imageURL, setimageURL] = useState()
  const navigate = useNavigate()

  const sendLevel = (level, category) => { 
    navigate(`/Question/${level}/${category}`)
  }
  /////featching the image 

  const getCategoryImge = (path) => {
    return getDownloadURL(ref(firestorage, path))
  }
  useEffect(() => {
    getCategoryImge(x.projectImage).then((url) => setimageURL(url))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold text-indigo-600 text-center">
        {x.categoryName} interview questions
      </h3>
      <div className="relative">
        <img
          className="w-full rounded-xl"
          src={imageURL}
          alt="Colors"
        />
        <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
          FREE
        </p>
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer text-center">
        {x.categoryName} interview questions
      </h1>
      <div className="my-4">
        <div className="flex space-x-1 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600 mb-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </span>
          <p>50+ Questions </p>
        </div>
        <div className="flex space-x-1 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600 mb-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </span>
          <p>Chapter wise Questions</p>
        </div>
        <button
          className="mt-4 text-lg w-[100px] sm:mx-2 mx-1 text-white bg-violet-500 py-2 rounded-xl shadow-lg"
          onClick={() => sendLevel("Easy", x.categoryName)}
        >
          Easy
        </button>
        <button
          className="mt-4 text-lg  w-[100px]  sm:mx-2 mx-1 text-white bg-violet-600 py-2 rounded-xl shadow-lg"
          onClick={() => sendLevel("Moderate", x.categoryName)}
        >
          Moderate
        </button>
        <button
          className="mt-4 text-lg  w-[100px]  sm:mx-0    text-white mx-1 bg-[crimson] py-2 rounded-xl shadow-lg"
          onClick={() => sendLevel("Hard", x.categoryName)}
        >
          hard
        </button>
      </div>
    </div>
  );
};

export default InterviewCard;
