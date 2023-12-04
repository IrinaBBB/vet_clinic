import Carousel from '../../app/components/Carousel.tsx'
import {pets, slides} from '../../app/constants'
import {deleteIcon, edit} from "../../assets";
import {Link} from "react-router-dom";

function PetDetails() {
    return (
        <div
            className="font-montserrat card-background flex-col mb-8 md:flex-row flex w-full bg-white shadow rounded-xl px-4 py-2 md:px-16 md:py-10">
            <div className="flex-auto flex flex-col py-8 md:py-16 items-center justify-between">
                <div
                    className="text-white text-[40px] bg-gradient-to-r from-indigo-700 to-blue-700 mb-2 text-center uppercase font-bold py-1 px-10 bg-blue-200 polygon">
                    {pets[0].name}
                </div>
                <div className="uppercase mb-1 text-lg font-semibold ">
                    <span className="text-blue-800 me-3">species:</span>
                    <span className="text-gray-700">{pets[0].species}</span>
                </div>
                <div className="uppercase mb-1 text-lg font-semibold">
                    <span className="text-blue-800 me-3">sex:</span>
                    <span className="text-gray-700">{pets[0].sex}</span>
                </div>
                <div className="uppercase mb-1 text-lg font-semibold">
                    <span className="text-blue-800 me-3">neutered:</span>
                    <span className="text-gray-700">
                        {pets[0].neutered ? 'yes' : 'no'}
                    </span>
                </div>
                <div className="uppercase mb-1 font-semibold text-lg">
                    <span className="text-blue-800 me-3">date of birth:</span>
                    <span className="text-gray-700">{pets[0].dateOfBirth}</span>
                </div>
                <div className="uppercase mb-1 font-semibold text-lg">
                    <span className="text-blue-800 me-3">weight:</span>
                    <span className="text-gray-700">{pets[0].weight} kg</span>
                </div>
                <div className="mt-2">
                    <button
                        className="bg-green-400 hover:scale-105 hover:bg-green-500 transition-all duration-300 text-white px-6 py-1 rounded-xl me-4">
                        <Link to="/pet-form" className="flex items-center">
                            <img src={edit} alt="delete" className="w-4 me-1"/>
                            <span>Edit</span>
                        </Link>
                    </button>
                    <button
                        className="bg-red-400 hover:scale-105 hover:bg-red-500 transition-all duration-300 text-white px-6 py-1 rounded-xl me-6">
                        <div className="flex items-center">
                            <img src={deleteIcon} alt="delete" className="w-4 me-1"/>
                            <span>Delete</span>
                        </div>
                    </button>
                </div>
            </div>
            <div className="flex items-center">
                <div className="rounded-xl overflow-hidden shadow-xl mx-auto md:m-3 w-[300px]">
                    <Carousel slides={slides}/>
                </div>
            </div>
        </div>
    )
}

export default PetDetails

// <div className="max-w-[400px] rounded-xl overflow-hidden shadow-xl">
//     <Carousel slides={slides} />
// </div>
