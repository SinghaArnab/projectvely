import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
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
    const [loading, setloading] = useState(false)
    const [isForget, setForget] = useState(false)
    const [email, setEmail] = useState('');
    const [resetEmailSent, setResetEmailSent] = useState(false);
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
                    setloading(false)
                    Navigate("/Dashboard")
                    Dispatch(singInUser(user.email))
                    toast.success('You are Successfully loggedIn', {
                        position: toast.POSITION.TOP_RIGHT
                    })
                }).catch(() => {
                    setloading(false)
                    setError("!Sorry, Wrorng Password or Email")
                })
        }
        else {
            setError("!Sorry, You are not a Admin")
            setloading(false)
        }
    };

    const handelSubmit = () => {
        console.log(input)
        setloading(true)
        getAdminData()
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleResetPassword = async (event) => {
        event.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email)
            setResetEmailSent(true);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <div className=" h-[85vh] lg:h-screen font-sans  bg-cover w-[100%] flex">
            <div className='w-[70%] h-screen bg-red-300 hidden lg:block'>
                <section
                    className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
                >
                    <img
                        alt="Night"
                        src="https://damassets.autodesk.net/content/dam/autodesk/www/industry/3d-animation/create-beautiful-3d-animations-thumb-1204x677.jpg"
                        className="absolute inset-0 h-full w-full object-cover opacity-80"
                    />

                    <div className="hidden lg:relative lg:block lg:p-12">
                        <a className="block text-white" href="/">
                            <span className="sr-only">Home</span>
                            <svg
                                className="h-8 sm:h-10"
                                viewBox="0 0 28 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>

                        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                            Welcome to <span className='text-red-400'>Educate</span>  <span className='text-green-400'>Admin Login</span> 🦑
                        </h2>

                        <p className="mt-4 leading-relaxed text-white/90">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
                            dolorum aliquam, quibusdam aperiam voluptatum.
                        </p>
                    </div>
                </section>

            </div>
            <div className="w-[100%] lg:w-[30%]  lg:h-screen  loginSide flex justify-center items-center flex-col" >

                {loading ?

                    <div className="clock">
                        <div className="hand hour"></div>
                        <div className="hand minute"> </div>
                    </div>

                    :
                    <div className='w-[95%] lg:w-[80%] bg-[#35394a]/50 lg:bg-[#35394a]/50 h-[95%] lg:h-[80%] flex justify-center items-center flex-col'>
                        {
                            error.length > 0 ?
                                <div className="flex justify-between items-center h-[35px] w-[100%] lg:w-[90%] bg-white rounded-full mb-4 px-1">
                                    <h1 className="mr-2 pl-6 font-medium text-red-400 text-sm ">{error}</h1>
                                    <span className='altButton bg-red-500  px-4 text-white rounded-full my-2 cursor-pointer' onClick={() => setError("")}>Close</span>
                                </div> : ""
                        }
                        {

                            isForget ?
                                <div>
                                    {resetEmailSent ? (
                                        <div className='w-[100%] text-center text-[20px]'>
                                            <p>Reset email sent. Check your inbox for further instructions.</p>
                                            <button onClick={() => setForget(!isForget)} className="mt-10 bg-transparent rounded-full hover:bg-yellow-200/80 text-red-300 font-semibold hover:text-white py-3 px-16 border-[2px] border-pink-600/90 hover:border-transparent">
                                                Go Back
                                            </button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleResetPassword} className='flex justify-center items-center flex-col w-[100%] '>


                                            <div className='text-[20px] text-white/70 mb-[20px]'>
                                                <span>Write Your Register Email Id </span>
                                            </div>

                                            <div className="w-[100%] relative  ">
                                                <div className=' absolute top-3 left-1 lg:left-10 text-[20px] text-green/70'>
                                                    <i className="fa-solid fa-user"></i>
                                                </div>
                                                <input type="email" value={email} onChange={handleEmailChange} className="w-[100%] px-11 lg:px-20 py-4 text-gray-100 focus:outline-none bg-[#35394a]/50 lg:bg-gray-600/50 focus:text-white " id="email" placeholder="Username@gmail.com" aria-label="email" required />
                                            </div>
                                            <div type="submit" className='mt-10 flex gap-2'>
                                                <button type='submit' className="mt-10 bg-transparent rounded-full hover:bg-yellow-200/90 text-red-300 font-semibold hover:text-white py-3 px-8 border-[2px] border-yellow-600/90 hover:border-transparent">
                                                    Reset Password
                                                </button>
                                                <button onClick={() => setForget(!isForget)} className="mt-10 bg-transparent rounded-full hover:bg-pink-500 text-red-300 font-semibold hover:text-white py-3 px-16 border-[2px] border-pink-600/90 hover:border-transparent">
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    )}
                                </div>

                                :

                                <>
                                    <div className='text-[25px] text-white/70 mb-[50px]'>
                                        <span>Admin Login</span>
                                    </div>

                                    <div className="w-[100%] relative p-2 lg:p-0">
                                        <div className=' absolute top-5 lg:top-3 left-1 lg:left-10 pl-3 p text-[20px] text-green/70'>
                                            <i className="fa-solid fa-user"></i>
                                        </div>
                                        <input name='email' value={input.email} onChange={handelChange} className="w-[100%] px-11 lg:px-20 py-4 text-gray-100 focus:outline-none bg-[#35394a]/50 lg:bg-gray-600/50 focus:text-white " type="email" id="email" placeholder="Username@gmail.com" aria-label="email" required />
                                    </div>

                                    <div className="mt-2 w-[100%] relative p-2 lg:p-0">
                                        <div className=' absolute top-5 lg:top-3 left-1 lg:left-10 pl-3 text-[20px] text-green/70'>
                                            <i className="fa-solid fa-lock"></i>
                                        </div>
                                        <input name='password' value={input.password} className="w-[100%] px-11 lg:px-20 py-4 text-gray-900 bg-[#35394a]/50 lg:bg-gray-600/50  focus:text-white focus:outline-none"
                                            type="password" id="password" placeholder="Password" arial-label="password" onChange={handelChange} required />
                                    </div>

                                    <div className='flex justify-end items-center w-[100%] mt-2 px-3 text-gray-400'>
                                        <a className="inline-block right-0 align-baseline font-bold text-sm text-500 hover:text-red-400"
                                            href="#none" onClick={() => setForget(!isForget)}>forget your password ?</a>

                                    </div>

                                    <div className='mt-10'>
                                        <button onClick={handelSubmit} className="bg-transparent rounded-full hover:bg-pink-500 text-red-300 font-semibold hover:text-white py-3 px-16 border-[2px] border-pink-600/90 hover:border-transparent">
                                            LOG IN
                                        </button>
                                    </div>

                                </>
                        }
                    </div>

                }

            </div>
        </div>
    )
}

export default AdminLogin