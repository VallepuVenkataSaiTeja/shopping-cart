import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { useNavigate } from "react-router-dom";
import CarTile from "../../carTile"

function CartList(){
    const {cartItems} = useContext(ShoppingCartContext);
    const navigate = useNavigate();
    return (
        <div className="flex flex-col lg:flex-row p-5 gap-5">
            <div className="w-full lg:w-9/12">
             {
                cartItems?.length ? 
                cartItems.map(singleCartItem => <CarTile key={singleCartItem.id} singleCartItem={singleCartItem} />)
                : <h1>Cart is empty</h1>
             }
            </div>

            <div className="w-full lg:w-3/12 bg-gray-300 p-5">
                <h2 className="text-lg pb-3">Order Summary</h2>
                <hr className="py-3" />
                <ul>
                    <p>Total</p>
                    ${
                       cartItems.reduce((acc, curr) => acc+curr.totalPrice ,0 ).toFixed(2)
                    }
                </ul>
                <div className="flex flex-col sm:flex-row gap-2 pt-5">
                    <button disabled={cartItems?.length === 0} className="bg-black text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-500 disabled:opacity-30 disabled:cursor-not-allowed">Checkout</button>
                    <button onClick={()=>navigate('/')}
                     className="bg-black text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-500">Continue Shopping</button>
                </div>
            </div>
        </div>
    )
}
export default CartList;