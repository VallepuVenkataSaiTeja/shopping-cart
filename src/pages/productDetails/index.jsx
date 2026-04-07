import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../context";

function ProductDetails(){

    const {productDetails, setProductDetails } = useContext(ShoppingCartContext)

    const {id} = useParams();
    console.log(id)

    async function fetchProductDetails(){
         console.log(id)
        const apiResponse = await fetch('https://dummyjson.com/products/'+id)
        const result = await apiResponse.json()

        // console.log(result)
      
        if(result) {
            setProductDetails(result);
        }
    }

    useEffect(()=>{
        setProductDetails(null)
      fetchProductDetails()
    },[id])

     console.log(productDetails)

    if(!productDetails) return <h3>Loading product details please wait.....</h3>

    return (
        <div>
            <div>
                <img src={productDetails?.thumbnail} alt={productDetails?.title} />
                <h1>{productDetails?.title}</h1>
            </div>
        </div>
    )
}
export default ProductDetails;