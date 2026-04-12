import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../context";

function ProductTile({singleProductItem}){
    const {handleAddToCart,cartItems} = useContext(ShoppingCartContext)

    const navigate = useNavigate();

    function handleNavigateToProductDetailsPage(getCurrentProductId){
         console.log(getCurrentProductId);
         navigate('/product-details/'+getCurrentProductId)
    }
    return (
        <div className="border p-5">
            <img className="m-auto hover:scale-105 transition-transform duration-300"
            src={singleProductItem?.thumbnail} 
            alt={singleProductItem?.title} />
            <div className="flex justify-between ">
                <div className="text-lleft font-semibold text-gray-500">{singleProductItem?.title}</div>
                <div className="text-right text-green-700">${singleProductItem?.price}</div>
            </div>
            <button onClick={()=> handleNavigateToProductDetailsPage(singleProductItem?.id)}
             className="my-3 text-white bg-black px-5 py-3 rounded cursor-pointer hover:bg-gray-700">View Details</button>
            <button className="border rounded px-5 py-3 cursor-pointer hover:bg-gray-900 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
             onClick={()=>handleAddToCart(singleProductItem)}
             disabled={cartItems.findIndex(item => item.id === singleProductItem.id) > -1} >Add to cart</button>
            </div>
    )
}
export default ProductTile;