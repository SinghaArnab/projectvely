import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, onAuthStateChanged ,signOut } from "firebase/auth";
import { app } from '../../Firebase/FirebaseAuth';
import { singInUser } from '../../Redux/Slice/AuthSlice';


const auth = getAuth(app);

const AdminNav = () => {


    const { userEmail } = useSelector((state) => state.AuthSlice)
    const Navigate = useNavigate()
    const Dispatch = useDispatch()


    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {

                Dispatch(user.email)
            } else {
                Navigate('/')
            }
        });

        console.log("Admin Nav")


    }, [])

    const logout = () => {
        Navigate('/')
        signOut(auth).then(() => {
            Dispatch(singInUser(""))
          }).catch((error) => {
            console.log(error)
          });
    }
    return (
        <div className="flex flex-wrap place-items-center  ">
            <section className="relative w-[100%]">

                <nav className="nav flex flex-wrap items-center justify-between w-[100%] p-2 bg-white shadow-2xl">
                    <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
                        <svg className="fill-current h-8 mr-2 w-8" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" clipRule="evenodd" viewBox="0 0 716 895">
                            <path d="M357.776 0l357.77 178.885v536.657l-357.77 178.89L0 715.542V178.885"></path>
                            <path className="text-white fill-current" d="M357.776 804.982l268.32-134.16v-178.89l-89.44-44.72 89.44-44.72V223.606L357.776 89.442v626.1l-178.89-89.44V178.885l-89.443 44.721v447.216l268.333 134.16z"></path>
                            <path d="M447.216 670.822l89.44-44.72v-89.45l-89.44-44.72v178.89zM447.216 402.492l89.44-44.721v-89.443l-89.44-44.722"></path>
                        </svg>
                        <span className="font-semibold text-xl tracking-tight">
                            <div className="waviy">
                                <span style={{ "--i": 1 }}>P</span>
                                <span style={{ "--i": 2 }}>R</span>
                                <span style={{ "--i": 3 }}>O</span>
                                <span style={{ "--i": 4 }}>J</span>
                                <span style={{ "--i": 5 }}>E</span>
                                <span style={{ "--i": 6 }}>C</span>
                                <span style={{ "--i": 7 }}>T</span>
                                <span style={{ "--i": 3 }}>&nbsp;&nbsp;</span>
                                <span style={{ "--i": 7 }}>V</span>
                                <span style={{ "--i": 8 }}>E</span>
                                <span style={{ "--i": 9 }}>L</span>
                                <span style={{ "--i": 10 }}>L</span>
                                <span style={{ "--i": 11 }}>Y</span>

                            </div>
                        </span>
                    </div>

                    <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
                    <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" htmlFor="menu-btn">
                        <span className="navicon bg-grey-darkest flex items-center relative"></span>
                    </label>

                    <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
                        <li className="border-t md:border-none ml-0 lg:ml-4" type="checkbox" >
                            <NavLink to="/Dashboard" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">Dashboard</NavLink>
                        </li>

                        <li className="border-t md:border-none ml-0 lg:ml-4" >
                            <NavLink to="/Dashboard/AddQuestion" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Add Question</NavLink>
                        </li>

                        <li className="border-t md:border-none ml-0 lg:ml-4" >
                            <NavLink to="/Dashboard/AddProjects" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Add Projects</NavLink>
                        </li>

                        <li className="border-t md:border-none ml-0 lg:ml-4" >
                            <NavLink to="/Dashboard/showprojects" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Project List</NavLink>
                        </li>

                        <li className="border-t md:border-none ml-0 lg:ml-4" >
                            <NavLink to="/Dashboard/Category" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Category</NavLink>
                        </li>

                        <div className='relative flex justify-end lg:justify-center items-center flex-col lg:flex-row ml-0 lg:ml-4'>
                            <button className='bg-yellow-300 text-black p-2  font-semibold w-[100%] lg:w-auto lg:ml-0'>{userEmail && userEmail}
                            </button>

                            <button className={'h-[40px] w-[100%] lg:w-[100px] bg-red-400 lg:ml-0 mt-2 lg:mt-0'} onClick={logout}>
                                logout
                            </button>

                        </div>


                    </ul>
                </nav>

            </section>

            <Outlet />
        </div>
    )
}

export default AdminNav