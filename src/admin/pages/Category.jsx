import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid'
import { getFirestore, collection, addDoc, getDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { app } from '../../Firebase/FirebaseAuth';
import { useSelector } from 'react-redux';
import { getStorage, uploadBytes, ref } from "firebase/storage";



const fireStore = getFirestore(app)
const fireStorage = getStorage(app);

const Category = () => {

    const { userEmail } = useSelector((state) => state.AuthSlice)

    const [isModel, setModel] = useState(false)
    const [isUpdate, setUpdate] = useState(false)
    const [UpdateData, setUpdateData] = useState("")
    const [UpdateId, setUpdateId] = useState(false)
    const [categoryData, setCategory] = useState("")
    const [projectImg, setImage] = useState("")
    
    const [input, setInput] = useState({
        id: v4(),
        CategoryName: ""
    })

    const handelChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
    }

    const handelSubmit = () => {
        setInput({ id: v4(), CategoryName: "" })
        addCategory().then(() => setModel(false))
    }

    const addCategoryOpen = () => {
        setModel(!isModel)
        setUpdate(false)
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
    }, [isModel, isUpdate])


    const editCategory = (categoryId) => {
        getDOc(categoryId)
        setUpdateId(categoryId)
        setModel(false)
    }

    const getDOc = async (id) => {
        const ref = doc(fireStore, 'SubjectCategory', id);
        const snap = await getDoc(ref);
        setUpdateData(snap.data())
        setUpdate(true)
    }

    const updateDocument = async (UpdateId) => {
        const docRef = doc(fireStore, 'SubjectCategory', UpdateId)
        await updateDoc(docRef, {
            categoryName: UpdateData.CategoryName,
            adminEmail: userEmail
        })
    }

    const handelEditSubmit = () => {
        setInput({ id: v4(), CategoryName: "" })
        console.log(input);
        updateDocument(UpdateId)
        setUpdate(false)
    }

    const handelUpdateChange = (e) => {
        setUpdateData({...input, [e.target.name]: e.target.value})
    }

    const UpdateCancel = () => {
        setUpdate(false)
    }

    return (

        <div className='flex flex-col'>
            <section className='min-h-[8vh] bg-[#F8F9F9] flex justify-center items-center shadow-md shadow-black/20 dark:shadow-white/20 '>
                <h1 className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-bold text-transparent sm:text-3xl'>Category</h1>
            </section>
            <div className="w-[100%]  min-h-[80vh] flex justify-center items-center flex-col mb-5">
                <div className=" mt-5 sm:w-[100%] w-[100%] flex justify-center items-center ">
                    <button
                        className="sm:w-[70%] w-[95%] bg-green-400 hover:text-yellow-300 hover:text-2xl shadow-lg text-xl shadow- shadow-green-500 text-white cursor-pointer px-5 py-2 text-center"
                        onClick={addCategoryOpen}
                    >
                        Add Category +
                    </button>
                </div>

                <div className="flex flex-col sm:w-[70%] w-[95%]">
                    <div className="overflow-x-auto shadow-md ">
                        <div className="inline-block min-w-full align-middle">
                            <div className="overflow-hidden ">
                                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                    <thead className="bg-gray-100 dark:bg-gray-700">
                                        {isModel && (
                                            <tr className="hover:bg-gray-100 dark:hover:bg-gray-700 overflow-x-scroll">
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    <input
                                                        type="text"
                                                        name="CategoryName"
                                                        value={input.CategoryName}
                                                        onChange={handelChange}
                                                        className=" h-10 text-black text-center  lg:w-full text-lg outline-none"
                                                        placeholder="New Category Name"
                                                    />
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    <input
                                                        type="file"
                                                        className="w-[200px] lg:w-full"
                                                        name="projectImg"
                                                        onChange={(e) => {
                                                            setImage(e.target.files[0]);
                                                        }}
                                                    />
                                                </td>

                                                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                                    <button
                                                        className="bg-green-500 text-white cursor-pointer mr-4 px-4 py-2 text-center justify-center items-center rounded-md"
                                                        onClick={handelSubmit}
                                                    >
                                                        Add Category
                                                    </button>
                                                    <button
                                                        className="bg-red-500 text-white cursor-pointer px-3 py-2 text-center justify-center items-center rounded-md"
                                                        onClick={() => setModel(false)}
                                                    >
                                                        Cancel
                                                    </button>
                                                </td>
                                            </tr>
                                        )}
                                        {isUpdate && UpdateData && (
                                            <tr className="hover:bg-violet-500 bg-violet-400">
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    <input
                                                        type="text"
                                                        name="CategoryName"
                                                        value={UpdateData.categoryName}
                                                        onChange={handelUpdateChange}
                                                        className=" h-10 text-black text-center lg:w-full text-lg outline-none"
                                                        placeholder="Category Name"
                                                    />
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    <input
                                                        type="file"
                                                        className="w-[200px] lg:w-full"
                                                        name="projectImg"
                                                        onChange={(e) => {
                                                            setImage(e.target.files[0]);
                                                        }}
                                                    />
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                                    <button
                                                        className="bg-yellow-400  mx-2  text-white cursor-pointer px-4 py-2 text-center justify-center items-center rounded-md"
                                                        onClick={handelEditSubmit}
                                                    >
                                                        Update Category
                                                    </button>
                                                    <button
                                                        className="bg-red-500 text-white cursor-pointer px-3 py-2 text-center justify-center items-center rounded-md"
                                                        onClick={UpdateCancel}
                                                    >
                                                        Cancel
                                                    </button>
                                                </td>
                                            </tr>
                                        )}
                                        <tr>
                                            <th
                                                scope="col"
                                                className=" py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400"
                                            >
                                                No
                                            </th>

                                            <th
                                                scope="col"
                                                className="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400"
                                            >
                                                Product Name
                                            </th>

                                            <th
                                                scope="col"
                                                className="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400"
                                            >
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                        {categoryData &&
                                            categoryData.map((x,index) => {
                                                return (
                                                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700" key={index}>
                                                        <td className="py-4 px-6 text-lg text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">{index+1}</td>
                                                        <td className="py-4 px-6 text-lg text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">{x.data().categoryName}</td>
                                                        <td className="py-4 px-6 text-sm text-center font-medium  whitespace-nowrap">
                                                            <button onClick={() =>editCategory(x.id)} className="bg-red-500  text-white cursor-pointer px-5 py-2 text-md text-center justify-center items-center rounded-md">
                                                                Edit
                                                            </button>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category