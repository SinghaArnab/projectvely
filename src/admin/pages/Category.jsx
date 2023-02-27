import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid'
import { getFirestore, collection, addDoc, deleteDoc, doc, getDocs } from "firebase/firestore";
import { app } from '../../Firebase/FirebaseAuth';
import { useSelector } from 'react-redux';
import { getStorage, uploadBytes, ref } from "firebase/storage";



const fireStore = getFirestore(app)
const fireStorage = getStorage(app);

const Category = () => {

    const { userEmail } = useSelector((state) => state.AuthSlice)

    const [isModel, setModel] = useState(false)
    const [categoryData, setCategory] = useState("")
    const [refresh, setRefresh] = useState(false)
    const [projectImg, setImage] = useState("")
    const [input, setInput] = useState({
        id: v4(),
        CategoryName: ""
    })

    const handelChange = (e) => {
        const { name, value } = e.target
        setInput(() => {
            return {
                ...input, [name]: value
            }
        })
    }

    const handelSubmit = () => {
        setInput({ id: v4(), CategoryName: "" })
        console.log(input);
        addCategory()
        setModel(false)
        setRefresh(!refresh)
    }

    const handelCancel = () => {
        setInput({ id: v4(), categoryName: "" })
        setModel(false)
    }

    const handelOpen = () => {
        setModel(!isModel)
    }

    const addCategory = async () => {

        const imageRef = ref(fireStorage, `uploads/CategoryImg/${input.id}-${projectImg.name}`)
        const uploadImg = await uploadBytes(imageRef, projectImg);

        await addDoc(collection(fireStore, "SubjectCategory"), {
            categoryId: input.id,
            categoryName: input.CategoryName,
            projectImage: uploadImg.ref.fullPath,
            adminEmail: userEmail
        })
    }

    const GetCategory = () => {
        return getDocs(collection(fireStore, 'SubjectCategory'));
    }

    useEffect(() => {
        GetCategory().then((category) => setCategory(category.docs));

        console.log("I am Category")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh])



    const categoryDelete = async (categoryId) => {
        await deleteDoc(doc(fireStore, "SubjectCategory", categoryId));
        setRefresh(!refresh)
    }

    return (
        <div className="w-[100%] min-h-[90.8vh] flex justify-center items-center flex-col bg-gray-900 pb-10 ">

            <div className='w-[90%] lg:w-[70%] mt-10 lg:mt-10 bg-green-300 rounded-t-md text-center flex justify-center items-center p-8 '>
                <h1 className=' font-semibold text-xl lg:text-5xl'>Add Category <span onClick={handelOpen} className='text-white cursor-pointer '><i className="fa-solid fa-plus text-white hover:scale-110 hover:text-red-400"></i></span> </h1>
            </div>

            {isModel &&
                <div className='w-[90%] lg:w-[70%] mt-2 lg:mt-0 bg-red-300 rounded-b-md text-center flex justify-center items-center p-2  flex-col lg:flex-row'>
                    <span className="whitespace-nowrap px-3 py-3  font-medium float-right text-2xl mr-10 hidden lg:block">Category Name </span>
                    <input type='text' name='CategoryName' value={input.CategoryName} onChange={handelChange} className=' font-semibold lg:text-xl outline-none p-1.5 w-[95%] lg:w-[30%] lg:mr-4' placeholder='Enter New Category Name...' />

                    <div className="lg:mb-8 mr-4">
                        <label className="block mb-2 font-semibold text-gray-900 dark:text-white text-xl" htmlFor="user_avatar">Upload Category Image</label>
                        <input name='projectImg' onChange={(e) => { setImage(e.target.files[0]) }} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-grey-70 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
                    </div>

                    <div className='flex justify-center items-center flex-row mt-2 lg:mt-0'>
                        <span onClick={handelSubmit} className="whitespace-nowrap bg-yellow-400 px-10 lg:px-3 py-2 text-md font-medium float-right mr-2 cursor-pointer" > Add Category </span>
                        <span onClick={handelCancel} className="whitespace-nowrap bg-red-400 px-10 lg:px-3 py-2 text-md font-medium float-right mr-2 cursor-pointer"> Cancel </span>
                    </div>
                </div>
            }


            <div className="overflow-auto lg:overflow-visible min-w-[95%] lg:min-w-[70%]  flex justify-evenly items-center flex-col rounded-lg gap-2 mt-10">
                <div className='flex justify-between lg:justify-around  items-center w-[100%] p-4 rounded-lg  bg-[#EF9A53] mb-4'>
                    <div>
                        <h1 className='text-xl font-bold text-gray-900 sm:text-3xl'>Category</h1>
                    </div>
                    <div className='flex justify-center items-center flex-row mr-[4%]'>
                        <h1 className='text-xl font-bold text-gray-900 sm:text-3xl'>Actions</h1>
                    </div>
                </div>

                {categoryData && categoryData.map((x, index) => {
                    return (

                        <div className='flex justify-between lg:justify-around items-center w-[100%] p-3 rounded-lg  bg-[#F5D5AE]' key={x.id}>
                            <div>
                                <h1 className='text-xl font-bold text-gray-900 sm:text-2xl'>{index + 1}. {x.data().categoryName}</h1>
                            </div>
                            <div className='flex justify-center items-center flex-row gap-2 lg:gap-10'>
                                <button className='whitespace-nowrap bg-yellow-400 px-5 py-3 text-xs font-medium float-right mr-2 rounded-md transition hover:scale-105 cursor-pointer'>Edit</button>
                                <button onClick={categoryDelete()} className='whitespace-nowrap bg-red-500 px-5 py-3 text-xs font-medium float-right mr-2 rounded-md transition hover:scale-105 cursor-pointer'>Delete</button>
                            </div>
                        </div>

                    )
                })

                }

            </div>

        </div>
    )
}

export default Category