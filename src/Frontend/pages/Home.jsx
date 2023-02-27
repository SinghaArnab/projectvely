import React,{useEffect,useState} from 'react'
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from '../../Firebase/FirebaseAuth';
import { fetchData } from '../../Redux/Slice/DataSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProjectCard from '../components/ProjectCard';

const fireStoreDb = getFirestore(app);

const Home = () => {

const {ProjectData}=useSelector((state)=>state.DataSlice)

  const [project, setProject] = useState([])
  const [isLoading,setLoading]=useState(true)
  const Dispatch=useDispatch()

    const allProjects = () => {
        return getDocs(collection(fireStoreDb, 'Projects'));
      }
    
      useEffect(() => {
        Dispatch(fetchData())
        allProjects().then((pro) => setProject(pro.docs));
        setTimeout(() => {
          setLoading(false)
        }, 800)
       
    
        console.log("I am ShowCars")
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

  return (
    
    <>

    {
        isLoading ?
    
            <div className="w-[100%] h-[90.8vh] flex justify-center items-center bg-slate-600">
            <div className="loader w-[20%] ">
              <div className="square-item"></div>
              <div className="square-item"></div>
              <div className="square-item"></div>
              <div className="square-item"></div>
            </div>
          </div>
    :
            <div className='w-[100%] min-h-[90.8vh] bg-pink-200 p-5 lg:p-10 flex justify-center items-center flex-wrap gap-10 flex-col lg:flex-row  '>
    
            {   ProjectData && ProjectData.map((x,index)=>{
                return (
                    <ProjectCard  x={x.data()} projectId={project.id} key={index} />
                )
            }) 
               
    }
    
            </div>
            
        }
        
            </>
  )
}

export default Home