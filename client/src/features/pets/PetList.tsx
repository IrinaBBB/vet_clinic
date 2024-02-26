import { logo_dark } from '../../assets'
import Pagination from '../../app/layout/Pagination.tsx'
import LoadingComponent from '../../app/components/LoadingComponent.tsx'
import { LuInfo, LuPen, LuTrash2 } from 'react-icons/lu'
import {
    useAppDispatch,
    useAppSelector,
} from '../../app/store/configureStore.ts'
import { fetchPetsAsync, petSelectors } from './petSlice.ts'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function PetList() {
    const navigate = useNavigate()
    const pets = useAppSelector(petSelectors.selectAll)
    const { petsLoaded, status } = useAppSelector((state) => state.pets)
    const dispatch = useAppDispatch()

    function handleClick(id: number) {
        navigate(`/pets/${id}`)
    }

    useEffect(() => {
        if (!petsLoaded) dispatch(fetchPetsAsync())
    }, [petsLoaded, dispatch])

    if (status.includes('pending'))
        return <LoadingComponent dark={true} message="Loading pets..." />

    return (
        <>
            <form className="mb-2">
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search Mockups, Logos..."
                        required
                    />
                    <button
                        type="submit"
                        className="text-white absolute end-2.5 bottom-2.5 bg-indigo-700/80 hover:bg-indigo-800/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Search
                    </button>
                </div>
            </form>

            <div className="overflow-auto rounded-lg shadow hidden md:block font-montserrat">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b-2 border-gray-200 text-blue-800 uppercase">
                        <tr>
                            <th className="p-3 text-sm font-semibold tracking-wide text-center whitespace-nowrap">
                                &nbsp;
                            </th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-center whitespace-nowrap">
                                Name
                            </th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-center whitespace-nowrap">
                                Species
                            </th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-center whitespace-nowrap">
                                Date of Birth
                            </th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-center whitespace-nowrap">
                                Neutered
                            </th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-center whitespace-nowrap">
                                Weight in kilos
                            </th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-start whitespace-nowrap">
                                &nbsp;
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {pets!.map((pet) => (
                            <tr
                                className="even:bg-white odd:bg-indigo-50"
                                key={pet.id}
                            >
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap flex justify-center">
                                    <img
                                        src={logo_dark}
                                        alt="pet"
                                        className="w-20 bg-indigo-50 border-[1px] border-indigo-600 p-5 rounded-full"
                                    />
                                </td>
                                <td className="p-3 text-gray-700 whitespace-nowrap text-center">
                                    {pet.name}
                                </td>
                                <td className="p-3 text-gray-700 whitespace-nowrap text-center">
                                    {pet.species}
                                </td>
                                <td className="p-3 text-gray-700 whitespace-nowrap text-center">
                                    {pet.dateOfBirth.toString()}
                                </td>
                                <td className="p-3 text-gray-700 whitespace-nowrap text-center">
                                    {pet.neutered ? 'Yes' : 'No'}
                                </td>
                                <td className="p-3 text-gray-700 whitespace-nowrap text-center">
                                    {pet.weightInKilos}kg
                                </td>
                                <td className="p-3 text-gray-700 whitespace-nowrap text-center">
                                    <button
                                        className="bg-blue-300 p-3 rounded-full me-2 hover:scale-125 transition-all"
                                        onClick={() => handleClick(pet.id)}
                                    >
                                        <LuInfo />
                                    </button>
                                    <button className="bg-yellow-300 p-3 rounded-full me-2 hover:scale-110 transition-all">
                                        <LuPen />
                                    </button>
                                    <button className="bg-red-300 p-3 rounded-full hover:scale-110 transition-all">
                                        <LuTrash2 />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                {pets!.map((pet) => (
                    <div
                        className="bg-white p-4 rounded-lg shadow bg-gradient-to-tr from-white to-indigo-100"
                        key={pet.id}
                    >
                        <div className="flex items-center justify-center">
                            <img
                                src={logo_dark}
                                alt="pet"
                                className="w-20 bg-indigo-50 hidden md:flex border-[1px] border-indigo-600 p-6 rounded-full"
                            />
                            <div>
                                <div className="uppercase text-indigo-700 text-center mt-2 text-3xl font-light">
                                    {pet.name}
                                </div>
                                <div className="text-center uppercase font-normal mt-2 text-lg">
                                    {pet.species}
                                </div>
                                <div className="text-center mt-2 font-light text-md">
                                    {pet.neutered ? 'Neutered' : 'Not Neutered'}
                                </div>
                                <div className="px-6 text-center font-light text-md">
                                    Date Of Birth: {pet.dateOfBirth.toString()}
                                </div>
                                <div className="pt-5">
                                    <button
                                        className="bg-blue-300 p-3 rounded-full me-2 hover:scale-125 transition-all"
                                        onClick={() => handleClick(pet.id)}
                                    >
                                        <LuInfo />
                                    </button>
                                    <button className="bg-yellow-300 p-3 rounded-full me-2 hover:scale-110 transition-all">
                                        <LuPen />
                                    </button>
                                    <button className="bg-red-300 p-3 rounded-full hover:scale-110 transition-all">
                                        <LuTrash2 />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination />
        </>
    )
}

export default PetList
