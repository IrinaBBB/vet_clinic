import { logo_light, menu } from '../../assets'
import { NavLink, navLinks } from '../../constants'

function Navbar() {
    return (
        <>
            <div className="flex items-center bg-nav-gradient py-3 px-10 sm:px-20 font-montserrat text-white text-lg uppercase relative z-[100] justify-between sm:justify-start">
                <img src={logo_light} alt="logo" className="h-10 w-10 mr-5" />
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
                    className="h-10 w-10 block sm:hidden hover:cursor-pointer"
                />
            </div>
            {/*<ul className="bg-tertiary absolute w-full dropdown z-10">*/}
            {/*    {navLinks.map((link: NavLink) => (*/}
            {/*        <li*/}
            {/*            key={link.id}*/}
            {/*            className="mr-4 pb-1 py-1 last:mr-0 border-b-2*/}
            {/*            border-b-transparent hover:border-b-2 hover:border-white cursor-pointer ease-in duration-300"*/}
            {/*        >*/}
            {/*            {link.title}*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
        </>
    )
}

export default Navbar;
