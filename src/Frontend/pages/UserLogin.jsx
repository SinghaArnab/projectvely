import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, } from "firebase/auth";
import { app } from '../../Firebase/FirebaseAuth'
import { useNavigate } from "react-router-dom";


const auth = getAuth(app);

const UserLogin = () => {
  const Navigate = useNavigate();
  const [LoginData, setLoginData] = useState({ email: "", password: "" });
  const [SignupModal, setSignupModal] = useState(false);

  const HandleChange = (e) => {
    setLoginData({ ...LoginData, [e.target.name]: e.target.value });
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
      <div className="bg-white dark:bg-orange-400">
        <div className="flex justify-center h-screen">
          <div className="hidden bg-cover lg:block lg:w-2/3 userlogin">
            <div className="flex items-center h-full px-20  bg-opacity-40">
              <div>
                <h2 className="text-4xl font-bold text-white">User Login</h2>

                <p className="max-w-xl mt-3 text-white/60">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  autem ipsa, nulla laboriosam dolores, repellendus perferendis
                  libero suscipit nam temporibus molestiae
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-center text-white/60 dark:text-white">
                  access your account
                </h2>

                <p className="mt-3 text-black">
                  Sign in to access your account
                </p>
              </div>

              {SignupModal === false ? (
                <div className="mt-8">
                  <form onSubmit={Submitform}>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-md text-white"
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
                        className="block w-full px-4 py-2 mt-2 text-black placeholder-black/60 bg-white border border-white/60 rounded-md dark:placeholder-black/60 dark:bg-white/60 dark:text-black/60 dark:border-white/60 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div className="mt-6">
                      <div className="flex justify-between mb-2">
                        <label
                          htmlFor="password"
                          className="text-md text-md text-white"
                        >
                          Password
                        </label>
                        <a
                          href="#none"
                          className="text-sm text-black focus:text-blue-500 hover:text-blue-500 hover:underline"
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
                        className="block w-full px-4 py-2 mt-2 text-black placeholder-black/60 bg-white border border-white/60 rounded-md dark:placeholder-black/60 dark:bg-white/60 dark:text-black/60 dark:border-white/60 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div className="mt-6">
                      <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Sign in
                      </button>
                    </div>
                  </form>

                  <p className="mt-6 text-sm text-center text-black">
                    Don&#x27;t have an account yet?{" "}
                    <button
                      className="text-white focus:outline-none focus:underline hover:text-blue-500 hover:underline text-xl"
                      onClick={() => setSignupModal(true)}
                    >
                      Sign up
                    </button>
                    .
                  </p>
                </div>
              ) : (
                <div className="mt-8">
                  <form onSubmit={Submitform}>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-md text-white"
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
                        className="block w-full px-4 py-2 mt-2 text-black placeholder-black/60 bg-white border border-white/60 rounded-md dark:placeholder-black/60 dark:bg-white/60 dark:text-black/60 dark:border-white/60 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div className="mt-6">
                      <div className="flex justify-between mb-2">
                        <label
                          htmlFor="password"
                          className=" text-md text-white"
                        >
                          Password
                        </label>
                        <a
                          href="#none"
                          className="text-sm text-black focus:text-red-500 hover:text-blue-500 hover:underline"
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
                        className="block w-full px-4 py-2 mt-2 text-black placeholder-black/60 bg-white border border-white/60 rounded-md dark:placeholder-black/60 dark:bg-white/60 dark:text-black/60 dark:border-white/60 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div className="mt-6">
                      <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Sign up
                      </button>
                    </div>
                  </form>

                  <p className="mt-6 text-sm text-center text-black">
                    Don&#x27;t have an account yet?{" "}
                    <button
                      className="text-white focus:outline-none focus:underline hover:text-blue-500 hover:underline text-xl"
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
