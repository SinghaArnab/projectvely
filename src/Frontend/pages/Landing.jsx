import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import { getProjectData } from '../../Redux/Slice/DataSlice'

const Landing = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const sendLevel = (level) => {
    console.log(level);
    navigate("/Projects");
    dispatch(getProjectData(level));
  };

  return (
    <div className="">
      <div className=" hero relative h-[70vh] w-full flex items-center justify-center text-center bg-cover bg-center">
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

        <main className="px-4 sm:px-6 lg:px-8 z-10 w-[100%] flex justify-center items-center flex-col">
          <div className="text-center">
            <h2 className="text-4xl tracking-tight leading-10 font-medium sm:text-5xl text-white sm:leading-none md:text-6xl">
              <span className="text-green-400 font-bold">ProjectVally</span> Boost
              Your Skills
            </h2>
            <p className="mt-3 text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
              E Education app and best resource app for Web Developer . you can
              Learn Best Skills from Best Resouce
            </p>

            <div className="sm:w-[100%] w-[90%] m-5">
              <SearchBox />
            </div>
          </div>
        </main>
      </div>

      <div className="w-[100%] flex justify-center items-center mt-10">
        <div className="">
          <h1 className=" font-Mono font-bold text-[25px] leading-10">
            Find the Best Project For YOU
          </h1>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3959Cj16Wx6dYP95pAkrF4-oycon_BpGvcA&usqp=CAU"
          className="flex-shrink-0
                    object-cover rounded-full btn- w-12 h-12 sm:ml-3 ml-2" alt="img"
        />
      </div>
      <div className="min-h-[80vh] bg-gradient-to-tr flex justify-center items-center ">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500" onClick={() => sendLevel("Beginner")}>
            <div className="relative" >
              <img
                className="w-full rounded-xl"
                src="https://geeks-react.netlify.app/static/media/course-react.999d5d4b7ef4771200c2.jpg"
                alt="Colors"
              />
              <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                FREE
              </p>
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer text-center">
              React js Projects for Absolute Beginners
            </h1>
            <div className="my-4">
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <p>20+ Projects</p>
              </div>
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </span>
                <p>React JS</p>
              </div>
              <button
                className="mt-6 text-xl w-full text-white bg-green-500 py-2 rounded-xl shadow-lg"
                onClick={() => sendLevel("Beginner")}
              >
                See Projects
              </button>
            </div>
          </div>

          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500" onClick={() => sendLevel("Intermediate")}>
            <div className="relative">
              <img
                className="w-full rounded-xl"
                src="https://i.ytimg.com/vi/F2oDONZ9vik/maxresdefault.jpg"
                alt="Colors"
              />
              <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                FREE
              </p>
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer text-center">
              React js Projects for Intermediates{" "}
            </h1>
            <div className="my-4">
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <p>20+ Projects</p>
              </div>
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </span>
                <p>React JS</p>
              </div>
              <button
                className="mt-10 text-xl w-full text-white bg-[crimson] py-2 rounded-xl shadow-lg"
                onClick={() => sendLevel("Intermediate")}
              >
                See Projects
              </button>
            </div>
          </div>

          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"  onClick={() => sendLevel("Advance")}>
            <div className="relative">
              <img
                className="w-full rounded-xl"
                src="https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/119501253/original/91d7b323faf98bcdd6981d68ed1db9480b3c8944.png"
                alt="Colors"
              />
              <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                FREE
              </p>
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer text-center">
              React js Advance Projects{" "}
            </h1>
            <div className="my-4">
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <p>20+ Projects</p>
              </div>
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </span>
                <p>React JS</p>
              </div>
              <button
                className="mt-[60px] text-xl w-full text-white bg-violet-700 py-2 rounded-xl shadow-lg"
                onClick={() => sendLevel("Advance")}
              >
                See Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
