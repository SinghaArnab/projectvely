import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { app } from '../../Firebase/FirebaseAuth';
import { useDispatch } from 'react-redux';
import { singInUser } from '../../Redux/Slice/AuthSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const auth = getAuth(app)
const firestore = getFirestore(app)

const AdminLogin = () => {

    const [error, setError] = useState("")
    const [input, setInput] = useState({
        email: "",
        password: ""
    })

    const Navigate = useNavigate()
    const Dispatch = useDispatch()

    const handelChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }


    const getAdminData = async () => {
        const userRef = collection(firestore, "Admin");
        const result = query(userRef, where("Email", "==", input.email));
        const Data = await getDocs(result);
        let admin = [];
        Data.forEach((element) => admin = [element.data()]);
        if (admin.length > 0) {
            await signInWithEmailAndPassword(auth, input.email, input.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    Navigate("/Dashboard")
                    Dispatch(singInUser(user.email))
                    toast.success('You are Successfully loggedIn', {
                        position: toast.POSITION.TOP_RIGHT
                    });
                })
        }
        else {
            setError("!Sorry, You are not a Admin")
        }
    };

    const handelSubmit = (e) => {
        e.preventDefault()
        console.log(input)
        getAdminData()
    }

    return (
        <div className="h-screen font-sans login bg-cover">
            <div className="container mx-auto h-full flex flex-1 justify-center items-center">
                <div className="w-full max-w-lg">

                    <div className="leading-loose">
                        <form className="max-w-md mt-4 p-10 bg-black bg-opacity-60  rounded-t-md shadow-xl" onSubmit={handelSubmit}>
                            {
                                error.length > 0 ?
                                    <div className="flex justify-between items-center h-[32px] w-[100%] bg-white rounded-full mb-4">
                                        <h1 className="mr-6 pl-6 font-medium text-red-500">{error}</h1>
                                        <span className='altButton bg-red-500  px-4 text-white rounded-full my-2 cursor-pointer' onClick={() => setError("")}>Close</span>
                                    </div> : ""
                            }
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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin