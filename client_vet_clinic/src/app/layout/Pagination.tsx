import { arrow } from '../../assets'

function Pagination() {
    const paginationNumbers = [1, 2, 3, 4, 5, 6, 7]

    return (
        <>
            <ul className="flex justify-end items-center mt-4 me-3 last:me-0">
                <li className="hover:scale-125 transition-all duration-200">
                    <img
                        src={arrow}
                        alt="pagination left"
                        className="w-10 cursor-pointer"
                    />
                </li>
                <li>
                    <ul className="flex justify-center items-center">
                        {paginationNumbers.map((number) => (
                            <li className="me-3 last:me-0 relative p-4 bg-blue-800 rounded-full cursor-pointer hover:scale-125 transition-all duration-200">
                                <span className="font-montserrat text-white font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                    {number}
                                </span>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className="hover:scale-125 transition-all duration-200">
                    <img
                        src={arrow}
                        className="w-10 rotate-180 cursor-pointer"
                        alt="pagination right"
                    />
                </li>
            </ul>
        </>
    )
}

export default Pagination
