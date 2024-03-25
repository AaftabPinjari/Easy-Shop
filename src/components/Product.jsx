/* eslint-disable react/prop-types */
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slice/cartSlice";
import { MdRemoveShoppingCart } from "react-icons/md";



function Product({ product }) {

    const { cart } = useSelector(state => state.cart)

    const dispatch = useDispatch()

    // console.log(product)
    return (

        <div
            className=" h-[300px] w-[300px] py-3
        flex flex-col items-center justify-between 
        font-semibold  
        "
        >
            <div>
                <img
                    className="h-[200px] w-[150px]  rounded-lg"
                    src={product.image} />
            </div>
            <div className="flex justify-between w-full px-1 items-center">
                <h2 className="text-lg truncate w-2/3">{product.title}</h2>
                <h3>{product.price} $</h3>
            </div>
            <div className="flex items-center w-full justify-between px-2">
                <h3 className="text-gray-400 text-sm">{product.category.toUpperCase()}</h3>
                <div className="bg-black rounded-full p-2">
                    {
                        cart && cart.length &&
                            cart.findIndex(item => item.id === product.id) >= 0 ?
                            <MdRemoveShoppingCart
                                onClick={() => dispatch(removeFromCart(product.id))}
                                fill="white"
                                size={20}
                            /> :

                            <MdAddShoppingCart
                                onClick={() => dispatch(addToCart(product))}
                                fill="white"
                                size={20}
                            />
                    }
                </div>
            </div>
        </div>

    )
}

export default Product