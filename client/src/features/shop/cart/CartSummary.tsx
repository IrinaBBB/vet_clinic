import { useAppSelector } from '../../../app/store/configureStore.ts'

function CartSummary() {
    const { cart } = useAppSelector((state) => state.cart)
    const subtotal =
        cart?.items.reduce(
            (sum, item) => sum + item.quantity * item.price,
            0,
        ) ?? 0
    const deliveryFee = subtotal > 10000 ? 0 : 500

    return (
        <div className="overflow-hidden rounded block font-montserrat mt-2">
            <table className="w-full shadow">
                <tbody className="divide-y divide-gray-300">
                    <tr className="bg-white">
                        <td className="text-gray-700 p-2 whitespace-nowrap">
                            <span className="ms-2">Subtotal</span>
                        </td>
                        <td className="text-gray-700 p-2 whitespace-nowrap">
                            {subtotal}kr
                        </td>
                    </tr>
                    <tr className="bg-white">
                        <td className="text-gray-700 p-2 whitespace-nowrap">
                            <span className="ms-2">Delivery Fee*</span>
                        </td>
                        <td className="text-gray-700 p-2 whitespace-nowrap">
                            {deliveryFee}kr
                        </td>
                    </tr>
                    <tr className="bg-purple-50">
                        <td className="text-gray-700 font-bold p-3 whitespace-nowrap">
                            <span className="ms-2">Total</span>
                        </td>
                        <td className="text-gray-700 p-2 whitespace-nowrap">
                            {subtotal + deliveryFee}kr
                        </td>
                    </tr>
                    <tr className="bg-white">
                        <td className="text-gray-700 p-2 text-sm italic whitespace-nowrap">
                            *Orders over $100 qualify for free delivery
                        </td>
                        <td className="text-gray-700 p-2 whitespace-nowrap"></td>
                    </tr>
                </tbody>
            </table>
            <button className="mt-2 py-2 shadow rounded uppercase text-white bg-purple-600/60 hover:bg-purple-600/90 w-full">
                Checkout
            </button>
        </div>
    )
}

export default CartSummary
