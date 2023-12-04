import { logo_dark } from '../../assets'
import Pagination from '../../app/layout/Pagination.tsx'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Animal } from '../../app/models/animal.ts'

function PetList() {
    const [animals, setAnimals] = useState<Animal[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:5002/api/animals')
            .then((response) => response.json())
            .then((data) => setAnimals(data))
    }, [])

    function handleClick(id: number) {
        navigate(`/animals/${id}`)
    }

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
                                Date of Birth
                            </th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-start whitespace-nowrap">
                                Neutered
                            </th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-start whitespace-nowrap">
                                Weight
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {animals.map((animal) => (
                            <tr
                                onClick={() => handleClick(animal.id)}
                                className="even:bg-white odd:bg-gray-100 hover:bg-indigo-50"
                                key={animal.id}
                            >
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap flex justify-center">
                                    <img
                                        src={logo_dark}
                                        alt="pet"
                                        className="w-16 bg-indigo-50 border-[1px] border-indigo-600 p-1 rounded-full"
                                    />
                                </td>
                                <td className="p-3 text-gray-700 whitespace-nowrap">
                                    {animal.name}
                                </td>
                                <td className="p-3 text-gray-700 whitespace-nowrap">
                                    {animal.species}
                                </td>
                                <td className="p-3 text-gray-700 whitespace-nowrap">
                                    {animal.dateOfBirth}
                                </td>
                                <td className="p-3 text-gray-700 whitespace-nowrap">
                                    {animal.neutered ? 'yes' : 'no'}
                                </td>
                                <td className="p-3 text-gray-700 whitespace-nowrap">
                                    {animal.weightInKilos} kg
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                {animals.map((animal) => (
                    <div
                        className="bg-white p-4 rounded-lg shadow bg-gradient-to-tr from-white to-blue-100"
                        key={animal.id}
                        onClick={() => handleClick(animal.id)}
                    >
                        <div className="flex items-center">
                            <img
                                src={logo_dark}
                                alt="pet"
                                className="w-20 bg-blue-100 p-1 rounded-full ms-7 sm:ms-3 me-7"
                            />
                            <div>
                                <div className="text-blue-800 mb-2 text-center uppercase font-bold py-1 px-2 bg-blue-200 rounded-full">
                                    {animal.name}
                                </div>
                                <div className="uppercase mb-1">
                                    {animal.species}
                                </div>
                                <div className="uppercase mb-1">
                                    {animal.neutered ? 'yes' : 'no'}
                                </div>
                                <div className="uppercase mb-1">
                                    {animal.dateOfBirth}
                                </div>
                                <div className="uppercase mb-1">
                                    {animal.weightInKilos} kg
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
