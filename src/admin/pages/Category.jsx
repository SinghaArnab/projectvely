import React from 'react'

const Category = () => {
    return (
        <div className="w-[100%] min-h-[90.8vh] flex justify-center items-center flex-col bg-gray-900 pb-10 ">

            <div className='w-[90%] lg:w-[70%] mt-10 lg:mt-10 bg-green-300 rounded-t-md text-center flex justify-center items-center p-8 '>
                <h1 className=' font-semibold text-xl lg:text-5xl'>Add Category <span className='text-white cursor-pointer'><i className="fa-solid fa-plus text-white"></i></span> </h1>
            </div>

            <div className='w-[90%] lg:w-[70%] mt-2 lg:mt-0 bg-red-300 rounded-b-md text-center flex justify-center items-center p-2  flex-col lg:flex-row'>
            <span className="whitespace-nowrap px-3 py-3  font-medium float-right text-2xl mr-10 hidden lg:block">Category Name </span>
                <input type='text' className=' font-semibold lg:text-xl outline-none p-1.5 w-[97%] lg:w-[40%]' placeholder='Enter New Category Name...'/>
                <div className='flex justify-center items-center flex-row mt-2 lg:mt-0'>
                <span className="whitespace-nowrap bg-yellow-400 px-10 lg:px-3 py-2 text-md font-medium float-right mr-2"> Add Category </span>
                <span className="whitespace-nowrap bg-red-400 px-10 lg:px-3 py-2 text-md font-medium float-right mr-2"> Cancel </span>
                </div>
            </div>



            <div className="overflow-auto lg:overflow-visible min-w-[95%] lg:min-w-[70%]  flex justify-evenly items-center flex-col rounded-lg gap-2 mt-10">
                <div className='flex justify-between lg:justify-around  items-center w-[100%] p-4 rounded-lg  bg-[#EF9A53] mb-4'>
                    <div>
                        <h1 className='text-xl font-bold text-gray-900 sm:text-3xl'>Category</h1>
                    </div>
                    <div className='flex justify-center items-center flex-row mr-[4%]'>
                        <h1 className='text-xl font-bold text-gray-900 sm:text-3xl'>Actions</h1>
                    </div>
                </div>
                <div className='flex justify-between lg:justify-around items-center w-[100%] p-3 rounded-lg  bg-[#F5D5AE]'>
                    <div>
                        <h1 className='text-xl font-bold text-gray-900 sm:text-2xl'>1. Html</h1>
                    </div>
                    <div className='flex justify-center items-center flex-row gap-2 lg:gap-10'>
                        <h1 className='whitespace-nowrap bg-yellow-400 px-5 py-3 text-xs font-medium float-right mr-2 rounded-md transition hover:scale-105 cursor-pointer'>Edit</h1>
                        <h1 className='whitespace-nowrap bg-red-500 px-5 py-3 text-xs font-medium float-right mr-2 rounded-md transition hover:scale-105 cursor-pointer'>Delete</h1>
                    </div>
                </div>





            </div>
           
        </div>
    )
}

export default Category