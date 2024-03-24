import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../redux/slice/productSlice"
import { useEffect } from "react"
import Product from "../components/Product"


function Home() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const { products } = useSelector(state => state.products.products)

    // console.log(products)
    return (
        <div className="min-h-screen min-w-screen
        flex flex-col items-center justify-center">
            {products && products.length > 0 ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
                    {products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
                : <h1>No products found</h1>
            }
        </div>
    )
}

export default Home