import { FaShoppingCart } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom"
import { fetchCategories } from "../redux/slice/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";




function Navbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { categories } = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])
    // console.log(categories)

    // console.log(category)
    return (
        <nav
            className=" w-full py-4 bg-opacity-90 bg-white sticky top-0
            flex-col items-center
            "
        >
            <div className="flex justify-between items-center md:justify-between">
                <h1 className="font-serif font-bold text-lg md:text-xl lg:text-2xl">
                    <NavLink to="/">
                        Easy Shop
                    </NavLink>
                </h1>
                <ul className="flex items-center gap-4 ">
                    <li
                        className="text-md md:text-lg font-semibold"
                    ><NavLink to='/'>All</NavLink></li>

                    <li className="text-sm font-semibold">
                        <select
                            onChange={(e) => {
                                navigate(`/category/${e.target.value}`)
                            }}

                            className="rounded p-1 border-[1px] border-gray-500"
                        >
                            <option >Categories</option>
                            {categories.map((cat, idx) => (
                                <option
                                    key={idx}
                                    value={cat}
                                >
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </li>


                    <li><NavLink to='/cart'><FaShoppingCart size={20} /></NavLink></li>
                </ul>
            </div>
            <div>
                <form className="flex justify-center mt-2 ">
                    <input
                        className="outline-none w-1/2 rounded py-1 px-3 border-[1px] border-gray-400"
                        placeholder="Search Products"
                    />
                </form>
            </div>

        </nav>
    )
}

export default Navbar