import { useSelector } from "react-redux"
import { useParams, useNavigate } from 'react-router-dom'
import Product from "../components/Product"
// import { useEffect } from "react"


function Category() {

    const { id } = useParams()
    // const navigate = useNavigate()
    console.log(id)



    const { products } = useSelector(state => state.products.products)



    return (
        <div className="min-h-screen min-w-screen
        flex flex-col items-center justify-center">
            {products && products.length > 0 ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
                    {products.map((product) => (

                        product.category === id ? <Product key={product.id} product={product} /> : null

                    ))}
                </div>
                : <h1>No products found</h1>
            }
        </div>
    )
}

export default Category