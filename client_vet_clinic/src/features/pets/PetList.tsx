import { logo_dark } from '../../assets'
import { pets } from '../../constants'
import Pagination from '../../app/layout/Pagination.tsx'

function PetList() {
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
                        {pets.map((pet) => (
                            <tr className="even:bg-white odd:bg-gray-100">
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap flex justify-center">
                                    <img
                                        src={logo_dark}
                                        alt="pet image"
                                        className="w-16 bg-blue-100 p-1 rounded-full"
                                    />
                                </td>
                                <td className="p-3 text-gray-700 whitespace-nowrap">
                                    {pet.name}
                                </td>
                                <td className="p-3 text-gray-700 whitespace-nowrap">
                                    {pet.species}
                                </td>
                                <td className="p-3 text-gray-700 whitespace-nowrap">
                                    {pet.dateOfBirth}
                                </td>
                                <td className="p-3 text-gray-700 whitespace-nowrap">
                                    {pet.neutered ? 'yes' : 'no'}
                                </td>
                                <td className="p-3 text-gray-700 whitespace-nowrap">
                                    {pet.weight} kg
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination />
        </>
    )
}

export default PetList
