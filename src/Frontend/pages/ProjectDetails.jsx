import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RealtedCard from "../components/RealtedCard";
import { getStorage, getDownloadURL, ref } from "firebase/storage";
import '../../css/steps.css'
import { getRealatedProject } from "../../Redux/Slice/DataSlice";
import { app } from "../../Firebase/FirebaseAuth";

const fireStorage = getStorage(app);
const ProjectDetails = () => {
  const [state, setstate] = useState();
  const [imageurl, setImageUrl] = useState();

  const { projectID } = useParams();
  const { ProjectData, RelatedProjectData } = useSelector((state) => state.QuestionData);
  const findData = ProjectData.find((x) => x.id === projectID);
  const dispatch = useDispatch()

  console.log(findData);

  const getprojectImg = async (path) => {
    return await getDownloadURL(ref(fireStorage, path));
  };
  useEffect(() => {
    // window.scroll(0,0)
    if (findData) {
      setstate(findData);
      getprojectImg(findData.projectImage).then((url) => setImageUrl(url));
      dispatch(getRealatedProject(findData.level))
    }
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [findData]);


  return (
    <div className="">
      <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
        <div
          className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
        max-w-[100%]"
        >
          <div className="flex flex-col items-center sm:px-5 md:flex-row">
            <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
              <div
                className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
              md:space-y-5"
              >
                <div
                  className=" bg-blue-500 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2
                uppercase "
                >
                  <p className="inline text-xs font-medium">
                    {state && state.Technologies}
                  </p>
                </div>
                <h1 className="text-3xl font-bold leading-none lg:text-5xl xl:text-5xl text-center">
                  {state && state.projectName}
                </h1>
                <div className="pt-2 pr-0 pb-0 pl-0">
                  <p className="text-sm font-medium inline">Deatils - </p>
                  <p className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">
                    {state && state.ProjectDes}
                  </p>
                  <p className="text-gray-200 text-sm font-medium inline mt-0 mr-1 mb-0 ml-1">
                    1hr 20min. read
                  </p>
                </div>
                <div
                  className=" bg-red-400 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2
                uppercase "
                >
                  <p className="inline text-xs font-medium">
                    {state && state.level}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 ">
              <div className="block">
                <img
                  src={imageurl && imageurl}
                  className="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full" alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-2 lg:px-5  lg:mx-auto mt-10">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">
            Specification of Project
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            All info of {state && state.projectName}
          </h1>
        </div>
      </div>

      <div className="bg-white  pr-0 pb-12 pl-0 mt-0 mr-auto mb-0 ml-auto w-[100%] ">
        <div className="pt-0 lg:pr-4 pb-0 lg:pl-4 mt-0 mr-auto mb-0 ml-auto w-[100%] sm:px-6 lg:px-8 flex ">
          <div className="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto sm:w-[80%] w-[100%] sm:px-6 lg:px-8">
            <div className="shadow-2xl mt-5 mr-0 mb-0 ml-0 pt-4 pr-10 pb-4 pl-10 flow-root rounded-lg sm:py-2">
              <div className="pt--10 pr-0 pb-10 pl-0">
                <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                  <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                    <div className="flex items-center flex-1 min-w-0">
                      <img
                        src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/SlackLogo_CompanyNews_SecondaryAubergine_Hero.jpg?d=500x500&amp;f=fill"
                        className="flex-shrink-0 object-cover rounded-full btn- w-10 h-10" alt="img"
                      />
                      <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                        <p className="text-lg font-bold text-gray-800 truncate">
                          project Name
                        </p>
                        <p className="text-gray-600 text-md ">
                          {state && state.projectName}
                        </p>
                      </div>
                    </div>
                    
                  </div>
                </div>

                <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                  <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                    <div className="flex items-center flex-1 min-w-0">
                      <img
                        src="https://www.growthmarketingpro.com/wp-content/uploads/2019/10/basecamp-logo.png"
                        className="flex-shrink-0 object-cover rounded-full btn- w-10 h-10" alt="img"
                      />
                      <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                        <p className="text-lg font-bold text-gray-800 truncate">
                          Technologies used
                        </p>
                        <p className="text-gray-600 text-md w-[100%]">
                          {state && state.Technologies}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                  <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                    <div className="flex items-center flex-1 min-w-0">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3959Cj16Wx6dYP95pAkrF4-oycon_BpGvcA&usqp=CAU"
                        className="flex-shrink-0
                    object-cover rounded-full btn- w-10 h-10" alt="img"
                      />
                      <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                        <p className="text-lg font-bold text-gray-800 truncate">
                          level
                        </p>
                        <p className="text-gray-600 text-md">
                          {state && state.level}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                  <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                    <div className="flex items-center flex-1 min-w-0">
                      <img
                        src="https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg"
                        className="flex-shrink-0
                    object-cover rounded-full btn- w-10 h-10" alt="img"
                      />
                      <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                        <p className="text-lg font-bold text-gray-800 truncate">
                          project GithubLink
                        </p>
                        <p className="text-gray-600 text-md break-words	">
                          {state && state.projectGithubLink}
                        </p>
                      </div>
                    </div>
                    {/* <a href={state && state.projectGithubLink}> */}
                    <div
                      className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0
                  sm:mt-0 w-[100%] lg:w-[10%]"
                    >
                      <button
                        className="bg-gray-800 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                    duration-200 hover:bg-gray-700 rounded-lg w-[100%] text-center"
                      >
                        Apply
                      </button>
                    </div>
                    {/* </a> */}
                  </div>
                </div>


                <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                  <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                    <div className="flex items-center flex-1 min-w-0">
                      <img
                        src="https://pbs.twimg.com/profile_images/1377713636760674304/OrO9FW3q_400x400.png"
                        className="flex-shrink-0 object-cover rounded-full btn- w-10 h-10" alt="img"
                      />
                      <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                        <p className="text-lg font-bold text-gray-800 truncate">
                          project Hosted Link
                        </p>
                        <p className="text-gray-600 text-md">
                          {state && state.projectLiveLink}
                        </p>
                      </div>
                    </div>
                    <div
                      className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:justify-end
                  sm:mt-0 w-[100%] lg:w-[10%]"
                    >
                      <a
                        href={state && state.projectLiveLink}
                        className="bg-gray-800 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                    duration-200 hover:bg-gray-700 rounded-lg w-[100%] text-center"
                      >
                        Apply
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                  <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                    <div className="flex items-center flex-1 min-w-0">
                      <img
                        src="https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-gmail-icons-png-vector-icons-and-png-backgrounds-18.png"
                        className="flex-shrink-0 object-cover rounded-full btn- w-10 h-10" alt="img"
                      />
                      <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                        <p className="text-lg font-bold text-gray-800 truncate">
                          Owner's Email
                        </p>
                        <p className="text-gray-600 text-md">
                          {state && state.userEmail}
                        </p>
                      </div>
                    </div>
                    <div
                      className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:justify-end
                  sm:mt-0 w-[100%] lg:w-[10%]"
                    >
                      <a
                        href={state && state.userEmail}
                        className="bg-gray-800 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                    duration-200 hover:bg-gray-700 rounded-lg text-center"
                      >
                        Apply
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="container px-2   lg:mx-auto mt-10">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">
            steps to Install the project
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            All steps to Install {state && state.projectName} project
          </h1>
        </div>
      </div>

      <div className="steps font-mono w-[100%] sm:h-[55vh] h-auto  flex justify-center items-center gap-5 flex-wrap mb-5">


        <div className="card sm:w-[23%] w-[90%]  hover:scale-105 transition ease-in-out delay-150  flex flex-col justify-center items-center text-center  rounded-xl shadow-2xl py-5  mt-3">
          <div className=" bg-indigo-600 rounded-full text-[30px] text-white px-4 text-center" >1</div>
          <div className="title font-bold text-[20px]">Dwonload</div>
          <div className="description text-[18px] p-1 	">Download from Github link </div>
          <div className="description text-[18px] p-1  font-semibold break-all text-yellow-400"> {state && state.projectGithubLink}</div>
          <div className="description text-[18px] p-1">step 1 Download from Github Repo Link and unzip </div>
        </div>


        <div className="card sm:w-[23%] w-[90%]  hover:scale-105 transition ease-in-out delay-150   flex flex-col justify-center items-center text-center  rounded-xl shadow-2xl py-5  mt-3">
          <div className=" bg-black rounded-full text-[30px] text-white px-4 text-center" >2</div>
          <div className="title font-bold text-[20px]">Install</div>
          <div className="description text-[18px] p-1 	">Run Command on Treminal  </div>
          <div className="description text-[18px] p-1  font-semibold break-all"> npx-create-app</div>
          <div className="description text-[18px] p-1">step 2 create a new React app paste the folder from Github Folder </div>
        </div>


        <div className="card sm:w-[23%] w-[90%]   hover:scale-105 transition ease-in-out delay-150    flex flex-col justify-center items-center text-center  rounded-xl shadow-2xl py-8  mt-3">
          <div className="  bg-red-500 rounded-full text-[30px] text-white px-4 text-center" >3</div>
          <div className="title font-bold text-[20px]">Packages Install</div>
          <div className="description text-[18px] p-1 	">Run Command on Treminal  </div>
          <div className="description text-[18px] p-1  font-semibold break-all"> npm-install</div>
          <div className="description text-[18px] p-1">step 3 run this commd and install Packages</div>
        </div>



        <div className="card sm:w-[23%] w-[80%]   hover:scale-105 transition ease-in-out delay-150   flex flex-col justify-center items-center text-center  rounded-xl shadow-2xl py-5  mt-3">
          <div className=" rounded-full  text-white text-center" >
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mt-8 h-16 w-16 text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </div>
          <div className="title font-bold text-[20px] hover:scale-105 transition ease-in-out delay-150 ">Done</div>
          <div className="description text-[18px] p-1">all set </div>
          <div className="description text-[18px] p-1 font-semibold">http://localhost:3000</div>
          <div className="description text-[18px] p-1">it will run in 3000 port  </div>
        </div>






      </div>



      <div className="container px-2   lg:mx-auto mt-10">
        <div className="flex flex-col text-center w-full mb-20">

          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Realted Project in  {state && state.level} Level
          </h1>
        </div>
      </div>


      <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16 m-5 mb-10">

        {
          RelatedProjectData.map((x, index) => {
            return (
              <RealtedCard x={x} key={index} />
            )
          })
        }




      </div>




    </div>
  );
};

export default ProjectDetails;
