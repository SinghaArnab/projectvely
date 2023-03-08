import React from 'react'
import { useSelector } from 'react-redux'
import ProjectCard from '../components/ProjectCard'
import SearchBox from '../components/SearchBox'

const AllProjects = () => {
  const { ProjectData, SeachProjectData } = useSelector((state) => state.QuestionData)
  return (
    <div className="min-h-screen w-[100%] bg-gradient-to-tr flex flex-col justify-center items-center mb-10 ">

      <div className="sm:w-[50%] w-[90%] m-5">
        <SearchBox />
      </div>


      <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0 mt-5">

        {

          SeachProjectData.length === 0 ?


            ProjectData.map((x) => {
              return (
                <ProjectCard x={x} key={x.id} />
              )
            }) :
            SeachProjectData.map((x) => {
              return (
                <ProjectCard x={x} key={x.id} />
              )
            })

        }


      </div>
    </div>
  )
}

export default AllProjects