import { logo_light, menu } from '../../assets'
import { NavLink, navLinks } from '../../constants'
import { useState } from 'react'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
            <div className="flex items-center bg-blue-900 py-3 px-10 sm:px-20 font-montserrat text-white text-lg uppercase relative z-[100] justify-between sm:justify-start">
                <img src={logo_light} alt="logo" className={`h-10 w-10 mr-5`} />
                <ul className="hidden sm:flex">
                    {navLinks.map((link: NavLink) => (
                        <li
                            key={link.id}
                            className="mr-4 pb-1 py-1 last:mr-0 border-b-2
                        border-b-transparent hover:border-b-2 hover:border-white cursor-pointer ease-in duration-300"
                        >
                            {link.title}
                        </li>
                    ))}
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
            <ul
                className={`bg-blue-100 overflow-hidden w-full text-center uppercase transition-all duration-500 sm:hidden ${
                    menuOpen ? 'max-h-[1000px]' : 'max-h-0'
                }`}
            >
                {navLinks.map((link: NavLink) => (
                    <li
                        key={link.id}
                        className="text-gray-500 text-xl p-3 first:pt-6 last:pb-6 cursor-pointer hover:text-gray-400"
                    >
                        {link.title}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Navbar
