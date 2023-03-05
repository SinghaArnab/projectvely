import React, { useEffect, useState } from 'react'
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from '../../Firebase/FirebaseAuth';
import Addadmin from '../components/Addadmin';


const fireStore = getFirestore(app)

const Powerbranch = () => {

    const [branchData, setBranchData] = useState()
    const [isAddAdmin, setIsAdmin] = useState(false)

    const getAdmin = () => {
        return getDocs(collection(fireStore, 'Admin'));
    }
    const getUser = () => {
        return getDocs(collection(fireStore, 'Users'));
    }

    useEffect(() => {
        getAdmin().then((Admin) => setBranchData(Admin.docs));
        console.log("I am Power Branch")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handelUser = () => {
        getUser().then((user) => setBranchData(user.docs));
    }
    const handelAdmin = () => {
        getAdmin().then((Admin) => setBranchData(Admin.docs));
    }

    const AddadminBtn = () => {
        console.log('hello')
        setIsAdmin(true)
        //Navigate('/Dashboard/addadmin') 
    }

    return (
        <div className='flex flex-col w-[100%]'>
            <section className='min-h-[8vh] bg-[#F8F9F9] flex justify-center items-center shadow-md shadow-black/20 dark:shadow-white/20 '>
                <h1 className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-bold text-transparent sm:text-3xl'>Power Branch</h1>
            </section>
            {
                isAddAdmin ?

                    <Addadmin setIsAdmin={setIsAdmin} /> :

                    <div className='flex justify-start items-center  min-h-screen flex-col'>

                        <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10 w-[100%] lg:w-[90%]">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <a className="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800" href='#none'>
                                        <div onClick={handelAdmin} className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                                            <p>Admin</p>
                                        </div>
                                    </a>
                                    <a className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8" href='#none'>
                                        <div onClick={handelUser} className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                                            <p>User</p>
                                        </div>
                                    </a>
                                </div>
                                <button onClick={() => AddadminBtn()} className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                                    <p className="text-sm font-medium leading-none text-white">Add  Admin <i className="fa-solid fa-plus"></i></p>
                                </button>
                            </div>

                            <div className="w-[100%] lg:max-w-[90%] mx-auto bg-white shadow-lg rounded-sm border border-gray-200 mt-10">
                                <header className="px-5 py-4 border-b border-gray-100">
                                    <h2 className="font-semibold text-gray-800">Customers</h2>
                                </header>
                                <div className="p-3">
                                    <div className="overflow-x-auto">
                                        <table className="table-auto w-full">
                                            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                                <tr>
                                                    <th className="p-2 whitespace-nowrap">
                                                        <div className="font-semibold text-left">Name</div>
                                                    </th>
                                                    <th className="p-2 whitespace-nowrap">
                                                        <div className="font-semibold text-left">Email</div>
                                                    </th>
                                                    <th className="p-2 whitespace-nowrap">
                                                        <div className="font-semibold text-left">Status</div>
                                                    </th>
                                                    <th className="p-2 whitespace-nowrap">
                                                        <div className="font-semibold text-center">Action</div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-sm divide-y divide-gray-100 ">
                                                {
                                                    branchData && branchData.map((x, index) => {
                                                        return (

                                                            <tr key={index + 1000}>
                                                                <td className="p-2 whitespace-nowrap">
                                                                    <div className="flex items-center">
                                                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov" /></div>
                                                                        <div className="font-medium text-gray-800">{x && x.data().Name}</div>
                                                                    </div>
                                                                </td>
                                                                <td className="p-2 whitespace-nowrap">
                                                                    <div className="text-left">{x && x.data().Email}</div>
                                                                </td>
                                                                <td className="p-2 whitespace-nowrap">
                                                                    <div className="text-left font-medium text-green-500">  <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Active</span></div>
                                                                </td>
                                                                <td className="p-2 whitespace-nowrap">
                                                                    <div className="text-lg text-center flex justify-center items-center gap-4"><i className="fa-solid fa-file-pen"></i><i className="fa-solid fa-trash-can"></i></div>
                                                                </td>
                                                            </tr>

                                                        )
                                                    })
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

            }
        </div>
    )
}

export default Powerbranch