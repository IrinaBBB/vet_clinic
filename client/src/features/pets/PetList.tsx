import { logo_dark } from '../../assets'
import Pagination from '../../app/layout/Pagination.tsx'
import { useNavigate } from 'react-router-dom'
import LoadingComponent from '../../app/components/LoadingComponent.tsx'
import { useQuery } from '@tanstack/react-query'
import { getPets } from '../../app/services/apiPets.ts'
import { LuInfo, LuPen, LuTrash2 } from 'react-icons/lu'

function PetList() {
    const navigate = useNavigate()

    function handleClick(id: number) {
        navigate(`/animals/${id}`)
    }

    const { isLoading, data: pets } = useQuery({
        queryKey: ['animals'],
        queryFn: getPets,
    })

    if (isLoading)
        return <LoadingComponent dark={true} message="Loading pets..." />

    return (
        <>
            <div className="overflow-auto rounded-lg shadow hidden md:block font-montserrat">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b-2 border-gray-200 text-blue-800 uppercase">
                        <tr>
                            <th className="p-3 text-sm font-semibold tracking-wide text-start whitespace-nowrap">
                                &nbsp;
                            </th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-start whitespace-nowrap">
                                Name
                            </th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-start whitespace-nowrap">
                                Species
                            </th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-start whitespace-nowrap">
                                Breed
                            </th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-start whitespace-nowrap">
                                Age
                            </th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-start whitespace-nowrap">
                                &nbsp;
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {pets!.map((pet) => (
                            <tr
                                onClick={() => handleClick(pet.id)}
                                className="even:bg-white odd:bg-indigo-50"
                                key={pet.animal_id}
                            >
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap flex justify-center">
                                    <img
                                        src={logo_dark}
                                        alt="pet"
                                        className="w-20 bg-indigo-50 border-[1px] border-indigo-600 p-5 rounded-full"
                                    />
                                </td>
                                <td className="p-3 text-gray-700 whitespace-nowrap">
                                    {pet.name}
                                </td>
                                <td className="p-3 text-gray-700 whitespace-nowrap">
                                    {pet.species}
                                </td>
                                <td className="p-3 text-gray-700 whitespace-nowrap">
                                    {pet.breed}
                                </td>
                                <td className="p-3 text-gray-700 whitespace-nowrap">
                                    {pet.age}
                                </td>
                                <td className="p-3 text-gray-700 whitespace-nowrap text-center">
                                    <button
                                        className="bg-blue-300 p-3 rounded-full me-2 hover:scale-125 transition-all"
                                        onClick={() =>
                                            handleClick(pet.animal_id)
                                        }
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
                                    Date Of Birth: {pet.dateOfBirth}
                                </div>
                                <div className='pt-5'>
                                    <button
                                        className="bg-blue-300 p-3 rounded-full me-2 hover:scale-125 transition-all"
                                        onClick={() =>
                                            handleClick(pet.animal_id)
                                        }
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
