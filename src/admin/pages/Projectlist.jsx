import React, { useEffect, useState } from 'react'
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from '../../Firebase/FirebaseAuth';
import Projectlistcard from '../components/Projectlistcard';


const fireStoreDb = getFirestore(app);

const Projectlist = () => {


  const [project, setProject] = useState([])
  const [isLoading, setLoading] = useState(true)

  const allProjects = () => {
    return getDocs(collection(fireStoreDb, 'Projects'));
  }

  useEffect(() => {
    allProjects().then((pro) => setProject(pro.docs));
    setTimeout(() => {
      setLoading(false)
    }, 800)


    console.log("I am ShowCars")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (

    <>

      {
        isLoading ?

          <div className="w-[100%] h-[90.8vh] flex justify-center items-center ">
            <div className="loader w-[20%] ">
              <div className="square-item"></div>
              <div className="square-item"></div>
              <div className="square-item"></div>
              <div className="square-item"></div>
            </div>
          </div>
          :

          <div className='flex flex-col'>
            <section className='min-h-[8vh] bg-[#F8F9F9] flex justify-center items-center shadow-md shadow-black/20 dark:shadow-white/20 '>
              <h1 className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-bold text-transparent sm:text-3xl'>Project list</h1>
            </section>

            <div className=' relative w-[100%] min-h-[90.8vh] p-5 lg:p-10 flex justify-center items-center flex-wrap gap-10 flex-col lg:flex-row  '>


              {project && project.map((x, index) => {
                return (
                  <Projectlistcard x={x.data()} projectId={x.id} key={index} />
                )
              })

              }

            </div>
          </div>
      }

    </>
  )
}

export default Projectlist