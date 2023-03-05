import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { v4 } from 'uuid'
import { app } from '../../Firebase/FirebaseAuth';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";


const auth = getAuth(app)
const fireStore = getFirestore(app);


const Addadmin = ({ setIsAdmin }) => {

    const { userEmail } = useSelector((state) => state.AuthSlice)

    const [input, setInput] = useState({
        id: v4(),
        Name: "",
        Email: "",
        Password: "",
        cPassword: ""
    })

    const handelChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handelSubmit = async (e) => {
        e.preventDefault()

        if (input.Password === input.cPassword) {

            createUserWithEmailAndPassword(auth, input.Email, input.Password)
                .then(() => addAdmin())
                .then(() => signOut(auth))
                .catch((error) => console.warn(error))

        }
        setInput({ id: v4(), Name: "", Email: "", Password: "", cPassword: "" })
    }
    const addAdmin = async () => {

        await addDoc(collection(fireStore, "Admin"), {
            id: input.id,
            Name: input.Name,
            Email: input.Email,
            Perks: "Admin",
            adminEmail: userEmail
        })
    }

    return (
        <div className="container mx-auto max-h-screen bg-slate-500 w-[100%]">
            <div className="flex justify-center px-6 my-12">
                <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                    <div
                        className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg addadmin"
                    ></div>
                    <div className="w-full lg:w-1/2 bg-white p-3 rounded-lg lg:rounded-l-none">
                        <h3 className="pt-4 text-2xl text-center">Register New Admin!</h3>
                        <h4 className="pt-4 text-sm text-center text-red-500">After Register New Admin you will be autometically logout from your account!</h4>
                        <form className="px-8 pt-2 pb-8 mb-2 bg-white rounded" onSubmit={handelSubmit}>
                            <div className="mb-2">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
                                    Name
                                </label>
                                <input
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="Name"
                                    name='Name'
                                    value={input.Name}
                                    onChange={handelChange}
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
                                    Email
                                </label>
                                <input
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="useremail"
                                    type="email"
                                    placeholder="Username"
                                    name='Email'
                                    value={input.Email}
                                    onChange={handelChange}
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="******************"
                                    name='Password'
                                    value={input.Password}
                                    onChange={handelChange}
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                    Conform Password
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="confrompassword"
                                    type="password"
                                    placeholder="******************"
                                    name='cPassword'
                                    value={input.cPassword}
                                    onChange={handelChange}
                                />

                            </div>

                            <div className="mb-6 text-center flex gap-5">
                                <button
                                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Register
                                </button>
                                <button
                                    className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={() => setIsAdmin(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                            <hr className="mb-2 border-t" />
                            <div className="text-center">

                            </div>
                            <div className="text-center">
                                <a
                                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                    href="#none"
                                >
                                    Forgot Password?
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Addadmin