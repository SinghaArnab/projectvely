import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { courseDetails, STATUS } from '../../Redux/Slice/DataSlice'

const CourseDetails = () => {
  const { courseName } = useParams();
  const dispatch = useDispatch();
  const { FilterContent, status } = useSelector((state) => state.QuestionData);
  const [toggle, settoggle] = useState(false);
  const [conetentData, setconetentData] = useState({});
  console.log(courseName);

  const getContent = (id) => {
    const finddata = FilterContent.find((x) => x.CourseId === id);
    setconetentData(finddata);
    console.log(conetentData, FilterContent);
  };
  useEffect(() => {
    dispatch(courseDetails(courseName))
    console.log("coursedetilas");
    if (FilterContent) {
      setconetentData(FilterContent.at(0))
      console.log("gvasdft");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, conetentData]);



  return (
    <div>
      <div className="relative min-h-screen md:flex" data-dev-hint="container">
        <header
          onClick={() => settoggle(!toggle)}
          className="bg-gray-900 text-gray-100 flex justify-between md:hidden"
          data-dev-hint="mobile menu bar"
        >
          <a
            href="#none"
            className="block p-4 text-white font-bold whitespace-nowrap truncate"
          >
            Best Resource htmlFor React
          </a>

          <label
            htmlFor="menu-open"
            id="mobile-menu-button"
            className="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md"
          >
            <svg
              id="menu-open-icon"
              className="h-6 w-6 transition duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </header>

        <aside
          id="sidebar"
          className={`${toggle === true
              ? "  bg-gray-800  text-gray-100 md:w-[20%] w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto"
              : " sm:block hidden  bg-gray-800  text-gray-100 md:w-[20%] w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto "
            }`}
          data-dev-hint="sidebar; px-0 htmlFor frameless; px-2 htmlFor visually inset the navigation"
        >
          <div
            className="flex flex-col space-y-6"
            data-dev-hint="optional div htmlFor having an extra footer navigation"
          >
            <a
              href="#none"
              className="text-white flex items-center space-x-2 px-4"
              title="Your App is cool"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 flex-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <span className="text-xl font-extrabold whitespace-nowrap truncate">
                {courseName} Best Resource
              </span>
            </a>

            <nav
              data-dev-hint="main navigation "
              onClick={() => settoggle(false)}
            >
              {status === STATUS.IDEL
                ? FilterContent.map((x) => {

                  return (
                    <li
                      className="flex items-center space-x-2 py-2  transition duration-200 hover:bg-[CRIMSON] hover:text-white m-2 rounded"
                      key={x.CourseId}
                      onClick={() => getContent(x.CourseId)}
                    >
                      <span className="ml-6 ">{x.CourseTopic}</span>
                    </li>
                  );
                })
                : ""}
            </nav>
          </div>
        </aside>

        <main id="content" className="flex-1  lg:px-8 w-[100%]  ">
          <div className="max-w-7xl mx-auto w-[100%]  ">
            <div className="px-4 py-6 sm:px-0 w-[100%] ">
              <div className="border-4 border-dashed border-gray-200 rounded-lg sm:h-[70vh] h-[30vh] w-[100%] ">
                <iframe
                  width="100%"
                  height="100%"
                  title="youtube video"
                  src={`https://www.youtube.com/embed/${conetentData && conetentData.CourseLink}`}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="">
                <div className=" text-center mt-10 ">
                  <h1 className=" md:text-4xl sm:text-2xl text-xl mb-4 font-semibold">
                    Description About {conetentData && conetentData.CourseTopic}
                  </h1>

                  <hr className="W-1/4 mx-auto mb-10 shadow-4xl" />
                </div>

                <div className="sm:flex content-center justify-center">
                  <div className=" sm:w-[90%] mx-auto h-auto my-6 lg:mx-8 md:mx-4">
                    <p className=" text-lg text-justify mx-4">
                      {conetentData && conetentData.TopicAnswer}
                    </p>
                  </div>
                </div>
              </div>




            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CourseDetails;
