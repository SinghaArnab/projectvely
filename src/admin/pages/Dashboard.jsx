import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from '../../Firebase/FirebaseAuth';
import { Totalprojectsgraph } from '../components/TotalProjectsgraph'
import Piechart from "../components/Piechart";
import { ToastContainer } from "react-toastify";


const fireStoreDb = getFirestore(app);


const Dashboard = () => {
  const [Projects, setProjects] = useState([])
  const [Question, setQuestion] = useState([])
  const [category, setCategory] = useState("")

  const allProjects = () => {
    return getDocs(collection(fireStoreDb, 'Projects'));
  }

  const allQuestion = () => {
    return getDocs(collection(fireStoreDb, 'Question'));
  }

  const GetCategory = () => {
    return getDocs(collection(fireStoreDb, 'SubjectCategory'));
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    allProjects().then((Project) => setProjects(Project.docs));
    allQuestion().then((Question) => setQuestion(Question.docs));
    GetCategory().then((category) => setCategory(category.docs));

    console.log("I am Admin Dashboard")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <div className="grid min-h-[110vh] w-full pb-10 px-8 lg:bg-white ">
    <ToastContainer />
      <div className="grid grid-cols-12 gap-6">
        <div className="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
          <div className="col-span-12 mt-8">
            <div className="container px-5 py-1 mx-auto">
              <div className="flex flex-col text-center w-full lg:mb-20 lg:bg-blue-900 py-1 lg:rounded-md">

                <h1 className="sm:text-4xl text-4xl font-medium title-font font-sans text-neutral-800 lg:text-white">
                  <b className=" text-[35px] font-sans font-normal hidden sm:block">Educate</b> DASHBOARD
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6 mt-5">
              <a
                className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-4 intro-y bg-white"
                href="#none"
              >
                <div className="p-5">
                  <div className="flex justify-between">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    <div className="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                      <span className="flex items-center">30%</span>
                    </div>
                  </div>
                  <div className="ml-2 w-full flex-1">
                    <div>
                      <div className="mt-3 text-3xl font-bold leading-8">{Projects && Projects.length}</div>

                      <div className="mt-1 text-base text-gray-600">Total Projects Listed</div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-4 intro-y bg-white"
                href="#none"
              >
                <div className="p-5">
                  <div className="flex justify-between">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <div className="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                      <span className="flex items-center">30%</span>
                    </div>
                  </div>
                  <div className="ml-2 w-full flex-1">
                    <div>
                      <div className="mt-3 text-3xl font-bold leading-8">{category && category.length}</div>

                      <div className="mt-1 text-base text-gray-600">Total Subject Categories</div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-4 intro-y bg-white"
                href="#none"
              >
                <div className="p-5">
                  <div className="flex justify-between">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-pink-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                      />
                    </svg>
                    <div className="bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                      <span className="flex items-center">30%</span>
                    </div>
                  </div>
                  <div className="ml-2 w-full flex-1">
                    <div>
                      <div className="mt-3 text-3xl font-bold leading-8">{Question && Question.length}</div>

                      <div className="mt-1 text-base text-gray-600">Total Question Listed</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="flex justify-between items-center w-[100%] mt-10 flex-col lg:flex-row">
              <Totalprojectsgraph />
              <Piechart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
