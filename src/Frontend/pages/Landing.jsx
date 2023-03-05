import React, { useId } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProjectData } from '../../Redux/Slice/DataSlice'


const Landing = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const sendLevel = (level) => {
    console.log(level);
    navigate('/Projects')
    dispatch(getProjectData(level))

  }

  const id=useId()
  console.log(id)



  return (
    <div className="min-h-screen bg-gradient-to-tr flex justify-center items-center ">
      <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">


        <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
          <h3 className="mb-3 text-xl font-bold text-indigo-600 text-center">Beginner's React Projects</h3>
          <div className="relative">
            <img className="w-full rounded-xl" src="https://themeselection.com/wp-content/uploads/2021/06/React-Projects-Ideas-For-Begenner.jpg" alt="Colors" />
            <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p>
          </div>
          <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer text-center">React js Projects  for Absolute Beginners</h1>
          <div className="my-4">

            <div className="flex space-x-1 items-center">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
              <p>20+ Projects</p>
            </div>
            <div className="flex space-x-1 items-center">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              <p>React JS</p>
            </div>
            <button className="mt-4 text-xl w-full text-white bg-green-500 py-2 rounded-xl shadow-lg" onClick={() => sendLevel("Beginner")}>See Projects</button>
          </div>
        </div>



        <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
          <h3 className="mb-3 text-xl font-bold text-indigo-600 text-center">React js Intermediate  Projects</h3>
          <div className="relative">
            <img className="w-full rounded-xl" src="https://cdn.hackr.io/uploads/posts/large/1634572292WGvQOJ8eWC.png" alt="Colors" />
            <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p>
          </div>
          <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer text-center">React js  Projects for Intermediates </h1>
          <div className="my-4">

            <div className="flex space-x-1 items-center">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
              <p>20+ Projects</p>
            </div>
            <div className="flex space-x-1 items-center">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              <p>React JS</p>
            </div>
            <button className="mt-10 text-xl w-full text-white bg-[crimson] py-2 rounded-xl shadow-lg" onClick={() => sendLevel("Intermediate")}>See Projects</button>
          </div>
        </div>



        <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
          <h3 className="mb-3 text-xl font-bold text-indigo-600 text-center">React js Advance Projects</h3>
          <div className="relative">
            <img className="w-full rounded-xl" src="https://coderstrustbd.com/wp-content/uploads/2021/08/react-js-banner.jpg" alt="Colors" />
            <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p>
          </div>
          <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer text-center">React js Advance Projects </h1>
          <div className="my-4">

            <div className="flex space-x-1 items-center">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
              <p>20+ Projects</p>
            </div>
            <div className="flex space-x-1 items-center">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              <p>React JS</p>
            </div>
            <button className="mt-4 text-xl w-full text-white bg-yellow-300 py-2 rounded-xl shadow-lg" onClick={() => sendLevel("Advance")}>See Projects</button>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Landing