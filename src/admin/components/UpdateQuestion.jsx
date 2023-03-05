import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getFirestore, collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { app } from '../../Firebase/FirebaseAuth';


const fireStore = getFirestore(app);

const UpdateQuestion = ({ queId, x, modal }) => {

  const { userEmail } = useSelector((state) => state.AuthSlice)

  const [category, setCategory] = useState("")
  const [input, setInput] = useState({
    category: x.category,
    question: x.question,
    answer: x.answer,
    level: x.level
  })

  const handelChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const UpdQuestion = async () => {
    const userRef = doc(fireStore, "Question", queId);
    await updateDoc(userRef, {
      category: input.category,
      question: input.question,
      answer: input.answer,
      level: input.level,
      adminEmail: userEmail
    })
  }

  const handelSubit = (e) => {
    e.preventDefault()
    UpdQuestion(input)
    modal(false);

  }

  const GetCategory = () => {
    return getDocs(collection(fireStore, 'SubjectCategory'));
  }

  useEffect(() => {
    GetCategory().then((category) => setCategory(category.docs));
    console.log("I am AddQuestion")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  console.log(x, queId)


  return (
    <div className="w-[100%] min-h-[85vh] flex justify-center items-center absolute text-black top-5">
      <form action="" className="form bg-white p-6 my-10 relative shadow-lg sm:w-[45%]" onSubmit={handelSubit}>

        <div className="icon bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center p-5 left-[-40px]" ><i className="fal fa-phone-volume fa-fw text-2xl transform -rotate-45"></i></div>
        <h3 className="text-2xl text-gray-900 font-semibold">Update Question And Answer</h3>
        <p className="text-gray-600"> To help you choose your property</p>
        <div className="flex space-x-5 mt-3">

          <select name="category" value={input.category} onChange={handelChange} className='block w-full px-4 py-2 mt-2 rounded-md border-4 '>
            <option defaultValue selected >Select Subject</option>
            {category && category.map((x) => {
              return (
                <option value={x.data().categoryName} className=' bg-gray-100 shadow-md' >{x.data().categoryName}</option>
              )
            })
            }
          </select>


          <select name="level" value={input.level} onChange={handelChange} className='block w-full px-4 py-2 mt-2 rounded-md border-4 '>
            <option defaultValue selected className=' bg-gray-100 shadow-md'>Question Level</option>
            <option value="Easy"  >Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Hard" >Hard</option>
          </select>
        </div>
        <input type="text" name="question" value={input.question} onChange={handelChange} placeholder="Enter Question" className="border p-2 w-full mt-3" />
        <textarea name='answer' value={input.answer} onChange={handelChange} cols="10" rows="3" placeholder="Tell us about desired property" className="border p-2 mt-3 h-auto w-full"></textarea>


        <input type="submit" value="Submit" className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3" />
        <button onClick={() => modal(false)} type="submit" value="cancel" className="w-full mt-6 bg-red-600 hover:bg-red-500 text-white font-semibold p-3">Cancel</button>

      </form>

    </div>
  )
}

export default UpdateQuestion