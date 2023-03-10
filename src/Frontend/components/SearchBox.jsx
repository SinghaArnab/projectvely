import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {searchProject} from '../../Redux/Slice/DataSlice'


const SearchBox = () => {
    const{ProjectData}=useSelector((state)=>state.QuestionData)
    const dipatch=useDispatch()
    const [state, setstate] = useState("")
    const navigate =useNavigate()

   const submitData=(e)=>{
    e.preventDefault()
    console.log("he");
    dipatch(searchProject(state))
    navigate('/allprojects')
    
   }
    
  return (


	<form onSubmit={submitData} className="w-[100%]">   
        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
        <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" id="default-search" list="Cars" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="Search Projects ..."  onChange={(e)=>setstate(e.target.value)} value={state}/>

<datalist id="Cars">
        {
            ProjectData && ProjectData.map((x)=>{
            return(
              <option value={x.projectName}>{x.projectName}</option>
            )
          })
        }  
            </datalist>
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[crimson] hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
        </div>
    </form>

  )
}

export default SearchBox