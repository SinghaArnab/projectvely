import React, { useEffect, useState } from 'react'
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { app } from '../../Firebase/FirebaseAuth'
import { useSelector } from 'react-redux';
import { v4 } from 'uuid'

const fireStore = getFirestore(app);



const AddQuestion = () => {


  const { userEmail } = useSelector((state) => state.AuthSlice)

  const [category, setCategory] = useState("")
  const [input, setInput] = useState({
    category: "",
    question: "",
    answer: "",
    level:""
  })

  const handelChange = (e) => {
    const { name, value } = e.target

    setInput(() => {
      return {
        ...input, [name]: value
      }
    })
  }


  const addQUestion = async () => {

    await addDoc(collection(fireStore, "Question"), {
      id: v4(),
      category: input.category,
      question: input.question,
      answer: input.answer,
      level:input.level,
      adminEmail: userEmail
    })
  }

  const handelSubit = (e) => {
    e.preventDefault()
    addQUestion(input)

  }

  const GetCategory = () => {
    return getDocs(collection(fireStore, 'SubjectCategory'));
  }

  useEffect(() => {
    GetCategory().then((category) => setCategory(category.docs));

    console.log("I am AddQuestion")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <div className='w-[100%] min-h-[90.8vh] flex justify-center items-center flex-col gap-10 bg-gray-900 pb-10'>

      <div className='w-[90%] lg:w-[70%] mt-10 lg:mt-10 bg-purple-400 p-7 rounded-md text-center flex justify-center items-center'>

        <h1 className=' font-semibold text-xl lg:text-5xl'>Add Question </h1>

      </div>


      <form className='w-[90%] lg:w-[70%] bg-blue-400 p-10' onSubmit={handelSubit}>

        <div className="mb-6">
          <label className="block mb-2 font-semibold text-white dark:text-white text-2xl">Category</label>

          <select name="category" value={input.category} onChange={handelChange} className='block w-full px-4 py-2 mt-2 text-white bg-gray-500 border border-gray-300 rounded-md dark:border-bg-gray-200 dark:text-gray-300 dark:border-gray-600 focus:border-black-500 dark:focus:border-white-500 focus:outline-none focus:ring'>
            <option  defaultValue selected className='bg-blue-900 text-white'>Select Subject</option>
            { category && category.map((x)=>{
              return(
                <option value={x.data().categoryName} className='bg-blue-900' >{x.data().categoryName}</option>
            )
            })
              
            }
          </select>
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold text-white dark:text-white text-2xl">Level</label>

          <select name="level" value={input.level} onChange={handelChange} className='block w-full px-4 py-2 mt-2 text-white bg-gray-500 border border-gray-300 rounded-md dark:border-bg-gray-200 dark:text-gray-300 dark:border-gray-600 focus:border-black-500 dark:focus:border-white-500 focus:outline-none focus:ring'>
            <option  defaultValue selected className='bg-blue-900 text-white'>Question Level</option>
                <option value="Easy" className='bg-blue-900' >Easy</option>
                <option value="Moderate" className='bg-blue-900' >Moderate</option>
                <option value="Hard" className='bg-blue-900' >Hard</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 font-semibold text-gray-900 dark:text-white text-2xl">Question</label>
          <input name="question" value={input.question} onChange={handelChange} type="text" className="text-xl bg-green-50 border border-green-500 text-green-900 placeholder-green-700 rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-200 dark:border-green-400" placeholder="write your question" required />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 font-semibold text-gray-900 dark:text-white text-2xl">Answer</label>
          <textarea name='answer' value={input.answer} onChange={handelChange} type="text" className="text-2xl min-h-[15vh] bg-green-50 border border-green-500 text-green-900 placeholder-green-700  rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-200 dark:border-green-400" required />
        </div>



        <button type="submit" className="block w-full font-bold rounded bg-green-400 border text-black border-yellow-400 px-12 py-3 text-md  hover:text-white hover:bg-red-600 focus:outline-none focus:ring active:bg-red-900 sm:w-auto">Add New Question</button>
      </form>

    </div>
  )
}

export default AddQuestion