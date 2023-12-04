// import { hide, logo_dark, view } from '../assets'
// import { stylesInputField } from '../app/constants/formInputStyles.ts'
// import { useState } from 'react'

import {logo_dark, logo_light} from "../assets";

function LoginForm() {
    //const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="grid grid-cols-2">
            <div className="flex items-center justify-center bg-cover bg-bottom h-[100vh] bg-[url('/src/assets/bg-image.jpg')]">
                <div className="absolute col-start-1 row-start-1 bg-gradient-to-r from-indigo-900/90 to-indigo-900/90 w-1/2 h-screen"></div>
                <img src={logo_light} alt="logo" className="z-10 w-1/2 opacity-60"/>
            </div>
            <div className="z-10 px-8 bg-indigo-100 md:px-32 lg:px-24 flex flex-col justify-center">
                <form className="bg-white rounded-md shadow-2xl p-5 text-center">
                    <img src={logo_dark} alt="logo" className="w-1/6 mx-auto"/>
                    <p className="text-sm font-normal text-indigo-700 mb-3">
                        VetClinic
                    </p>
                    <h1 className="text-gray-800 font-normal uppercase text-3xl mb-4 tracking-wider">
                        Login
                    </h1>
                    <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                            />
                        </svg>
                        <input
                            id="email"
                            className=" pl-2 w-full outline-none border-none"
                            type="email"
                            name="email"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <input
                            className="pl-2 w-full outline-none border-none"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="block w-full bg-indigo-800 mt-5 py-2 rounded-xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
                    >
                        Login
                    </button>
                    <div className="flex justify-between mt-4">
                            <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                                Forgot Password ?
                            </span>

                        <a
                            href="#"
                            className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                        >
                            Don't have an account yet?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
