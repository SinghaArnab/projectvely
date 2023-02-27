import React,{useEffect,useState} from 'react'
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from '../../Firebase/FirebaseAuth';
import Projectlistcard from '../components/Projectlistcard';


const fireStoreDb = getFirestore(app);

const Projectlist = () => {

    
  const [project, setProject] = useState([])
  const [isLoading,setLoading]=useState(true)

    const allProjects = () => {
        return getDocs(collection(fireStoreDb, 'Projects'));
      }
    
      useEffect(() => {
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

        {   project && project.map((x,index)=>{
            return (
                <Projectlistcard  x={x.data()} projectId={project.id} key={index} />
            )
        }) 
           
}

        </div>
        
    }
    
        </>
    )
}

export default Projectlist