import React from 'react'
import { useSelector } from 'react-redux'
import ProjectCard from '../components/ProjectCard'

const Project = () => {
const {fliterProjectData}=useSelector((state)=>state.QuestionData)
  return (
    <div className="min-h-screen bg-gradient-to-tr flex justify-center items-center ">
    <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0 mt-5 flex justify-center items-center">
      
      {
        fliterProjectData.map((x)=>{
          return(
            <ProjectCard x={x} key={x.id}/>
          )
        })
      }
  

    </div>
  </div>
  )
}

export default Project