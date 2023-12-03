import { stylesInputField } from '../../constants/formInputStyles.ts'

function PetForm() {
    return (
        <div className="font-montserrat card-background justify-end flex-col mb-8 md:flex-row flex w-full bg-white shadow rounded-xl px-4 py-2 md:px-16 md:py-10">
            <form className="w-[80%]">
                <div className="w-full text-center font-montserrat mt-3">
                    <input
                        type="text"
                        placeholder="Enter pet name"
                        className={`peer w-full ${stylesInputField} invalid`}
                        required
                    />
                    <label className={`text-gray-500 text-start ms-10 block`}>
                        Pet name
                    </label>
                </div>
                <div className="w-full text-center font-montserrat mt-3 relative">
                    <input
                        placeholder="Enter pet species"
                        className={`peer w-full ${stylesInputField}`}
                        required
                    />
                    <label className={`text-gray-500 text-start ms-10 block`}>
                        Species
                    </label>
                </div>
                <div className="w-full text-center font-montserrat mt-3 relative">
                    <select className={`peer w-full ${stylesInputField}`}>
                        <option>Select pet's sex</option>
                        <option>male</option>
                        <option>female</option>
                    </select>
                    <label className={`text-gray-500 text-start ms-10 block`}>
                        Sex
                    </label>
                </div>
                <div className="w-full text-center font-montserrat mt-3 relative">
                    <select className={`peer w-full ${stylesInputField}`}>
                        <option>Is pet neutered?</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <label className={`text-gray-500 text-start ms-10 block`}>
                        Neutered
                    </label>
                </div>
                <div className="w-full text-center font-montserrat mt-3 relative">
                    <input
                        placeholder="Pet's date of birth"
                        className={`peer w-full ${stylesInputField}`}
                        required
                    />

                    <label className={`text-gray-500 text-start ms-10 block`}>
                        Date of Birth
                    </label>
                </div>
                <div className="w-full text-center font-montserrat mt-3 relative">
                    <input
                        placeholder="Pet's weight"
                        className={`peer w-full ${stylesInputField}`}
                        required
                    />

                    <label className={`text-gray-500 text-start ms-10 block`}>
                        Weight
                    </label>
                </div>
                <button className="bg-blue-800 px-10 py-2 mt-3 rounded text-white uppercase w-full hover:bg-blue-700 transition-all duration-300">
                    Save
                </button>
            </form>
        </div>
    )
}

export default PetForm
