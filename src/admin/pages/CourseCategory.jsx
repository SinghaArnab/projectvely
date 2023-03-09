import React, { useState, useEffect } from 'react'
import { v4 } from 'uuid'
import { getFirestore, collection, addDoc, getDocs,doc,updateDoc } from "firebase/firestore";
import { app } from '../../Firebase/FirebaseAuth';
import { useSelector } from 'react-redux';
import { getStorage, uploadBytes, ref } from "firebase/storage";
import AddCourseContain from '../components/AddCourseContain';

const fireStore = getFirestore(app)
const fireStorage = getStorage(app);


const CourseCategory = () => {
    const { userEmail } = useSelector((state) => state.AuthSlice)
    const [CourseImg, setImage] = useState("")
    const [isModel, setModel] = useState(true)
    const [isUpdate, setUpdate] = useState(false)
    const [addContain, setContain] = useState(false)
    const [CourseCategory, setCouseCategory] = useState()

    const [input, setInput] = useState({
        id: v4(),
        CourseName: "",
        CourseDuration: "",
        CourseTitle: "",
        Price: "",

    })

    const [updateData, setUpdateInput] = useState("")
    const [updateId, setUpdateId] = useState("")

    const handelChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        console.log(input)
        setInput({ id: v4(), CourseName: "", CourseTitle: "", CourseDuration: "", Price: "" })
        setModel(!isModel)
        addCategory()
    }

    const addCategory = async () => {

        const imageRef = ref(fireStorage, `uploads/CourseImg/${input.id}-${CourseImg.name}`)
        const uploadImg = await uploadBytes(imageRef, CourseImg);

        await addDoc(collection(fireStore, "CourseCategory"), {
            CategoryId: input.id,
            CategoryName: input.CourseName,
            CourseTitle: input.CourseTitle,
            CourseDuration: input.CourseDuration,
            Price: input.Price,
            CourseImage: uploadImg.ref.fullPath,
            adminEmail: userEmail
        })
    }

    const getData = () => {
        return getDocs(collection(fireStore, 'CourseCategory'));
    }

    const getCourseData = () => {
        getData().then((user) => setCouseCategory(user.docs));
        setModel(!isModel)
        
    }

    useEffect(() => {
        getData().then((user) => setCouseCategory(user.docs));
        console.log("I am Power Branch")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isUpdate])



    const handelUpdate=(x)=>{
        setUpdate(true)
        setUpdateId(x.id)
        setUpdateInput(x.data())
        
    }

    const handelUpdateChange = (e) => {
        setUpdateInput({...updateData, [e.target.name]: e.target.value})
    }


    const updateDocument = async () => {
        const docRef = doc(fireStore, 'CourseCategory', updateId)
        await updateDoc(docRef, {
            CourseTitle: updateData.CourseTitle,
            Price: updateData.Price,
            adminEmail: userEmail
        })
    }

    
    const handelEditSubmit = () => {
        setInput({ id: v4(), CourseTitle: "",Price:"" })
        console.log(updateData)
        updateDocument()
        setUpdate(false)
    }



    return (
        <div>
            <section className='min-h-[8vh] bg-[#795548] lg:bg-[#F8F9F9] flex justify-center items-center shadow-md shadow-black/20 dark:shadow-white/20'>
                <h1 className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-bold text-transparent sm:text-3xl'>Category</h1>
            </section>
            <div className="flex justify-center items-center mt-5 mb-3">
                <a className="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800" onClickCapture={()=>setContain(false)} onClick={getCourseData} href='#none'>
                    <div className="py-2 px-3 lg:px-8 bg-indigo-100 text-indigo-700 rounded-full">
                        <p> Show Course </p>
                    </div>
                </a>
                <a className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8" href='#none'>
                    <div className="py-2  px-3 lg:px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full " onClick={()=>setContain(true)}>
                        <p>Add Content  </p>
                    </div>
                </a>
                <a className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8" href='#none'>
                    <div className="py-2  px-3 lg:px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full " onClickCapture={()=>setContain(false)}  onClick={getCourseData}>
                        <p>Add Course</p>
                    </div>
                </a>
            </div>

            <div className='flex flex-col mt-4'>
               {
                !addContain ?
                
                 !isModel ?
                    <div className='w-[100%] pb-10 lg:px-10 lg:py-5 flex justify-center items-center flex-col  bg-[#fcfcfc] '>
                        <form action="" className="form bg-white p-6 my-10 relative sm:w-[50%]" onSubmit={handelSubmit}>

                            <div className="icon3 bg-purple-500 text-white w-6 h-6 absolute flex items-center justify-center p-5 left-[-40px]" ><i className="fal fa-phone-volume fa-fw text-2xl transform -rotate-45"></i></div>
                            <h3 className="text-2xl text-gray-900 font-semibold"> list Your New Course😉</h3>
                            <p className="text-gray-600"> To help you choose your property</p>
                            <div className="flex space-x-5 mt-3">

                                <input type="text" name='CourseName' value={input.CourseName} onChange={handelChange} placeholder="Course Name" className="border px-2 w-1/2 h-10" />
                                <input name='CourseDuration' value={input.CourseDuration} onChange={handelChange} type="text" placeholder="CourseDuration ..." className="border px-2 w-1/2 h-10" />

                            </div>

                            <input type="text" name='CourseTitle' value={input.CourseTitle} onChange={handelChange} placeholder="Course Title" className="border p-2 w-full mt-3" />
                            <input name='CourseImg' onChange={(e) => { setImage(e.target.files[0]) }} type="file" placeholder="Course Image" className="border p-2 w-full mt-3" />
                            <input name='Price' value={input.Price} onChange={handelChange} type="text" placeholder="Course Price ..." className="border p-2 w-full mt-3" />

                            <div className="mt-1 text-sm text-black" id="user_avatar_help"> <span className=' text-red-700  text-2xl'>*</span> One ScreenShot of Project is needed. </div>

                            <input type="submit" value="Submit" className="w-full mt-6 bg-purple-500 hover:bg-blue-500 text-white font-semibold p-3" />

                        </form>

                    </div>

                    :

                    <div className="w-[100%] lg:max-w-[90%] mx-auto bg-white shadow-lg rounded-sm border border-gray-200 mt-10">
                        <header className="px-5 py-4 border-b border-gray-100 flex justify-between items-center w-[100%] flex-col lg:flex-row gap-4 lg:gap-0">
                            <div className='w-[20%]'>
                                <h2 className="font-semibold text-gray-800">Customers</h2>
                            </div>
                            {isUpdate && updateData &&
                                <div className='flex justify-between items-center  gap-1 w-[100%] lg:lg:w-[80%] lg:p-4 flex-col lg:flex-row'>
                                    <input name='CourseTitle' value={updateData.CourseTitle} onChange={handelUpdateChange} type="text" placeholder="Course Title ..." className="border p-2  w-[100%] lg:lg:w-[70%]" />
                                    <input name='Price' value={updateData.Price} onChange={handelUpdateChange} type="Number" placeholder="Price ..." className="border p-2 w-[100%] lg:lg:w-[30%]" />
                                    <div className='flex justify-center gap-5 w-[100%] lg:w-[30%] h-[40px]'>
                                        <button type="submit" onClick={handelEditSubmit} value="Submit" className=" w-[50%] lg:w-[47%] bg-purple-500 hover:bg-blue-500 text-white font-semibold  px-1" >Update</button>
                                        <button onClick={()=>setUpdate(false)} className="w-[50%] lg:w-[47%] bg-red-500 hover:bg-red-500 text-white font-semibold px-1" >Cancel</button>
                                    </div>
                                </div>}
                        </header>
                        <div className="p-3">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 ">
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
                                            CourseCategory && CourseCategory.map((x, index) => {
                                                return (

                                                    <tr key={index + 1000}>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg" width="40" height="40" alt="Alex Shatov" /></div>
                                                                <div className="font-medium text-gray-800">{x && x.data().CategoryName}</div>
                                                            </div>
                                                        </td>

                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="text-left font-medium text-green-500">  <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">{x && x.data().CourseTitle}</span></div>
                                                        </td>

                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="text-left">{x && x.data().CourseDuration}</div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap flex justify-center items-center gap-4 mt-2 ">
                                                            <div className="text-lg text-center flex justify-center items-center gap-4 cursor-pointer text-green-500" onClick={()=>handelUpdate(x)} ><i className="fa-solid fa-pen-to-square"></i></div>
                                                            <div className="text-lg text-center flex justify-center items-center gap-4 cursor-pointer text-red-500" ><i className="fa-solid fa-trash-can" ></i></div>
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
                

                :

                <AddCourseContain  categoryName={CourseCategory && CourseCategory.map((x)=>x.data().CategoryName)}/>
                
                }
            </div>
        </div>
    )
}

export default CourseCategory