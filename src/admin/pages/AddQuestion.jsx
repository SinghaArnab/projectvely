import React, { useEffect, useState } from 'react'
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { app } from '../../Firebase/FirebaseAuth'
import { useSelector } from 'react-redux';
import { v4 } from 'uuid'
import { toast ,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const fireStore = getFirestore(app);

const AddQuestion = () => {

  const { userEmail } = useSelector((state) => state.AuthSlice)

  const [category, setCategory] = useState("")
  const [input, setInput] = useState({
    category: "",
    question: "",
    answer: "",
    level: ""
  })

  const handelChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const addQUestion = async () => {

    await addDoc(collection(fireStore, "Question"), {
      id: v4(),
      category: input.category,
      question: input.question,
      answer: input.answer,
      level: input.level,
      adminEmail: userEmail
    })
  }

  const handelSubit = (e) => {
    e.preventDefault()
    addQUestion(input).then(() =>
        toast.success('Question added Succesfully', {
          position: toast.POSITION.TOP_RIGHT
        }),
        setInput({id:v4(),category:"",question:"",answer:""})
      ).catch((error)=>
      toast.error('Somthing went Wrong ! ', {
        position: toast.POSITION.TOP_RIGHT
      }))
    
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
    <div className='flex flex-col'>
      <section className='min-h-[8vh] bg-[#F8F9F9] flex justify-center items-center shadow-md shadow-black/20 dark:shadow-white/20 '>
        <h1 className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-bold text-transparent sm:text-3xl'>Add Question</h1>
      </section>
      <ToastContainer />
      <div className="w-[100%] min-h-[85vh] flex justify-center items-center">
        <form action="" className="form bg-white p-6 my-10 relative shadow-lg sm:w-[45%]" onSubmit={handelSubit}>

          <div className="icon bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center p-5 left-[-40px]" ><i className="fal fa-phone-volume fa-fw text-2xl transform -rotate-45"></i></div>
          <h3 className="text-2xl text-gray-900 font-semibold">Add Question And Answer</h3>
          <p className="text-gray-600"> To help you choose your property</p>
          <div className="flex space-x-5 mt-3">

            <select name="category" value={input.category} onChange={handelChange} className='block w-full px-4 py-2 mt-2 rounded-md border-4 '>
              <option defaultValue >Select Subject</option>
              {category && category.map((x, index) => {
                return (
                  <option value={x.data().categoryName} className=' bg-gray-100 shadow-md' key={index + 9000} >{x.data().categoryName}</option>
                )
              })
              }
            </select>


            <select name="level" value={input.level} onChange={handelChange} className='block w-full px-4 py-2 mt-2 rounded-md border-4 '>
              <option defaultValue className=' bg-gray-100 shadow-md'>Question Level</option>
              <option value="Easy"  >Easy</option>
              <option value="Moderate"  >Moderate</option>
              <option value="Hard" >Hard</option>
            </select>
          </div>
          <input type="text" name="question" value={input.question} onChange={handelChange} placeholder="Enter Question" className="border p-2 w-full mt-3" />
          <textarea name='answer' value={input.answer} onChange={handelChange} cols="10" rows="3" placeholder="Tell us about desired property" className="border p-2 mt-3 w-full"></textarea>


          <input type="submit" value="Submit" className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3" />

        </form>

      </div>
    </div>
  )
}

export default AddQuestion