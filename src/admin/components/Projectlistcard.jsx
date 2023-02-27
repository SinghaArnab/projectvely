import React, { useEffect, useState } from 'react'
import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { app } from '../../Firebase/FirebaseAuth';


const fireStorage = getStorage(app);

const Projectlistcard = ({x,projectId}) => {


    const [imageurl, setImageUrl] = useState()


    
  const getProjectImg = (path) => {
    return getDownloadURL(ref(fireStorage, path))
  }
  useEffect(() => {
    getProjectImg(x.projectImage).then((url) => setImageUrl(url))

    console.log("I am Show Cars Card")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    
    <div className='w-[95%] lg:w-[25%]' key={projectId}>

                <a href="#none" className="group relative block overflow-hidden">

                    <img
                        src={imageurl && imageurl}
                        alt=""
                        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                    />
                </a>
                    <div className="relative border border-gray-100 bg-white p-6 flex gap-4 flex-col">
                     

                        <h3 className="mt-4 text-lg font-medium text-gray-900">{x && x.projectName}
                        <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium float-right mr-2"> React </span>
                        </h3>

                        <div className='flex justify-around items-center w-[100%]'>
                            <button
                                className="block w-[45%] rounded bg-red-500 p-4 text-sm font-medium transition hover:scale-105"
                            >
                                Edit
                            </button>
                            <a href={x && x.projectLiveLink} className='w-[45%]'>
                            <button
                                className="block w-[100%] rounded bg-purple-400 p-4 text-sm font-medium transition hover:scale-105"
                            >
                                Live Demo
                            </button>
                            </a>
                            
                        </div>
                    </div>
                
            </div>
  )
}

export default Projectlistcard