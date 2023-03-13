import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Outlet, Link, useNavigate, useLocation } from 'react-router-dom'

const Userprofile = () => {

   const {userEmail}=useSelector((state)=>state.AuthSlice)
   const { pathname } =useLocation()
   const Navigate=useNavigate()


   useEffect(()=>{

    if(userEmail){

    }
    else{
        Navigate('/')
    }

    console.log('userProfile')
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[userEmail])


    return (
        <div className="w-[100%] flex flex-col lg:flex-row ">

            <section className='w-screen lg:w-[20%] bg-white border-r-[1px] border-cyan-400  hidden lg:block' >
                <div className='sidenav mt-[20%] flex sm:flex-col flex-row '>
                    <li className="border-t md:border-none pr-7 hover:bg-green-200 hover:text-black " >
                        <Link to="/userProfile" className={`block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker hover:font-semibold  w-full ${pathname === "/userProfile" ? 'active py-3' : "bg-white hover:bg-green-200"}`}><i className="fa-solid fa-square-plus"></i> <span className="ml-2">Profile</span></Link>
                    </li>
                    <li className="border-t md:border-none pr-7 hover:bg-green-200  hover:text-black" >
                        <NavLink to="/userProfile/addProject" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker hover:font-semibold  w-full"><i className="fa-solid fa-address-card"></i> <span className="ml-2">Add Projects</span></NavLink>
                    </li>
                    <li className="border-t md:border-none pr-7  hover:bg-green-200 hover:text-black" >
                        <NavLink to="/userProfile/showProject" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker hover:font-semibold  w-full"><i className="fa-solid fa-bars-progress"></i> <span className="ml-2">Project List</span></NavLink>
                    </li>
                </div>
            </section>

            <div className="flex justify-center items-center mt-5 mb-3 md:block lg:hidden">
                <Link to="/userProfile" className="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800" >
                    <div className="py-2 px-3 lg:px-8 bg-indigo-100 text-indigo-700 rounded-full">
                        <p> Profile </p>
                    </div>
                </Link>
                <Link to="/userProfile/addProject" className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8" >
                    <div className="py-2  px-3 lg:px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                        <p>Add Projects  </p>
                    </div>
                </Link>
                <Link to="/userProfile/showProject" className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8">
                    <div className="py-2  px-3 lg:px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full">
                        <p>Project List</p>
                    </div>
                </Link>
            </div>

            <div className='w-screen lg:w-[80%] '>
                <Outlet />
            </div>
        </div>
    )
}

export default Userprofile