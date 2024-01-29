import { deleteIcon, logo_dark, minus, plus } from '../../../assets'
import {
    useAppDispatch,
    useAppSelector,
} from '../../../app/store/configureStore.ts'
import { addCartItemAsync, removeCartItemAsync } from './cartSlice.ts'
import CartSummary from './CartSummary.tsx'

function CartPage() {
    const { cart, status } = useAppSelector((state) => state.cart)
    const dispatch = useAppDispatch()

    if (!cart || cart.items.length === 0) return <h1>Your basket is empty</h1>

    return (
        <>
            <div className="overflow-auto shadow block rounded font-montserrat">
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
                        {cart?.items.map((cartItem) => (
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
                                    <span className="ms-5">
                                        {cartItem.name}
                                    </span>
                                </td>
                                <td className="text-gray-700 p-2 whitespace-nowrap text-center">
                                    {cartItem.price}kr
                                </td>
                                <td className="text-gray-700 p-2 whitespace-nowrap text-center">
                                    <span className="flex justify-center">
                                        {status ===
                                        'pendingRemoveItem' +
                                            cartItem.productId +
                                            'remove' ? (
                                            <button
                                                className="w-6 h-6 flex justify-center items-center bg-red-100 me-3 border-purple-600 rounded"
                                                disabled={true}
                                            >
                                                <div className="h-3 w-3 border-t-transparent border-solid animate-spin rounded-full border-gray-400/50 border-2"></div>
                                            </button>
                                        ) : (
                                            <img
                                                src={minus}
                                                alt="delete"
                                                className="w-6 h-6 me-3 bg-red-100 hover:bg-red-300 p-2 border-purple-600 rounded  hover:cursor-pointer"
                                                onClick={() =>
                                                    dispatch(
                                                        removeCartItemAsync({
                                                            productId:
                                                                cartItem.productId,
                                                            quantity: 1,
                                                            name: 'remove',
                                                        }),
                                                    )
                                                }
                                            />
                                        )}
                                        <span className="font-bold">
                                            {cartItem.quantity}
                                        </span>
                                        {status ===
                                        'pendingAddItem' +
                                            cartItem.productId ? (
                                            <button
                                                className="w-6 h-6 flex justify-center items-center bg-green-100 ms-3 border-purple-600 rounded"
                                                disabled={true}
                                            >
                                                <div className="h-3 w-3 border-t-transparent border-solid animate-spin rounded-full border-gray-400/50 border-2"></div>
                                            </button>
                                        ) : (
                                            <img
                                                onClick={() =>
                                                    dispatch(
                                                        addCartItemAsync({
                                                            productId:
                                                                cartItem.productId,
                                                        }),
                                                    )
                                                }
                                                src={plus}
                                                alt="delete"
                                                className="w-6 h-6 bg-green-100 hover:bg-green-300 ms-3 p-2 border-purple-600 rounded hover:cursor-pointer"
                                            />
                                        )}
                                    </span>
                                </td>
                                <td className="text-gray-700 p-2 whitespace-nowrap">

                                    {(
                                        cartItem.price * cartItem.quantity
                                    ).toFixed(2)}kr
                                </td>
                                <td className="text-gray-700 p-2 whitespace-nowrap hover:cursor-pointer">
                                    {status ===
                                    'pendingRemoveItem' +
                                        cartItem.productId +
                                        'delete' ? (
                                        <button
                                            className="w-10 h-10 bg-red-100 flex items-center justify-center border-purple-600 rounded-full"
                                            disabled={true}
                                        >
                                            <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-gray-400/50 border-2"></div>
                                        </button>
                                    ) : (
                                        <img
                                            onClick={() =>
                                                dispatch(
                                                    removeCartItemAsync({
                                                        productId:
                                                            cartItem.productId,
                                                        quantity:
                                                            cartItem.quantity,
                                                        name: 'delete',
                                                    }),
                                                )
                                            }
                                            src={deleteIcon}
                                            alt="delete"
                                            className="w-10 h-10 bg-red-100 hover:bg-red-300 p-3 border-purple-600 rounded-full"
                                        />
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="grid grid-cols-2">
                <div></div>
                <CartSummary />
            </div>
        </>
    )
}

export default CartPage
