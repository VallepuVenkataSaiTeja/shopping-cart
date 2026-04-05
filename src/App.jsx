import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import CartList from './pages/cartList'
import ProductDetails from './pages/productDetails'
import ProductList from './pages/productList'

function App() {

  return (
    <Fragment>
      <h1 className="!text-red-500 text-center m-4 text-xl">Shopping Cart</h1>
      <Routes>
         <Route path='cart' element={<CartList />} />
         <Route path='product-details/:id' element={<ProductDetails />} />
         <Route path='product-list' element={<ProductList />} />
      </Routes>
    </Fragment>
  )
}

export default App
