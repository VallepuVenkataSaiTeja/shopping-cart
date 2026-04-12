// create context
// provide the state to context
// wrap context in root component
// consume the context using useContext

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext = createContext();


function ShoppingCartProvider({children}){
    const [loading, setLoading] = useState(true);
    const [listOfProducts, setListOfProducts] = useState([]);
    const [productDetails, setProductDetails] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    async function fetchListOfProducts(){
        const apiResponse = await fetch('https://dummyjson.com/products');
        const result = await apiResponse.json();
        // console.log(result)

        if(result && result?.products) {
        setListOfProducts(result?.products)
        setLoading(false)
        }
    }

    useEffect(()=>{
        fetchListOfProducts();
        setCartItems(JSON.parse(localStorage.getItem('cartItems')) || [])
    },[])

    function handleAddToCart(getProductDetails){
         console.log(getProductDetails)

         let copyExtCartItems = [...cartItems]
         const findIndexOfCurrentItem = copyExtCartItems.findIndex(cartItem => cartItem.id === getProductDetails.id)

         console.log(findIndexOfCurrentItem)

         if(findIndexOfCurrentItem === -1){
            copyExtCartItems.push({
                ...getProductDetails,
                quantity: 1,
                totalPrice: getProductDetails.price
            })
            navigate('cart')
            
         } else {
               copyExtCartItems[findIndexOfCurrentItem] = {
                  ...copyExtCartItems[findIndexOfCurrentItem],
                  quantity: copyExtCartItems[findIndexOfCurrentItem].quantity + 1,
                  totalPrice: (copyExtCartItems[findIndexOfCurrentItem].quantity + 1) * copyExtCartItems[findIndexOfCurrentItem].price,

               }
         }
         console.log(copyExtCartItems , "copyExtCartItems");
         setCartItems(copyExtCartItems);
         localStorage.setItem('cartItems', JSON.stringify(copyExtCartItems))
         
    }

    function handleRemoveFromCart(getProductDetails, isFullyRemoveFromCart){
        let copyExtCartItems = [...cartItems];
        const findIndexOfCurrentItem = copyExtCartItems.findIndex(item => item.id === getProductDetails.id)

        if(isFullyRemoveFromCart){
            copyExtCartItems.splice(findIndexOfCurrentItem,1)
        } else {
            copyExtCartItems[findIndexOfCurrentItem] = {
                ...copyExtCartItems[findIndexOfCurrentItem],
                quantity :copyExtCartItems[findIndexOfCurrentItem].quantity -1,
                totalPrice: (copyExtCartItems[findIndexOfCurrentItem].quantity -1) * copyExtCartItems[findIndexOfCurrentItem].price,
            }
        }
        setCartItems(copyExtCartItems);
        localStorage.setItem('cartItems', JSON.stringify(copyExtCartItems))

    }

    // console.log(listOfProducts)

    return (
        <ShoppingCartContext.Provider value={{listOfProducts, loading , setLoading , productDetails , setProductDetails, handleAddToCart, cartItems, handleRemoveFromCart}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
export default ShoppingCartProvider;