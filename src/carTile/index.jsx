import { Fragment, useContext } from "react";
import { ShoppingCartContext } from "../context";

function CarTile({singleCartItem}){
    const {handleRemoveFromCart, handleAddToCart} = useContext(ShoppingCartContext)
    console.log(singleCartItem)
    return (
       <Fragment>
         <div className="flex flex-col sm:flex-row bg-gray-100 py-5 mx-0 px-5 gap-4" >
           <img className="w-32 mx-4" src={singleCartItem?.thumbnail} alt={singleCartItem.title} />
           <div className="w-full">
             <div className="flex justify-between">
                <p className="text-2xl mb-3">{singleCartItem?.title}</p>
                <div>
                    <p className="text-lg font-bold text-green-800 pt-1 mr-5">${singleCartItem?.totalPrice}</p>
                    <p className="text-sm font-bold text-obrown-800 pt-1 mr-5">Quantity: {singleCartItem?.quantity}</p>
                    <button onClick={()=>handleAddToCart(singleCartItem)} className="bg-black text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-500 mr-2">+</button>
                    <button onClick={()=> handleRemoveFromCart(singleCartItem,false)} disabled={singleCartItem?.quantity === 1} className="bg-black text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-500 mr- disabled:opacity-30">-</button>
                </div>

             </div>
             <button onClick={()=>handleRemoveFromCart(singleCartItem, true)} className="bg-black text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-500">Remove</button>
           </div>
        </div>
        <hr />
       </Fragment>
    )
}
export default CarTile;