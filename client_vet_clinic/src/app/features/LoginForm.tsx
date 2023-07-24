import { hide, logo_dark, view } from '../../assets'
import { stylesInputField } from '../../constants/formInputStyles.ts'
import { useState } from 'react'

function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <>
            <div className="flex items-center justify-center w-full h-[100vh] bg-gradient-to-r from-sky-500 to-indigo-500">
                <form
                    className="flex flex-col w-[100%] h-full ss:h-fit ss:w-[80%] md:w-[40%] items-center
                    bg-white p-10 rounded-[4px] shadow-md shadow-slate-800 opacity-[90%]"
                >
                    <img
                        src={logo_dark}
                        alt="logo"
                        className={`w-[100px] mb-6`}
                    />
                    <div className="w-full text-center font-montserrat mt-3">
                        <input
                            type="text"
                            placeholder="Enter your login name"
                            className={`peer w-full ${stylesInputField}`}
                            required
                        />
                        <label
                            className={`text-gray-500 text-start ms-10 block`}
                        >
                            Login
                        </label>
                    </div>
                    <div className="w-full text-center font-montserrat mt-3 relative">
                        <input
                            type={`${showPassword ? 'text' : 'password'}`}
                            placeholder="Enter your password"
                            className={`peer w-full ${stylesInputField}`}
                            required
                        />
                        <img
                            src={showPassword ? view : hide}
                            alt="icon view password"
                            className="w-[32px] cursor-pointer absolute top-2.5 right-5"
                            onClick={() => setShowPassword(!showPassword)}
                        />
                        <label
                            className={`text-gray-500 text-start ms-10 block`}
                        >
                            Password
                        </label>
                    </div>
                    <button className="bg-blue-800 px-10 py-2 mt-3 rounded text-white uppercase w-full hover:bg-blue-700 transition-all duration-300">
                        Login
                    </button>
                </form>
            </div>
        </>
    )
}

export default LoginForm
