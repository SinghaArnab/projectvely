import React from 'react'
import { useSelector } from 'react-redux';
import InterviewCard from '../components/InterviewCard'

const InterviewPrep = () => {
  const {QuestionCategoryData} =useSelector((state)=>state.QuestionData)
  return (
    <div className="min-h-screen bg-gradient-to-tr flex justify-center items-center ">
    <div className="md:px-4 md:grid mt-5 md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">

{
  QuestionCategoryData.map((x,index)=>{
    return(
      <InterviewCard x={x} key={index}/>

    )
  })
}

  
    </div>
  </div>
  )
}

export default InterviewPrep