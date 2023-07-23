import { logo_light, menu } from '../../assets'
import { NavigationLink, navLinks } from '../../constants'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
            <div className="flex w-full items-center bg-gradient-to-r from-indigo-700 to-blue-700  py-3 px-10 sm:px-20 font-montserrat text-white text-lg uppercase relative z-[100] justify-between sm:justify-between">
                <div className="flex">
                    <img
                        src={logo_light}
                        alt="logo"
                        className={`h-10 w-10 mr-5 hover:animate-pulse cursor-pointer`}
                    />
                    <ul className="hidden sm:flex">
                        {navLinks.map((link: NavigationLink) => (
                            <NavLink
                                to={link.path}
                                key={link.id}
                                className="mr-4 pb-1 py-1 last:mr-0 border-b-2
                        border-b-transparent hover:border-b-2 hover:border-white cursor-pointer ease-in duration-300"
                            >
                                {link.title}
                            </NavLink>
                        ))}
                    </ul>
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
                {navLinks.map((link: NavigationLink) => (
                    <li
                        key={link.id}
                        className="text-gray-700 tracking-wider text-xl p-3 first:pt-6 last:pb-6 cursor-pointer hover:text-gray-600"
                    >
                        <Link
                            to={link.path}
                            className="bg-gradient-to-r from-violet-700 to-blue-700 text-white py-2 px-10 rounded-full"
                        >
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Navbar
