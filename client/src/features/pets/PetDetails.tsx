import { deleteIcon, edit, logo_dark } from '../../assets'
import { useParams } from 'react-router-dom'
import {
    useAppDispatch,
    useAppSelector,
} from '../../app/store/configureStore.ts'
import { fetchPetAsync, petSelectors } from './petSlice.ts'
import { useEffect } from 'react'
import LoadingComponent from '../../app/components/LoadingComponent.tsx'
import NotFound from '../../app/errors/NotFound.tsx'

function PetDetails() {
    const { id } = useParams<{ id: string }>()
    const dispatch = useAppDispatch()
    const pet = useAppSelector((state) =>
        petSelectors.selectById(state, parseInt(id!)),
    )
    const { status: petStatus } = useAppSelector((state) => state.pets)

    useEffect(() => {
        if (!pet && id) dispatch(fetchPetAsync(parseInt(id)))
    }, [id, pet, dispatch])

    if (petStatus.includes('pending'))
        return <LoadingComponent message="Loading product..." dark={true} />

    if (!pet) return <NotFound />

    return (
        <div className="font-sans mt-32 flex flex-row justify-center items-center">
            <div className="card w-[450px] mx-auto bg-white shadow-xl">
                <img
                    className="w-32 mx-auto shadow-xl rounded-full -mt-20 bg-indigo-50 p-6 border-[1px] border-indigo-600"
                    src={logo_dark}
                    alt="logo"
                />
                <div className="uppercase text-indigo-700 text-center mt-2 text-3xl font-light">
                    {pet.name}
                </div>
                <div className="text-center font-normal text-lg mt-2">
                    <span className="text-blue-600">Species: </span>
                    <span>{pet.species}</span>
                </div>
                <div className="text-center font-normal text-lg mt-2">
                    <span className="text-blue-600">Date of Birth: </span>
                    <span>{pet.dateOfBirth.toString()}</span>
                </div>
                <div className="text-center font-normal text-lg mt-2">
                    <span className="text-blue-600">Neutered: </span>
                    <span>{pet.neutered ? 'Yes' : 'No'}</span>
                </div>
                <div className="text-center font-normal text-lg mt-2">
                    <span className="text-blue-600">Weight: </span>
                    <span>{pet.weightInKilos}kg</span>
                </div>
                <hr className="mt-8" />
                <div className="flex p-4">
                    <div className="w-1/2 flex justify-center items-center hover:cursor-pointer">
                        <span className="mr-1.5">
                            <img src={edit} className="w-4" alt="edit" />
                        </span>
                        <span>Edit</span>
                    </div>
                    <div className="w-0 border border-gray-300"></div>
                    <div className="w-1/2 flex justify-center items-center hover:cursor-pointer">
                        <span className="mr-0.5">
                            <img
                                src={deleteIcon}
                                className="w-5"
                                alt="delete"
                            />
                        </span>
                        <span>Delete</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PetDetails
