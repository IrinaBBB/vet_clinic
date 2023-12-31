import { logo_dark } from '../../../assets'
import Pagination from '../../../app/layout/Pagination.tsx'
import { useNavigate } from 'react-router-dom'
import {
    useAppDispatch,
    useAppSelector,
} from '../../../app/store/configureStore.ts'
import { fetchAnimalsAsync, petSelectors } from './petSlice.ts'
import { useEffect } from 'react'
import LoadingComponent from '../../../app/components/LoadingComponent.tsx'

function PetList() {
    const navigate = useNavigate()

    function handleClick(id: number) {
        navigate(`/clinic/animals/${id}`)
    }

    const pets = useAppSelector(petSelectors.selectAll)
    const { petsLoaded, status } = useAppSelector((state) => state.pets)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!petsLoaded) dispatch(fetchAnimalsAsync())
    }, [petsLoaded, dispatch])

    if (status.includes('pending'))
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
                            <tr
                                onClick={() => handleClick(pet.id)}
                                className="even:bg-white odd:bg-indigo-50 hover:bg-indigo-100"
                                key={pet.id}
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
                                    {pet.dateOfBirth}
                                </td>
                                <td className="p-3 text-gray-700 whitespace-nowrap">
                                    {pet.neutered ? 'yes' : 'no'}
                                </td>
                                <td className="p-3 text-gray-700 whitespace-nowrap">
                                    {pet.weightInKilos} kg
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                {pets.map((animal) => (
                    <div
                        className="bg-white p-4 rounded-lg shadow bg-gradient-to-tr from-white to-indigo-100"
                        key={animal.id}
                        onClick={() => handleClick(animal.id)}
                    >
                        <div className="flex items-center">
                            {/*<img*/}
                            {/*    src={logo_dark}*/}
                            {/*    alt="pet"*/}
                            {/*    className="w-20 bg-blue-100 p-1 rounded-full ms-7 sm:ms-3 me-7"*/}
                            {/*/>*/}
                            <img
                                src={logo_dark}
                                alt="pet"
                                className="w-20 bg-indigo-50 ms-7 sm:ms-3 me-7 border-[1px] border-indigo-600 p-6 rounded-full"
                            />
                            <div>
                                <div className="uppercase text-indigo-700 text-center mt-2 text-3xl font-light">
                                    {animal.name}
                                </div>
                                <div className="text-center uppercase font-normal mt-2 text-lg">
                                    {animal.species}
                                </div>
                                <div className="text-center mt-2 font-light text-md">
                                    {animal.neutered
                                        ? 'Neutered'
                                        : 'Not Neutered'}
                                </div>
                                <div className="px-6 text-center font-light text-md">
                                    Date Of Birth: {animal.dateOfBirth}
                                </div>
                                {/*<div className="text-indigo-800 mb-2 text-center uppercase py-1 px-2 bg-indigo-100 rounded-full">*/}
                                {/*    {animal.name}*/}
                                {/*</div>*/}
                                {/*<div className="uppercase mb-1">*/}
                                {/*    {animal.species}*/}
                                {/*</div>*/}
                                {/*<div className="uppercase mb-1">*/}
                                {/*    {animal.neutered ? 'Neutered' : 'Not Neutered'}*/}
                                {/*</div>*/}
                                {/*<div className="uppercase mb-1">*/}
                                {/*    {animal.dateOfBirth}*/}
                                {/*</div>*/}
                                {/*<div className="uppercase mb-1">*/}
                                {/*    {animal.weightInKilos} kg*/}
                                {/*</div>*/}
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
