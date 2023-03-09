import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { v4 } from 'uuid'
import { app } from '../../Firebase/FirebaseAuth'
import { getFirestore, collection, addDoc } from "firebase/firestore";



const fireStore = getFirestore(app)
const AddCourseContain = ({ categoryName }) => {

    const { userEmail } = useSelector((state) => state.AuthSlice)

    const [CouseData, setData] = useState({
        id: v4(),
        CourseName: "",
        CourseTopic: "",
        CourseLink: "",
        TopicQuestion: "",
        TopicAnswer: "",
    })


    const handelChange = (e) => {
        setData({ ...CouseData, [e.target.name]: e.target.value })
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        setData({ id: v4(), CourseName: "", CourseTopic: "", CourseLink: "", TopicQuestion: "", TopicAnswer: "" })
        console.log(CouseData, userEmail)
        addCourse()

    }


    const addCourse = async () => {

        await addDoc(collection(fireStore, "CourseContent"), {
            CourseId: CouseData.id,
            CourseName: CouseData.CourseName,
            CourseTopic: CouseData.CourseTopic,
            CourseLink: CouseData.CourseLink,
            TopicQuestion: CouseData.TopicQuestion,
            TopicAnswer: CouseData.TopicAnswer,
            Date: new Date().toLocaleDateString(),
            Time: new Date().toLocaleTimeString(),
            adminEmail: userEmail
        })
    }





    return (
        <div className="w-[100%] min-h-[85vh] flex justify-center items-start">
            <form action="" className="form bg-white p-6 my-10 relative shadow-lg sm:w-[45%]" onSubmit={handelSubmit}>

                <div className="icon bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center p-5 left-[-40px]" ><i className="fal fa-phone-volume fa-fw text-2xl transform -rotate-45"></i></div>
                <h3 className="text-2xl text-gray-900 font-semibold">Add Contain to Added Course</h3>
                <p className="text-gray-600"> To help you choose your property</p>
                <div className="flex space-x-5 mt-3">

                    <select name="CourseName" className='block w-full px-4 py-2 mt-2 rounded-md border-4 ' value={CouseData.CourseName} onChange={handelChange}>
                        <option defaultValue >Select Subject</option>
                        {categoryName && categoryName.map((x, index) => {
                            return (
                                <option value={x} className=' bg-gray-100 shadow-md' key={index + 9000} >{x}</option>
                            )
                        })
                        }
                    </select>
                </div>
                <input type="text" name="CourseTopic" value={CouseData.CourseTopic} onChange={handelChange} placeholder="Enter Topic" className="border p-2 w-full mt-3" required />
                <input type="text" name="CourseLink" value={CouseData.CourseLink} onChange={handelChange} placeholder="Enter Link..." className="border p-2 w-full mt-3" required />
                <input type="text" name="TopicQuestion" value={CouseData.TopicQuestion} onChange={handelChange} placeholder="Enter Question" className="border p-2 w-full mt-3" required />
                <textarea name='TopicAnswer' value={CouseData.TopicAnswer} onChange={handelChange} cols="10" rows="3" placeholder="Tell us about desired property" className="border p-2 mt-3 w-full"></textarea>


                <input type="submit" value="Submit" className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3" />

            </form>

        </div>
    )
}

export default AddCourseContain