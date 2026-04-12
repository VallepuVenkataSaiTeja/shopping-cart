import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import CartList from './pages/cartList'
import ProductDetails from './pages/productDetails'
import ProductList from './pages/productList'
import NotFound from './not-found'

function App() {

  return (
    <Fragment>
      {/* <h1 className="!text-red-500 text-center m-4 text-xl">Shopping Cart</h1> */}
      <Routes>
         <Route path='cart' element={<CartList />} />
         <Route path='product-details/:id' element={<ProductDetails />} />
         <Route path='/' element={<ProductList />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </Fragment>
  )
}

export default App
