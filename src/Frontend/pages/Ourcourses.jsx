import React from 'react'
import { useSelector } from 'react-redux'
import CourseCard from '../components/CourseCard'

const Ourcourses = () => {
  const {CourseCategory}=useSelector((state)=>state.QuestionData)
  return (
    <div className="cards min-h-[90vh] w-[100%] flex justify-center items-center flex-wrap gap-5 mt-5 ">


{
  CourseCategory.map((x,index)=>{
    return(
      <CourseCard x={x} key={index} />
    )
  })
}



    </div>
  )
}

export default Ourcourses