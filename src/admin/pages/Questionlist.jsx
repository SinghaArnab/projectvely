/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from '../../Firebase/FirebaseAuth';
import Questionlistcard from '../components/Questionlistcard';


const fireStore = getFirestore(app);

const Questionlist = () => {
  const [Question, setQuestion] = useState([])

  const [serchQuery, setQuery] = useState("")

  const allQuestion = () => {
    return getDocs(collection(fireStore, 'Question'));
  }

  useEffect(() => {
    allQuestion().then((Que) => setQuestion(Que.docs));
    console.log("I am ShowCars")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const uniqueCategory = [...new Set(Object.values(Question.map(x => x.data().category)))];

  return (

    <div className='flex flex-col'>
      <section className='min-h-[8vh] bg-[#F8F9F9] flex justify-center items-center shadow-md shadow-black/20 dark:shadow-white/20 '>
        <h1 className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-3xl'>Questions</h1>
      </section>
      <section className="relative  lg:px-10  lg:pt-10 bg-blueGray-50 w-[100%] min-h-[95vh] ShowcarsBack">
        <div className="w-full mb-12 lg:px-0">
          <div
            className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded 
     bg-neutral-900 text-white mx-auto backdrop-blur-sm "
          >
            <div className="rounded-t mb-0 px-4 py-3 border-0 bg-black/50">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 flex justify-between items-center flex-row ">
                  <h3 className="font-semibold text-lg text-white">All Question
                    <span className="ml-5  lg:bg-yellow-200 py-1 px-4 lg:text-black rounded-sm">{Question && "Total Que listed - " + Question.length}</span>
                  </h3>

                  {/* <button className="bg-red-400 py-1 px-4"  onClick={refresh}> <i className="fa-solid fa-rotate-right ml-2"></i> Refresh</button> */}
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto ">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                      Q.No
                    </th>

                    <th className="px-2x align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                      <select name="menu" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 pl-6 text-[17px] rounded-full outline-none' value={serchQuery} onChange={(e) => setQuery(e.target.value)}>
                        <option disabled defaultValue>Select Company</option>
                        <option value="" >All Subject</option>
                        {
                          uniqueCategory && uniqueCategory.map((x, index) => {
                            return (
                              <option value={x} className=" bg-blue-900 hover:bg-blue-900" key={index} >{x}</option>
                            )
                          })
                        }

                      </select>
                    </th>

                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                      Question
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                      Answer
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {
                    Question && Question.filter((x) => {
                      if (serchQuery === '') {
                        return x
                      } else if (x.data().category.toLowerCase().includes(serchQuery.toLowerCase())) {
                        return x
                      }
                    }).map((x, index) => {
                      return (
                        <Questionlistcard x={x.data()} queId={x.id} index={index} key={index} />

                      )
                    })
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Questionlist