import { deleteIcon, edit, logo_dark } from '../../assets'

function PetDetails() {
    const pet = {name: 'Lasie', species: 'dog', }

    // if (petStatus === 'pending')
    //     return <LoadingComponent dark={true} message="Loading pet ..." />

    // if (!pet) return <NotFound />

    return (
        <div className="font-sans mt-32 flex flex-row justify-center items-center">
            <div className="card w-[450px] mx-auto bg-white shadow-xl hover:shadow">
                <img
                    className="w-32 mx-auto rounded-full -mt-20 bg-indigo-50 p-6 border-[1px] border-indigo-600"
                    src={logo_dark}
                    alt="logo"
                />
                <div className="uppercase text-indigo-700 text-center mt-2 text-3xl font-light">
                    {pet.name}
                </div>
                <div className="text-center uppercase font-normal mt-2 text-lg">
                    {pet.species}
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

