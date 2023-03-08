import React from "react";

const CourseDetails = () => {
  return (
    <div>
      <div className="relative min-h-screen md:flex" data-dev-hint="container">
        <input type="checkbox" id="menu-open" className="hidden" />

        <label
          for="menu-open"
          className="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden"
          data-dev-hint="floating action button"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>

        <header
          className="bg-gray-600 text-gray-100 flex justify-between md:hidden"
          data-dev-hint="mobile menu bar"
        >
          <a
            href="#none"
            className="block p-4 text-white font-bold whitespace-nowrap truncate"
          >
            Your App is cool
          </a>

          <label
            for="menu-open"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              id="menu-close-icon"
              className="h-6 w-6 transition duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
        </header>

        <aside
          id="sidebar"
          className="bg-gray-800 text-gray-100 md:w-[20%] w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto"
          data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
        >
          <div
            className="flex flex-col space-y-6"
            data-dev-hint="optional div for having an extra footer navigation"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <span className="text-xl font-extrabold whitespace-nowrap truncate">
                Best Resource for React
              </span>
            </a>

            <nav data-dev-hint="main navigation">
              <li className="flex items-center space-x-2 py-2  transition duration-200 hover:bg-[CRIMSON] hover:text-white m-2 rounded">
                <span className="ml-6 ">High Order Components</span>
              </li>
              <li className="flex items-center space-x-2 py-2  transition duration-200 hover:bg-[CRIMSON] hover:text-white m-2 rounded">
                <span className="ml-6">High Order Components</span>
              </li>
              <li className="flex items-center space-x-2 py-2  transition duration-200 hover:bg-[CRIMSON] hover:text-white m-2 rounded">
                <span className="ml-6">High Order Components</span>
              </li>
              <li className="flex items-center space-x-2 py-2  transition duration-200 hover:bg-[CRIMSON] hover:text-white m-2 rounded">
                <span className="ml-6">High Order Components</span>
              </li>
              <li className="flex items-center space-x-2 py-2  transition duration-200 hover:bg-[CRIMSON] hover:text-white m-2 rounded">
                <span className="ml-6">High Order Components</span>
              </li>
              <li className="flex items-center space-x-2 py-2  transition duration-200 hover:bg-[CRIMSON] hover:text-white m-2 rounded">
                <span className="ml-6">High Order Components</span>
              </li>
              <li className="flex items-center space-x-2 py-2  transition duration-200 hover:bg-[CRIMSON] hover:text-white m-2 rounded">
                <span className="ml-6">High Order Components</span>
              </li>
              <li className="flex items-center space-x-2 py-2  transition duration-200 hover:bg-[CRIMSON] hover:text-white m-2 rounded">
                <span className="ml-6">High Order Components</span>
              </li>
              <li className="flex items-center space-x-2 py-2  transition duration-200 hover:bg-[CRIMSON] hover:text-white m-2 rounded">
                <span className="ml-6">High Order Components</span>
              </li>
              <li className="flex items-center space-x-2 py-2  transition duration-200 hover:bg-[CRIMSON] hover:text-white m-2 rounded">
                <span className="ml-6">High Order Components</span>
              </li>
              <li className="flex items-center space-x-2 py-2  transition duration-200 hover:bg-[CRIMSON] hover:text-white m-2 rounded">
                <span className="ml-6">High Order Components</span>
              </li>
              <li className="flex items-center space-x-2 py-2  transition duration-200 hover:bg-[CRIMSON] hover:text-white m-2 rounded">
                <span className="ml-6">High Order Components</span>
              </li>
            </nav>
          </div>
        </aside>

        <main id="content" className="flex-1 p-6 lg:px-8">
          <div className="max-w-7xl mx-auto ">
            <div className="px-4 py-6 sm:px-0 ">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-[70vh] ">
                <iframe
                  width="100%"
                  title="new Video"
                  height="100%"
                  src="https://www.youtube.com/embed/dI4UG-6yap8"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="">

                <div className=" text-center mt-5 ">
                  <h1 className=" md:text-4xl sm:text-2xl text-xl mb-4 font-semibold">
                    Description About High Order Components
                  </h1>

                  <hr className="W-1/4 mx-auto mb-10 shadow-4xl" />
                </div>

                <div className="sm:flex content-center justify-center">


        <div className=" sm:w-[90%] mx-auto h-auto my-6 lg:mx-8 md:mx-4">
    
            <p className=" text-lg text-justify mx-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sint a odit corrupti ratione. Officiis reprehenderit quo at aperiam rem accusantium excepturi, maxime illo alias odit autem, expedita, nobis debitis recusandae numquam soluta deserunt. Nihil, ipsum porro minus praesentium quae ex sequi iure dicta rem, ut nulla quod temporibus repudiandae voluptatum itaque. Sit, voluptas! Libero iste dolores ea officia mollitia cum voluptatem quis, perferendis at doloremque accusantium voluptatum, aliquam totam ab molestias consequuntur explicabo alias est! Expedita consequatur ad itaque aliquam quia, ipsa quisquam doloremque explicabo! Necessitatibus repudiandae tempora cum dolores error quo possimus voluptates laudantium blanditiis, ex eos voluptatibus.</p>
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
