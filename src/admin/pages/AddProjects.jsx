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
    level: "",
    Technologies: ""
  })

  const [projectImg, setImage] = useState("")

  const handelChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
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
      level: input.level,
      Technologies: input.Technologies,
      userEmail: userEmail
    })
  }

  const handelSubit = (e) => {
    e.preventDefault()
    addQUestion(input)

  }


  return (

    <div className='flex flex-col'>
      <section className='min-h-[8vh] bg-[#F8F9F9] flex justify-center items-center shadow-md shadow-black/20 dark:shadow-white/20 '>
        <h1 className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-3xl'>Add Projects</h1>
      </section>
      <div className='w-[100%] pb-10 lg:px-10 lg:py-5 flex justify-center items-center flex-col  bg-[#fcfcfc] '>
        <form action="" className="form bg-white p-6 my-10 relative sm:w-[50%]" onSubmit={handelSubit}>

          <div className="icon2 bg-green-500 text-white w-6 h-6 absolute flex items-center justify-center p-5 left-[-40px]" ><i className="fal fa-phone-volume fa-fw text-2xl transform -rotate-45"></i></div>
          <h3 className="text-2xl text-gray-900 font-semibold"> list Your project😉</h3>
          <p className="text-gray-600"> To help you choose your property</p>
          <div className="flex space-x-5 mt-3">

            <select name="level" value={input.level} onChange={handelChange} className='block w-[50%] px-4 py-2 mt-2 rounded-md border-4'>
              <option defaultValue className=' bg-gray-100 shadow-md'>Project Level</option>
              <option value="Beginner"  >Beginner</option>
              <option value="Intermediate"  >Intermediate</option>
              <option value="Advance"  >Advance</option>
            </select>


            <input type="text" name='Technologies' value={input.Technologies} onChange={handelChange} placeholder="Project Technologies" className="border px-2 w-1/2" />
          </div>
          <input name='projectName' value={input.projectName} onChange={handelChange} type="text" placeholder="Project Name" className="border p-2 w-full mt-3" />
          <textarea name='ProjectDes' value={input.ProjectDes} onChange={handelChange} cols="10" rows="3" placeholder="Tell us about desired property" className="border p-2 mt-3 w-full"></textarea>

          <input name='projectImg' onChange={(e) => { setImage(e.target.files[0]) }} type="file" placeholder="Project Image" className="border p-2 w-full mt-3" />
          <div className="mt-1 text-sm text-black" id="user_avatar_help"> <span className=' text-red-700  text-2xl'>*</span> One ScreenShot of Project is needed. </div>
          <input name='projectGithubLink' onChange={handelChange} type="text" placeholder="project Github Link" className="border p-2 w-full mt-3" />
          <input name='projectLiveLink' onChange={handelChange} type="text" placeholder="Project Hosted Link" className="border p-2 w-full mt-3" />

          <input type="submit" value="Submit" className="w-full mt-6 bg-green-500 hover:bg-blue-500 text-white font-semibold p-3" />

        </form>

      </div>
    </div>
  )
}

export default AddProjects