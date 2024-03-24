import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Cart from './pages/Cart'
import Error from './pages/Error'
import Product from './pages/Product'
import Category from './pages/Categories'

function App() {


  return (
    <>
      <Navbar />
      <div className='px-4  md:px-8'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/category/:id' element={<Category />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </div>
    </>
  )
}

export default App
