import React, { useState } from 'react'
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from '../../Firebase/FirebaseAuth'
import { useSelector } from 'react-redux';
import { getStorage, uploadBytes, ref } from "firebase/storage";
import { v4 } from 'uuid'



const firestore = getFirestore(app);
const fireStorage = getStorage(app);

const AddProjects = () => {

  const { userEmail } = useSelector((state) => state.AuthSlice)


  const [input, setInput] = useState({
    id: v4(),
    projectName: "",
    ProjectDes: "",
    projectLiveLink: "",
    projectGithubLink: "",
    level:""
  })

  const [projectImg, setImage] = useState("")

  const handelChange = (e) => {
    const { name, value } = e.target

    setInput(() => {
      return {
        ...input, [name]: value
      }
    })
  }


  const addQUestion = async () => {

    const imageRef = ref(fireStorage, `uploads/projectImg/${input.id}-${projectImg.name}`)
    const uploadImg = await uploadBytes(imageRef, projectImg);

    await addDoc(collection(firestore, "Projects"), {
      id: input.id,
      projectName: input.projectName,
      ProjectDes: input.ProjectDes,
      projectLiveLink: input.projectLiveLink,
      projectGithubLink: input.projectGithubLink,
      projectImage: uploadImg.ref.fullPath,
      level:input.level,
      userEmail: userEmail
    })
  }

  const handelSubit = (e) => {
    e.preventDefault()
    addQUestion(input)

  }


  return (
    <div className='w-[100%] pb-10 lg:p-10 flex justify-center items-center flex-col gap-10  bg-[#fcfcfc] '>

      <div className='w-[90%] lg:w-[70%] mt-10 lg:mt-0 bg-red-300 rounded-md text-center flex justify-center items-center p-8'>

        <h1 className=' font-semibold text-xl lg:text-5xl'>Add Projects </h1>

      </div>


      <form className='w-[95%] lg:w-[70%] bg-gray-900 px-5 py-10 lg:p-10 ' onSubmit={handelSubit}>

        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 font-semibold text-gray-900 dark:text-white text-2xl">Project Name</label>
          <input name='projectName' value={input.projectName} onChange={handelChange} type="text" id="email" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-200 dark:border-green-400" placeholder="write your Project Name" required />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-gray-900 dark:text-white text-2xl">Project Description</label>
          <textarea name='ProjectDes' value={input.ProjectDes} onChange={handelChange} type="text" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-200 dark:border-green-400" required />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold text-white dark:text-white text-2xl">Level</label>

          <select name="level" value={input.level} onChange={handelChange} className='block w-full px-4 py-2 mt-2 text-white bg-gray-500 border border-gray-300 rounded-md dark:border-bg-gray-200 dark:text-gray-300 dark:border-gray-600 focus:border-black-500 dark:focus:border-white-500 focus:outline-none focus:ring'>
            <option defaultValue selected className='bg-blue-900 text-white'>Question Level</option>
            <option value="Easy" className='bg-blue-900' >Easy</option>
            <option value="Moderate" className='bg-blue-900' >Moderate</option>
            <option value="Hard" className='bg-blue-900' >Hard</option>
          </select>
        </div>


        <div className="mb-6">
          <label className="block mb-2 font-semibold text-gray-900 dark:text-white text-2xl" htmlFor="user_avatar">Upload Screenshot</label>
          <input name='projectImg' onChange={(e) => { setImage(e.target.files[0]) }} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-grey-70 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-3" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
          <div className="mt-1 text-sm text-white dark:text-white" id="user_avatar_help">One ScreenShot of Project is needed. </div>
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 font-semibold text-gray-900 dark:text-white text-2xl">Project Live Link</label>
          <input name='projectLiveLink' onChange={handelChange} type="text" id="email" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-200 dark:border-green-400" placeholder="give Project live link" required />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 font-semibold text-gray-900 dark:text-white text-2xl">Github Repo link</label>
          <input name='projectGithubLink' onChange={handelChange} type="text" id="email" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-200 dark:border-green-400" placeholder="Github Repo link" required />
        </div>


        <button type="submit" className="block w-full font-bold rounded bg-green-400 border text-black border-yellow-400 px-12 py-3 text-md  hover:text-white hover:bg-red-600 focus:outline-none focus:ring active:bg-red-900 sm:w-auto">Add New Project</button>
      </form>

    </div>
  )
}

export default AddProjects