import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Animal } from '../../app/models/animal.ts'
import axios from 'axios'
import { deleteIcon, edit, logo_dark } from '../../assets'
// import {deleteIcon, edit} from "../../assets";
// import {Link} from "react-router-dom";

function PetDetails() {
    const { id } = useParams<{ id: string }>()
    const [animal, setAnimal] = useState<Animal | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
            .get(`http://localhost:5002/api/animals/${id}`)
            .then((response) => setAnimal(response.data))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [id])

    if (loading) return <h3>Loading...</h3>
    if (!animal) return <h3>Pet not found</h3>
    return (
        <div className="font-sans mt-32 flex flex-row justify-center items-center">
            <div className="card w-[450px] mx-auto bg-white shadow-xl hover:shadow">
                <img
                    className="w-32 mx-auto rounded-full -mt-20 bg-indigo-50 p-2 border-[1px] border-indigo-600"
                    src={logo_dark}
                    alt="logo"
                />
                <div className="uppercase text-indigo-700 text-center mt-2 text-3xl font-light">
                    {animal.name}
                </div>
                <div className="text-center uppercase font-normal mt-2 text-lg">
                    {animal.species}
                </div>
                <div className="text-center mt-2 font-light text-md">
                    {animal.neutered ? 'Neutered' : 'Not Neutered'}
                </div>
                <div className="px-6 text-center font-light text-md">
                    Date Of Birth: {animal.dateOfBirth}
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

// <Carousel slides={slides}/>
// </div>
