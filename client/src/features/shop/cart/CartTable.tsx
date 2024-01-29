import { CartItem } from '../../../app/models/cart.ts'
import { deleteIcon, logo_dark, minus, plus } from '../../../assets'

interface Props {
    items: CartItem[]
    isCart?: boolean
}

function CartTable({ items, isCart = true }: Props) {
    return (
        <table className="w-full overflow-scroll rounded">
            <thead className="bg-gray-50 border-b-2 border-gray-200 text-indigo-800 uppercase">
                <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-center whitespace-nowrap">
                        Product
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-center whitespace-nowrap">
                        Price
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-center whitespace-nowrap">
                        Quantity
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-start whitespace-nowrap">
                        Subtotal
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-start whitespace-nowrap">
                        &nbsp;
                    </th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
                {items.map((cartItem) => (
                    <tr
                        className="even:bg-white odd:bg-purple-50"
                        key={cartItem.productId}
                    >
                        <td className="px-12 text-sm text-gray-700 p-2 whitespace-nowrap flex items-center justify-start">
                            {!cartItem.pictureUrl && (
                                <img
                                    src={logo_dark}
                                    alt={cartItem.name}
                                    className="w-14 h-14 bg-purple-50 border-[1px] border-indigo-600 p-2 rounded-full"
                                />
                            )}
                            {cartItem.pictureUrl && (
                                <img
                                    src={cartItem.pictureUrl}
                                    alt={cartItem.name}
                                    className="w-14 h-14 bg-purple-50 border-[1px] border-indigo-600 object-cover rounded-full"
                                />
                            )}
                            <span className="ms-5">{cartItem.name}</span>
                        </td>
                        <td className="text-gray-700 p-2 whitespace-nowrap text-center">
                            {cartItem.price}
                        </td>
                        <td className="text-gray-700 p-2 whitespace-nowrap text-center">
                            <span className="flex justify-center">
                                {isCart && (
                                    <img
                                        src={plus}
                                        alt="add an item"
                                        className="w-6 h-6 bg-green-100 hover:bg-green-300 p-2 border-purple-600 rounded me-3 hover:cursor-pointer"
                                    />
                                )}
                                <span className="font-bold">
                                    {cartItem.quantity}
                                </span>
                                {isCart && (
                                    <img
                                        src={minus}
                                        alt="remove an item"
                                        className="w-6 h-6 bg-red-100 hover:bg-red-300 p-2 border-purple-600 rounded ms-3 hover:cursor-pointer"
                                    />
                                )}
                            </span>
                        </td>
                        <td className="text-gray-700 p-2 whitespace-nowrap">
                            subtotal
                        </td>
                        {isCart && (
                            <td className="text-gray-700 p-2 whitespace-nowrap hover:cursor-pointer">
                                <img
                                    src={deleteIcon}
                                    alt="delete"
                                    className="w-10 h-10 bg-red-100 hover:bg-red-300 p-3 border-purple-600 rounded-full"
                                />
                            </td>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CartTable
