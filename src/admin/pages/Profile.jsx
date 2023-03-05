import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {

    const [isUpdate, setUpdate] = useState(false)
    const { userEmail } = useSelector((state) => state.AuthSlice)
    return (
        <div className='flex flex-col min-h-auto lg:min-h-[90vh]'>
            <section className='min-h-[8vh] bg-[#F8F9F9] flex justify-center items-center shadow-md shadow-black/20 dark:shadow-white/20 lg:mb-4'>
                <h1 className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-3xl'>Your Profile</h1>
            </section>
            <div className=' relative flex justify-center items-start h-[80vh] lg:h-full'>

                <div className=" relative profileshadow flex justify-center items-center w-[100%] lg:w-[80%] h-auto lg:h-[450px] bg-white flex-col mt-6">


                    <div className="relative flex justify-center items-end lg:w-[80%] h-[300px] lg:h-[400px] rounded-[50%] ">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU' className="rounded-[50%] border-8 border-grey-500 h-[220px] w-[220px] object-cover" width='300' alt="" />
                    </div>
                    <div className="flex justify-center items-center w-[100%] lg:h-full bg-neutral-700 flex-col">

                        <div className="flex justify-center items-center flex-col mt-5 " id='one'>
                            <h1 className="text-[20px]" >Hi,Your Profile Name is</h1>
                            <h1 className=" uppercase text-[30px] font-bold flex flex-wrap sm:text-[30px] ">{userEmail.slice(0, 11)}</h1>
                        </div>
                        <div className="flex justify-center items-center flex-col mt-5 " id='one'>
                            <h1 className="text-[20px]" >Your Email Address is</h1>
                            <h1 className=" font-bold flex flex-wrap text-[20px] sm:text-[30px] ">{userEmail && userEmail}</h1>
                        </div>

                        <div className='flex justify-end items-center w-[100%] px-6 py-7 lg:py-4'>
                            <button
                                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto mx-5 mb-[31px]"
                                onClick={() => setUpdate(true)}
                            >
                                Update Profile
                            </button>

                            {isUpdate &&

                                <div className=' absolute flex w-[100%] lg:w-[96%] h-[50%]  bg-neutral-700  bottom-0'>
                                    <form action="" className="w-full px-4 lg:px-0 mx-auto flex flex-col justify-center items-center">
                                        <div className="pb-2 pt-4 w-[80%] lg:w-[60%]">
                                            <input type="email" name="email" id="email" placeholder="Email" className="block w-[100%] p-4 text-lg rounded-sm bg-black" />
                                        </div>
                                        <div className="pb-2 pt-4 w-[80%] lg:w-[60%]">
                                            <input className="block w-full p-4 text-lg rounded-sm bg-black" type="password" name="password" id="password" placeholder="Password" />
                                        </div>
                                        <div className="px-4 pb-1 pt-2 flex gap-4 w-[60%]">
                                            <button className="uppercase block w-full h-[40px] p-1 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">Update</button>
                                            <button onClick={() => setUpdate(false)} className="uppercase block w-full h-[40px] p-1 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">Cancel</button>
                                        </div>

                                    </form>
                                </div>}
                        </div>
                    </div>




                </div>

            </div>
        </div>
    )
}

export default Profile