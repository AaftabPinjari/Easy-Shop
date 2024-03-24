import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../redux/slice/cartSlice"
import { MdRemoveShoppingCart } from "react-icons/md"

function Cart() {

    const dispatch = useDispatch()

    const { cart } = useSelector(state => state.cart)
    console.log(cart)

    return (
        <div>
            <h1 className="text-3xl font-bold my-4">Your Shopping Cart</h1>

            <div>
                {cart && cart.length > 0 ?

                    <div>
                        {cart.map(item => (
                            <div key={item.id}
                                className="flex w-full gap-3  py-2 border-b-gray-500 border-[0.5px] "
                            >
                                <div className="w-1/4">
                                    <img
                                        className="h-20 w-24 rounded-lg"
                                        src={item.thumbnail} />
                                </div>

                                <div
                                    className="w-3/4 flex justify-between pr-3"
                                >
                                    <div className="flex flex-col gap-3">
                                        <h1 className="text-md font-semibold text-truncate">{item.title}</h1>
                                        <h1 className="text-sm text-gray-400">{item.category}</h1>
                                    </div>
                                    <div className="flex flex-col items-center gap-3">
                                        <h2>Price : {item.price} $</h2>
                                        <div className="bg-black rounded-full p-2 w-fit">
                                            <MdRemoveShoppingCart
                                                onClick={() => dispatch(removeFromCart(item.id))}
                                                fill="white"
                                                size={20}
                                            /></div>
                                    </div>
                                </div>

                            </div>
                        ))}

                    </div> : <>Its very Empty Here</>}
            </div>


        </div>
    )
}

export default Cart