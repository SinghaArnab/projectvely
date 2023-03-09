import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { v4 } from 'uuid'
import { app } from '../../Firebase/FirebaseAuth'
import { getFirestore, updateDoc, doc } from "firebase/firestore";
import { useLocation, useNavigate } from 'react-router-dom'



const fireStore = getFirestore(app)

const UpdateContent = () => {

    const location = useLocation();
    const { data, contentId } =location.state;
    const Navigate = useNavigate();
    console.log(data,contentId)

    const { userEmail } = useSelector((state) => state.AuthSlice)

    const [CouseData, setData] = useState({
        CourseName: data.CourseName,
        CourseTopic: data.CourseTopic,
        CourseLink: data.CourseLink,
        TopicQuestion: data.TopicQuestion,
        TopicAnswer: data.TopicAnswer,
    })


    const handelChange = (e) => {
        setData({ ...CouseData, [e.target.name]: e.target.value })
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        setData({ id: v4(), CourseName: "", CourseTopic: "", CourseLink: "", TopicQuestion: "", TopicAnswer: "" })
        console.log(CouseData, userEmail)
        updateCarData().then(() => Navigate('/Dashboard/ShowCourseContain'))
    }

    const updateCarData = async () => {
        const userRef = doc(fireStore, "CourseContent", contentId);
        await updateDoc(userRef, {
            CourseName: CouseData.CourseName,
            CourseTopic: CouseData.CourseTopic,
            CourseLink: CouseData.CourseLink,
            TopicQuestion: CouseData.TopicQuestion,
            TopicAnswer: CouseData.TopicAnswer,
            userEmail: userEmail
        });
    };

    return (
        <div className="w-[100%] min-h-[85vh] flex justify-center items-start">
            <form action="" className="form bg-white p-6 my-10 relative shadow-lg sm:w-[45%]" onSubmit={handelSubmit}>

                <div className="icon4 bg-yellow-600 text-white w-6 h-6 absolute flex items-center justify-center p-5 left-[-40px]" ><i className="fal fa-phone-volume fa-fw text-2xl transform -rotate-45"></i></div>
                <h3 className="text-2xl text-yellow-600 font-semibold">Update Course Content</h3>
                <p className="text-gray-600"> To help you choose your property</p>
                <label for="email" className="block text-sm font-medium text-yellow-600"> Course Topic</label>
                <input type="text" name="CourseTopic" value={CouseData.CourseTopic} onChange={handelChange} placeholder="Enter Topic" className="border p-2 w-full mt-1" required />
                <label for="email" className="block text-sm font-medium text-yellow-600"> Course Link Code</label>
                <input type="text" name="CourseLink" value={CouseData.CourseLink} onChange={handelChange} placeholder="Enter Link..." className="border p-2 w-full mt-1" required />
                <label for="email" className="block text-sm font-medium text-yellow-600">Topic Question</label>
                <input type="text" name="TopicQuestion" value={CouseData.TopicQuestion} onChange={handelChange} placeholder="Enter Question" className="border p-2 w-full mt-1" required />
                <label for="email" className="block text-sm font-medium text-yellow-600"> Topic Answer</label>
                <textarea name='TopicAnswer' value={CouseData.TopicAnswer} onChange={handelChange} cols="10" rows="3" placeholder="Tell us about desired property" className="border p-2 mt-3 w-full min-h-[250px]"></textarea>


                <input type="submit" value="Update" className="w-full mt-6 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold p-3" />

            </form>

        </div>
    )
}

export default UpdateContent