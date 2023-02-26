import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../Firebase/FirebaseAuth';
import { useDispatch } from 'react-redux';
import { singInUser } from '../../Redux/Slice/AuthSlice';


const auth=getAuth(app)

const AdminLogin = () => {


    const [input,setInput] =useState({
        email: "dlllc",
        password: ""
    })
    
    const Navigate = useNavigate()
    const Dispatch=useDispatch()

    const handelChange = (e) => {
        const {name, value} = e.target

        setInput(() => {
            return {
                ...input, [name]:value
            }
        })

    }

    const handelSubmit = (e) => {
        e.preventDefault()
        console.log(input)
        signInWithEmailAndPassword(auth, input.email, input.password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user.email)
            Navigate("/Dashboard")
            Dispatch(singInUser(user.email))
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, + " " + errorMessage)
        });


    }





    return (
        <div className="h-screen font-sans login bg-cover">
            <div className="container mx-auto h-full flex flex-1 justify-center items-center">
                <div className="w-full max-w-lg">
                    <div className="leading-loose">
                        <form className="max-w-sm mt-4 p-10 bg-black bg-opacity-60  rounded-t-md shadow-xl" onSubmit={handelSubmit}>
                            <p className="text-white text-center text-lg font-bold mb-2">ADMIN LOGIN</p>
                            <div className="">
                                <label className="block text-lg text-white" htmlFor="email">E-mail</label>
                                <input name='email' value={input.email} onChange={handelChange} className="w-full px-5 py-1 text-gray-900 bg-gray-200 rounded focus:outline-none focus:bg-white" type="email" id="email" placeholder="example@gmail.com" aria-label="email" required />
                            </div>
                            <div className="mt-2">
                                <label className="block  text-lg text-white">Password</label>
                                <input name='password' value={input.password} className="w-full px-5 py-1 text-gray-900 bg-gray-200 rounded focus:outline-none focus:bg-white"
                                    type="password" id="password" placeholder="Password" arial-label="password" onChange={handelChange} />
                            </div>

                            <div className="mt-4 items-center flex justify-between">
                                <button className="px-4 py-1 text-white font-light tracking-wider bg-red-400 hover:bg-gray-800 rounded"
                                    type="submit">Login</button>
                                <a className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400"
                                    href="#none">forget your password ?</a>
                            </div>

                        </form>
                        <div className="max-w-sm pb-5 px-10 bg-opacity-60 rounded-b-sm shadow-xl bg-black ">
                            <button
                                className="w-full  px-4 py-1 tracking-wide text-white transition-colors duration-200 transform bg-green-400 rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-600 focus:ring focus:ring-green-500 focus:ring-opacity-50 hover:scale-95">
                                <i className="fab fa-google mr-5"></i> SignIn with Google
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin