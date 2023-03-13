import React, { useState, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { featchAllData, STATUS } from '../../Redux/Slice/DataSlice'
import Spinner from '../../assets/Spinner'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from '../../Firebase/FirebaseAuth'
import { SignoutUser, singInUser } from '../../Redux/Slice/AuthSlice'


const auth = getAuth(app);

const Navbar = () => {
  const [navbarOpen] = useState(false)
  const { status } = useSelector((state) => state.QuestionData)
  const [dropDown, setDropdown] = useState(false)
  const [logToggle, setToggle] = useState(false)



  const dispatch = useDispatch()
  const { userEmail } = useSelector((state) => state.AuthSlice)

  useEffect(() => {
    dispatch(featchAllData())

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(singInUser(user.email))
      } else {

      }
    });
    console.log("Admin Nav")

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const logtoggle = () => {
    setToggle(!logToggle)
  }



  if (status === STATUS.LOADING) {
    return (
      <Spinner />
    )
  }

  return (
    <div className='w-screen '>
      <div className="flex flex-wrap place-items-center  w-screen ">
        <section className="relative w-[100%]">
          <nav className="nav flex flex-wrap items-center justify-between w-[100%] p-2 bg-white shadow-sm">
            <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest lg:w-[10%]">
              <div className="flex flex-no-shrink items-center mr-6  text-grey-darkest">
                <img src="./Logo2.png" className='h-[35px] mix-blend-darken' alt="Educate" />
              </div>
            </div>
            <input className={"menu-btn hidden" + (navbarOpen ? " flex" : " hidden")} type="checkbox" id="menu-btn" />
            <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" htmlFor="menu-btn">
              <span className="navicon bg-grey-darkest flex items-center relative"></span>
            </label>

            <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full lg:w-[80%] md:w-auto ">
              <li className="border-t md:border-none ml-0 lg:ml-4" type="checkbox" >
                <NavLink to="/" className="block  md:inline-block px-4 py-3 no-underline  hover:text-grey-darker font-bold">Home </NavLink>
              </li>
              <li className="border-t md:border-none ml-0 lg:ml-4"  >
                <NavLink to="/InterviewPrep" className="block md:inline-block px-4 py-3 no-underline  hover:text-grey-darker">Interview Prep</NavLink>
              </li>
              <li className="border-t md:border-none ml-0 lg:ml-4"  >
                <NavLink to="/allprojects" className="block md:inline-block px-4 py-3 no-underline  hover:text-grey-darker">All Projects</NavLink>
              </li>
              <li className="border-t md:border-none ml-0 lg:ml-4"  >
                <NavLink to="/courses" className="block md:inline-block px-4 py-3 no-underline  hover:text-grey-darker">All Courses</NavLink>
              </li>
              {
                userEmail &&

                <li className="border-t md:border-none ml-0 lg:ml-4"  >
                  <NavLink to="/userProfile" className="block md:inline-block px-4 py-3 no-underline  hover:text-grey-darker">Profile</NavLink>
                </li>}

              {
                !userEmail &&
                <li className="border-t md:border-none ml-0 lg:ml-4"  >
                  <NavLink to="/login" className="block md:inline-block px-4 py-3 no-underline  hover:text-grey-darker">Login</NavLink>
                </li>
              }
              {userEmail &&

                <div className='block  lg:hidden relative justify-end lg:justify-center items-center flex-col lg:flex-row ml-0 lg:ml-4'>
                  <button className='bg-yellow-300 text-black p-2  font-semibold w-[100%] lg:w-auto lg:ml-0' onClick={() => setDropdown(!dropDown)}>
                    {userEmail && userEmail} ▶️
                  </button>

                  <button className={'h-[40px] w-[100%] lg:w-[100px] bg-red-400 lg:ml-0 mt-2 lg:mt-0' + (dropDown ? " bg-red-400 rounded-sm ml-2" : "block lg:hidden")} onClick={() => dispatch(SignoutUser())}>
                    logout
                  </button>

                </div>


              }

              {userEmail &&
                
                <div className='flex flex-col ml-[20%]'>
                <section className='hidden  lg:block shadow-md shadow-black/20 dark:shadow-white/20 '>

                  <div className='flex  justify-end items-center h-[100%]'>

                    <a href="#none" className="relative inline-flex items-center justify-center w-10 text-white rounded-full">
                      <img src="https://i.pravatar.cc/40?img=3" alt="user name" title="user name" width="40" height="40" className="max-w-full border-2 border-white rounded-full" />
                    </a>

                    <button onClick={logtoggle} className=' text-black font-semibold w-[100%] lg:w-auto lg:ml-0'>{userEmail && userEmail} <i className="fa-solid fa-angle-down"></i>
                    </button>

                    {logToggle &&
                      <ul className=' top-12 mr-5 px-2 py-2  absolute flex flex-col gap-2' onMouseLeave={logtoggle}>
                        <li className={' relative z-40 h-[40px] w-[100%]  flex justify-center items-center text-center lg:w-[100px] bg-gray-200 hover:bg-gray-400 cursor-pointer lg:ml-0 mt-2 lg:mt-0'} onClick={() => dispatch(SignoutUser())}>
                          <i class="fa-solid fa-right-from-bracket"></i><span className="ml-2">logout</span>
                        </li>
                      </ul>
                    }
                  </div>
                </section>
              </div>}
            </ul>


          </nav>
        </section>
      </div>
      <Outlet />
    </div>
  )
}

export default Navbar