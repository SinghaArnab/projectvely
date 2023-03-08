import React from 'react'

const CourseCard = () => {
  return (
    
<div className="sm:w-[23%] w-[90%] bg-white   rounded-xl shadow-lg transform hover:scale-105 transition duration-500 my-5 ">
        
        <div className="relative ">
          <img className="w-full  " src="https://geeks-react.netlify.app/static/media/course-javascript.8afdeff32816e30422da.jpg" alt="Colors" />
          <p className="absolute top-0 bg-[crimson] text-white font-semibold py-1 px-3 rounded-br-lg ">FREE</p>
        </div>
        {/* <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">React js Projects  for {x.Level}</h1> */}
        <h1 className="mt-4 text-gray-800  font-bold cursor-pointer pl-5  text-lg "> A Complete Beginner’s Guide to JavaScript</h1>
        <div className="my-4 pl-5">
      
          <div className="flex space-x-1 p-2 items-center text-lg">
            <p> 4h 10m</p>
            <p>Advance</p>
          </div>
          <div className="flex space-x-1 p-2  items-center font-bold text-lg">
            <p>$700 </p>
          </div>
          <div className="flex space-x-1 p-2 justify-between items-center">
            <img className='h-8 w-8 rounded-full' src="https://geeks-react.netlify.app/static/media/avatar-3.d3ce7f20113e7d124501.jpg" alt="" />
            <p>Jenny Wilson</p>
          </div>
         
        </div>
      </div>
  )
}

export default CourseCard