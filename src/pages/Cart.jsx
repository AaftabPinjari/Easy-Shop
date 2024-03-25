import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../redux/slice/cartSlice"
import { MdRemoveShoppingCart } from "react-icons/md"
import { useState } from "react"
import { useEffect } from "react"

function Cart() {
    const [totalPrice, setTotalPrice] = useState(0)
    const { cart } = useSelector(state => state.cart)

    useEffect(() => {
        setTotalPrice(cart.reduce((acc, curr) => acc + curr.price, 0))
    }, [cart])

    // console.log(totalPrice)



    const dispatch = useDispatch()

    // console.log(cart)

    return (
        <div className="flex flex-col min-h-96  justify-between pb-4">
            <div>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold my-4">Your Shopping Cart</h1>
            </div>

            <div>
                {cart && cart.length > 0 ?

                    <div>
                        {cart.map(item => (
                            <div key={item.id}
                                className="flex w-full  pl-2 gap-3  py-2 border-b-gray-500 border-[0.5px] "
                            >
                                <div className="w-1/4">
                                    <img
                                        className="h-20 w-16 rounded-lg"
                                        src={item.image} />
                                </div>

                                <div
                                    className="w-3/4 flex justify-between pr-3"
                                >
                                    <div className="flex w-1/2 flex-col gap-3">
                                        <h1 className="text-md font-semibold truncate">{item.title}</h1>
                                        <h1 className="text-sm text-gray-400">{item.category}</h1>
                                    </div>
                                    <div className="flex w-1/2 flex-col items-center gap-3">
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

                    </div> : <div className="text-center text-xl">Its very Empty Here</div>}

            </div>
            <div className=" my-3 flex w-full justify-between">
                <h2><span className="font-semibold">Total Price</span> : {totalPrice} $</h2>
                <h2><span className="font-semibold">Total Quantity</span>: {cart.length}</h2>
            </div>
            <button disabled={!cart.length} className="w-1/2 self-center rounded-lg border-2 bg-black text-white px-8 py-2">Checkout</button>


        </div>
    )
}

export default Cart