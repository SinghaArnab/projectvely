import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { getProjectData } from '../../Redux/Slice/DataSlice'


const Project = () => {

  const {projectlevel}=useParams()
  const dispatch = useDispatch();

  useEffect(()=>{
    window.scroll(0,0)  
    console.log("Frontend Projects")
    dispatch(getProjectData(projectlevel));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[projectlevel])
  
const {fliterProjectData}=useSelector((state)=>state.QuestionData)
  return (
    <div className="min-h-screen bg-gradient-to-tr flex justify-center items-center ">
    <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0 mt-5 mb-10 ">
      
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