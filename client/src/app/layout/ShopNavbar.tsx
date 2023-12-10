import { logo_light, menu } from '../../assets'
import { NavigationLink, shopNavLinks } from '../constants'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
            <div className="flex w-full items-center bg-gradient-to-r from-indigo-600/50 via-violet-600/50 to-indigo-600/50 py-3 px-10 sm:px-20 font-montserrat text-white text-lg uppercase relative z-[100] justify-between sm:justify-between">
                <NavLink className="flex items-center border-none"  to={"/"}>
                    <img
                        src={logo_light}
                        alt="logo"
                        className={`w-8 mr-2 hover:animate-pulse cursor-pointer`}
                    />
                    <div className="font-aoboshi text-2xl capitalize">
                        Vet Clinic Shop
                    </div>
                </NavLink>
                <ul className="hidden sm:flex">
                    {shopNavLinks.map((link: NavigationLink) => (
                        <NavLink
                            to={link.path}
                            key={link.id}
                            className="mr-6 pb-1 py-1 last:mr-0 border-b-2
                        border-b-transparent hover:border-b-2 hover:border-white cursor-pointer ease-in duration-300"
                        >
                            {link.title}
                        </NavLink>
                    ))}
                </ul>
                <div className="relative py-2 hover:cursor-pointer mt-[-10px]">
                    <div className="t-0 absolute left-3">
                        <p className="flex h-2 w-2 items-center justify-center rounded-full bg-pink-600 p-3 text-xs text-white">
                            3
                        </p>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="file: mt-4 h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                    </svg>
                </div>
                <ul className="hidden sm:flex">
                    <NavLink
                        to="/login"
                        className="mr-4 place-self-end pb-1 py-1 last:mr-0 border-b-2
                        border-b-transparent hover:border-b-2 hover:border-white cursor-pointer ease-in duration-300"
                    >
                        Log out
                    </NavLink>
                </ul>
                <img
                    src={menu}
                    alt="menu icon"
                    className={`h-10 w-15 block sm:hidden hover:cursor-pointer ${
                        menuOpen ? 'rotate-90' : 'rotate-0'
                    } transition-all duration-500`}
                    onClick={() => setMenuOpen(!menuOpen)}
                />
            </div>
            {/*RESPONSIVE*/}
            <ul
                className={` overflow-hidden w-full text-center uppercase transition-all duration-500 sm:hidden ${
                    menuOpen ? 'max-h-[1000px]' : 'max-h-0'
                }`}
            >
                {shopNavLinks.map((link: NavigationLink) => (
                    <li
                        key={link.id}
                        className="text-gray-700 tracking-wider text-xl p-3 first:pt-6 last:pb-6 cursor-pointer hover:text-gray-600"
                    >
                        <Link
                            to={link.path}
                            className="bg-gradient-to-r from-violet-700/50 to-blue-700/50 text-white py-2 px-10 rounded-full"
                        >
                            {link.title}
                        </Link>
                    </li>
                ))}
                <li
                    key="logout"
                    className="text-gray-700 tracking-wider text-xl p-3 first:pt-6 last:pb-6 cursor-pointer hover:text-gray-600"
                >
                    <Link
                        to="/login"
                        className="bg-gradient-to-r from-violet-700/50 to-blue-700/50 text-white py-2 px-10 rounded-full"
                    >
                        Logout
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar
