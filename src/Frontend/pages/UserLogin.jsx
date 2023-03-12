import React, { useState } from "react";
// import { GoogleAuthProvider ,SignInMethod,signInWithPopup } from "firebase/auth";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {app} from '../../Firebase/FirebaseAuth'
import { useNavigate } from "react-router-dom";


const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

const UserLogin = () => {
  const Navigate = useNavigate();
  const [LoginData, setLoginData] = useState({ email: "", password: "" });
  const [SignupModal, setSignupModal] = useState(false);
  const HandleChange = (e) => {
    setLoginData((olddata) => {
      return {
        ...olddata,
        [e.target.name]: e.target.value,
      };
    });
  };
  const Submitform = (e) => {
    e.preventDefault();
    console.log(LoginData);
    if (SignupModal === true) {
      createUserWithEmailAndPassword(auth, LoginData.email, LoginData.password);
      Navigate(-1);

  
    } else {
      signInWithEmailAndPassword(auth, LoginData.email, LoginData.password);
      
      Navigate(-1);
    }
  };
  
  return (
    <div>
      <div class="bg-white dark:bg-gray-900">
        <div class="flex justify-center h-screen">
          <div class="hidden bg-cover lg:block lg:w-2/3 userlogin">
            <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 class="text-4xl font-bold text-white">Brand</h2>

                <p class="max-w-xl mt-3 text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  autem ipsa, nulla laboriosam dolores, repellendus perferendis
                  libero suscipit nam temporibus molestiae
                </p>
              </div>
            </div>
          </div>

          <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div class="flex-1">
              <div class="text-center">
                <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">
                  access your account
                </h2>

                <p class="mt-3 text-gray-500 dark:text-gray-300">
                  Sign in to access your account
                </p>
              </div>

              {SignupModal === false ? (
                <div class="mt-8">
                  <form onSubmit={Submitform}>
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        onChange={HandleChange}
                        value={LoginData.email}
                        id="email"
                        placeholder="example@example.com"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div class="mt-6">
                      <div class="flex justify-between mb-2">
                        <label
                          for="password"
                          class="text-sm text-gray-600 dark:text-gray-200"
                        >
                          Password
                        </label>
                        <a
                          href="#none"
                          class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                        >
                          Forgot password?
                        </a>
                      </div>

                      <input
                        type="password"
                        name="password"
                        onChange={HandleChange}
                        value={LoginData.password}
                        id="password"
                        placeholder="Your Password"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div class="mt-6">
                      <button class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Sign in
                      </button>
                    </div>
                  </form>

                  <p class="mt-6 text-sm text-center text-gray-400">
                    Don&#x27;t have an account yet?{" "}
                    <button
                      class="text-blue-500 focus:outline-none focus:underline hover:underline"
                      onClick={() => setSignupModal(true)}
                    >
                      Sign up
                    </button>
                    .
                  </p>
                </div>
              ) : (
                <div class="mt-8">
                  <form onSubmit={Submitform}>
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        onChange={HandleChange}
                        value={LoginData.email}
                        id="email"
                        placeholder="example@example.com"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div class="mt-6">
                      <div class="flex justify-between mb-2">
                        <label
                          for="password"
                          class="text-sm text-gray-600 dark:text-gray-200"
                        >
                          Password
                        </label>
                        <a
                          href="#none"
                          class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                        >
                          Forgot password?
                        </a>
                      </div>

                      <input
                        type="password"
                        name="password"
                        onChange={HandleChange}
                        value={LoginData.password}
                        id="password"
                        placeholder="Your Password"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div class="mt-6">
                      <button class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Sign up
                      </button>
                    </div>
                  </form>

                  <p class="mt-6 text-sm text-center text-gray-400">
                    Don&#x27;t have an account yet?{" "}
                    <button
                      class="text-blue-500 focus:outline-none focus:underline hover:underline"
                      onClick={() => setSignupModal(false)}
                    >
                      Sign in
                    </button>
                    .
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
