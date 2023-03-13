import { Link, NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { app } from '../../Firebase/FirebaseAuth';
import { singInUser } from '../../Redux/Slice/AuthSlice';



const auth = getAuth(app);
const firestore = getFirestore(app)

const AdminNav = () => {
    const { pathname } = useLocation()
    const { userEmail } = useSelector((state) => state.AuthSlice)
    const Navigate = useNavigate()
    const Dispatch = useDispatch()
    const [logToggle, setToggle] = useState(false)


    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                Dispatch(singInUser(user.email))
            } else {
                Navigate('/adminlogin')
            }
        });
        console.log("Admin Nav")
        getAdminData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    const getAdminData = async () => {
        const userRef = collection(firestore, "Admin");
        const result = query(userRef, where("Email", "==", userEmail));
        const Data = await getDocs(result);
        let admin = [];
        Data.forEach((element) => admin = [element.data()]);
        if (admin.length > 0) {

        }
        else {
            Navigate("/")
        }
    };


    const logout = () => {
        signOut(auth)
            .then(() => Navigate('/'))
            .then(() => { Dispatch(singInUser("")) })
            .catch((error) => {
                console.log(error)
            });
    }

    const logtoggle = () => {
        setToggle(!logToggle)
    }

    return (
        <div className="lg:flex lg:max-h-[110vh] w-screen">
            <section className='w-[20%] max-h-[110vh] hidden md:hidden lg:block  bg-white border-r-[1px] border-cyan-400 ' >
                <div className='flex pt-2 px-2 border-b-[1px] mb-10 bg-white'>
                    <div className="flex flex-no-shrink items-center mr-6  text-grey-darkest">
                        <img src="./Logo2.png" className='h-[50px] mix-blend-darken' alt="Educate" />
                    </div>
                </div>

                <div className='sidenav'>

                    <li className="border-t md:border-none pr-7 hover:bg-red-400  hover:text-white box arrow-left " type="checkbox " >
                        <Link to="/Dashboard" className={`block md:inline-block px-4 py-2 no-underline hover:bg-red-400  hover:text-white text-grey-darkest hover:text-grey-darker hover:font-semibold font-bold w-full ${pathname === "/Dashboard" ? 'active py-3' : "bg-white"}`}><i className="fa-solid fa-house-chimney "></i> <span className="ml-2 ">Dashboard</span> </Link>
                    </li>


                    <li className="border-t md:border-none pr-7 hover:bg-red-400 hover:text-white  box arrow-left">
                        <NavLink to="/Dashboard/AddQuestion" className=" block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:font-semibold  w-full"><i className="fa-solid fa-square-plus"></i> <span className="ml-2">Add Question</span></NavLink>
                    </li>

                    <li className="border-t md:border-none pr-7  hover:bg-red-400 hover:text-white " >
                        <NavLink to="/Dashboard/AddProjects" className=" block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker hover:font-semibold  w-full"><i className="fa-solid fa-square-plus"></i> <span className="ml-2">Add Projects</span></NavLink>
                    </li>

                    <li className="border-t md:border-none pr-7  hover:bg-red-400 hover:text-white" >
                        <NavLink to="/Dashboard/allquestion" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker hover:font-semibold  w-full"><i className="fa-solid fa-list-check"></i> <span className="ml-2"> Question List</span></NavLink>
                    </li>
                    <li className="border-t md:border-none pr-7  hover:bg-red-400 hover:text-white" >
                        <NavLink to="/Dashboard/showprojects" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker hover:font-semibold  w-full"><i className="fa-solid fa-bars-progress"></i> <span className="ml-2"> Project List</span></NavLink>
                    </li>

                    <li className="border-t md:border-none pr-7  hover:bg-red-400 hover:text-white" >
                        <NavLink to="/Dashboard/Category" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker hover:font-semibold  w-full"><i className="fa-solid fa-clipboard"></i> <span className="ml-2"> Category</span></NavLink>
                    </li>
                    <li className="border-t md:border-none pr-7  hover:bg-red-400 hover:text-white" >
                        <NavLink to="/Dashboard/Coursecategory" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker hover:font-semibold  w-full"><i className="fa-solid fa-address-card"></i> <span className="ml-2">Course Category</span></NavLink>
                    </li>
                    <li className="border-t md:border-none pr-7  hover:bg-red-400 hover:text-white" >
                        <NavLink to="/Dashboard/ShowCourseContain" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker hover:font-semibold  w-full"><i className="fa-solid fa-address-card"></i> <span className="ml-2">Show Course Contain</span></NavLink>
                    </li>
                    <li className="border-t md:border-none pr-7  hover:bg-red-400 hover:text-white" >
                        <NavLink to="/Dashboard/profile" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker hover:font-semibold  w-full"><i className="fa-solid fa-address-card"></i> <span className="ml-2">Profile</span></NavLink>
                    </li>
                    <li className="border-t md:border-none pr-7  hover:bg-red-400 hover:text-white" >
                        <NavLink to="/Dashboard/powerbranch" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker hover:font-semibold  w-full"><i className="fa-solid fa-people-group"></i> <span className="ml-2">Manage Accounts</span></NavLink>
                    </li>

                </div>
            </section>
            <section className="relative flex  md:block lg:hidden w-screen">

                <nav className="nav flex flex-wrap items-center justify-between w-screen p-2 bg-white shadow-2xl">
                    <div className='flex pt-2 px-1 bg-white'>
                        <div className="flex flex-no-shrink items-center mr-6  text-grey-darkest">
                            <img src="./Logo2.png" className='h-[50px] mix-blend-darken' alt="Educate" />
                        </div>
                    </div>

                    <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
                    <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" htmlFor="menu-btn">
                        <span className="navicon bg-grey-darkest flex items-center relative"></span>
                    </label>

                    <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-screen md:w-auto bg-green-200">
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
                        <li className="border-t md:border-none ml-0 lg:ml-4" >
                            <NavLink to="/Dashboard/Coursecategory" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Course Category</NavLink>
                        </li>
                        <li className="border-t md:border-none ml-0 lg:ml-4" >
                            <NavLink to="/Dashboard/ShowCourseContain" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Show Course Contain</NavLink>
                        </li>

                        <li className="border-t md:border-none ml-0 lg:ml-4" >
                            <NavLink to="/Dashboard/profile" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Profile</NavLink>
                        </li>
                        <li className="border-t md:border-none ml-0 lg:ml-4" >
                            <NavLink to="/Dashboard/powerbranch" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Manage Account</NavLink>
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

            <div className='flex flex-col w-screen lg:w-[80%] min-h-[100vh] overflow-y-scroll'>

                <div className='flex flex-col'>
                    <section className='hidden  lg:block min-h-[8.3vh] bg-[#F1F5FB] border-b-[1px]  shadow-md shadow-black/20 dark:shadow-white/20 '>

                        <div className='flex  justify-end items-center h-[100%]'>

                            <a href="#none" className="relative inline-flex items-center justify-center w-10 h-10 text-white rounded-full">
                                <img src="https://i.pravatar.cc/40?img=3" alt="user name" title="user name" width="40" height="40" className="max-w-full border-2 border-white rounded-full" />
                            </a>

                            <button onClick={logtoggle} className=' text-black p-2  font-semibold w-[100%] lg:w-auto lg:ml-0'>{userEmail && userEmail} <i className="fa-solid fa-angle-down"></i>
                            </button>

                            {logToggle &&
                                <ul className='text-gray-700 bg-gray-200 top-12 mr-5 px-2 py-2  absolute flex flex-col gap-2' onMouseLeave={logtoggle}>
                                    <li className={' h-[40px] w-[100%] lg:w-[100%] flex justify-center items-center border-b-[1px] border-black bg-gray-200 hover:bg-gray-400 cursor-pointer lg:ml-0 lg:mt-0'} onClick={() => Navigate('/Dashboard/profile')}>
                                        <i class="fa-solid fa-user"></i><span className="ml-2">Profile</span>
                                    </li>
                                    <li className={' relative z-40 h-[40px] w-[100%]  flex justify-center items-center text-center lg:w-[100px] bg-gray-200 hover:bg-gray-400 cursor-pointer lg:ml-0 mt-2 lg:mt-0'} onClick={logout}>
                                        <i class="fa-solid fa-right-from-bracket"></i><span className="ml-2">logout</span>
                                    </li>
                                </ul>
                            }
                        </div>
                    </section>
                </div>
                <Outlet />
            </div>

        </div>
    )
}

export default AdminNav