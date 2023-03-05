import React, { useState, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { featchAllData, STATUS } from '../../Redux/Slice/DataSlice'
import Spinner from '../../assets/Spinner'


const Navbar = () => {
  const [navbarOpen] = useState(false)
  const { status } = useSelector((state) => state.QuestionData)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(featchAllData())

    console.log("Nav bar")

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  if (status === STATUS.LOADING) {
    return (
      <Spinner />
    )
  }

  return (
    <div>
      <div className="flex flex-wrap place-items-center  ">
        <section className="relative w-[100%]">
          <nav className="nav flex flex-wrap items-center justify-between w-[100%] p-2 bg-white shadow-sm">
            <div className="flex flex-no-shrink items-center mr-6  text-grey-darkest">
             <img src="./Logo2.png" className='h-[50px] mix-blend-darken' alt="Educate" />
            </div>

            <input className={"menu-btn hidden" + (navbarOpen ? " flex" : " hidden")} type="checkbox" id="menu-btn" />
            <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" htmlFor="menu-btn">
              <span className="navicon bg-grey-darkest flex items-center relative"></span>
            </label>

            <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
              <li className="border-t md:border-none ml-0 lg:ml-4" type="checkbox" >
                <NavLink to="/" className="block  md:inline-block px-4 py-3 no-underline  hover:text-grey-darker font-bold">Home</NavLink>
              </li>


              <li className="border-t md:border-none ml-0 lg:ml-4"  >
                <NavLink to="/InterviewPrep" className="block md:inline-block px-4 py-3 no-underline  hover:text-grey-darker">Interview Prep</NavLink>
              </li>

            </ul>
          </nav>

        </section>


      </div>
      <Outlet />
    </div>
  )
}

export default Navbar