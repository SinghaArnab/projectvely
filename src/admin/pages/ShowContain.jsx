/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'
import { getFirestore, collection, getDocs, orderBy, query } from "firebase/firestore";
import { app } from '../../Firebase/FirebaseAuth';
import { useNavigate } from 'react-router-dom';


const fireStore = getFirestore(app)

const ShowContain = () => {

    const [courseContain, setContain] = useState("")
    const [serchQuery, setQuery] = useState("")

    const [to] = useState(0)
    const [form, setForm] = useState(6)
    const Navigate = useNavigate()


    const getData = () => {
        return getDocs(query(collection(fireStore, 'CourseContent'), orderBy('Date', 'asc')));
    }



    useEffect(() => {
        getData().then((course) => setContain(course.docs))
        console.log("I am course Contain")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const handelUpdate = (data, id) => {
        const Data = { data: data, contentId: id }
        Navigate('/Dashboard/updatecontent', { state: Data })


    }

    return (
        <div className=" py-2 overflow-x-scroll lg:overflow-x-hidden sm:-mx-6  lg:pr-10 max-w-[102%] h-auto">
            <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 bg-white shadow-lg px-12">
                <div className="flex justify-between">
                    <div className="inline-flex border rounded w-screen lg:w-7/12 px-2 lg:px-6 h-12 bg-transparent ">
                        <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative ">
                            <div className="flex ">
                                <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                                    <svg width="18" height="18" className="w-4 lg:w-auto" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z" stroke="#455A64" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.9993 16.9993L13.1328 13.1328" stroke="#455A64" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                            <input type="text" className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs text-gray-500 font-thin bg-transparent" placeholder="Search any Question..." />
                        </div>
                    </div>
                </div>
            </div>
            <div className="align-middle inline-block min-w-full shadow overflow-x-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
                            <th className="px-x align-middle border-b-2 border-gray-300 py-2 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                <select name="menu" className='bg-pink-400 hover:bg-blue-700 text-white font-bold py-2 pl-6 text-[17px] rounded-full outline-none' value={serchQuery} onChange={(e) => setQuery(e.target.value)}>
                                    <option disabled defaultValue>Select Company</option>
                                    <option value="" >All Course</option>
                                    {
                                        courseContain && [...new Set(Object.values(courseContain.map(x => x.data().CourseName)))].map((x, index) => {
                                            return (
                                                <option value={x} className=" bg-blue-900 hover:bg-blue-900" key={index} >{x}</option>
                                            )
                                        })
                                    }

                                </select>
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Content Link</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Content Question</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Admin Email</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Created At</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-sm leading-4 text-blue-500 tracking-wider text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {courseContain && courseContain.filter((x) => {
                            if (serchQuery === '') {
                                return x
                            } 
                            else if (x.data().CourseName.toLowerCase().includes(serchQuery.toLowerCase())) {
                                return x
                            }
                        }).slice(to, form).map((x, index) => {

                            return (
                                <tr key={index + 7656}>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                        <div className="flex items-center">
                                            <div>
                                                <div className="text-sm leading-5 text-gray-800">{index + 1}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                        <div className="text-sm leading-5 text-blue-900">{x && x.data().CourseName}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{x && x.data().CourseLink}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{x && x.data().TopicQuestion}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                            <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                            <span className="relative text-xs">{x && x.data().adminEmail}</span>
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{x && x.data().Time}</td>
                                    <td className="px-4 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5 w-[150px]">
                                        <button onClick={() => handelUpdate(x.data(), x.id)} className="px-5 py-2 w-[150px] text-sm lg:text-md border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                                    </td>
                                </tr>
                            )

                        })


                        }
                    </tbody>

                </table>
                   <div className='flex justify-center items-center w-[100%]  my-4'>
                    <button class="bg-black/60 hover:bg-black/80 text-white font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded" onClick={()=>setForm(form+6)}>
                        Load More 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ShowContain