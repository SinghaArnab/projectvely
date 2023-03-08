import React, { useEffect, useState } from 'react'
import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { app } from "../../Firebase/FirebaseAuth";
import { Link } from 'react-router-dom';

const fireStorage = getStorage(app);

const RealtedCard = ({ x }) => {

    const [imageurl, setImageUrl] = useState();
    const getprojectImg = async (path) => {
        return await getDownloadURL(ref(fireStorage, path));
    };

    useEffect(() => {
        getprojectImg(x.projectImage).then((url) => setImageUrl(url));
        console.log("Related img");
    }, [x.projectImage])
    return (


        <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4   shadow-lg border-4 " >
            <Link to={`/Projects/${x.id}`} className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 m-3  " >
                <img
                    src={imageurl} alt='img' />
                <span className="bg-green-500  text-white flex items-center leading-none text-sm font-medium  pt-1.5 pr-3 pb-1.5 pl-3
              rounded-full uppercase ">{x.level}</span>

                <a className="text-lg font-bold sm:text-xl md:text-2xl" href='#none'>{x.projectName}</a>
                <p className="text-sm text-black">{x.ProjectDes.slice(0, 150)}</p>
                <div className="pt-2 pr-0 pb-0 pl-0">
                    <span className="bg-red-500  text-white flex items-center leading-none text-sm font-medium  pt-1.5 pr-3 pb-1.5 pl-3
              rounded-full uppercase ">{x.Technologies}</span>

                </div>
            </Link>
        </div>





    )
}

export default RealtedCard