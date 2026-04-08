import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../context";

function ProductDetails(){

    const {productDetails, setProductDetails } = useContext(ShoppingCartContext)
    const navigate = useNavigate()

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

     function handleGoToCart(){
        navigate('/cart')
     }

    if(!productDetails) return <h3 className="text-center font-bold text-lg">Loading product details please wait.....</h3>

    return (
        <div className="flex flex-col md:flex-row py-5 my-5">
           <div className="w-full md:w-1/2">
             <div>
                <img className="w-150 my-5 shadow-xl rounded-lg p-5 mx-auto" src={productDetails?.thumbnail} alt={productDetails?.title} />
                {/* <h1>{productDetails?.title}</h1> */}
            </div>
            <div>
                {/* <img className="w-30 m-5 shadow-xl rounded-lg p-5" src={productDetails?.thumbnail} alt={productDetails?.title} /> */}
                <div className="flex flex-wrap justify-center">
                    {
                    productDetails.images.length > 0 ?
                    productDetails?.images.map(img =>
                         <img className="w-32 m-2 shadow-xl rounded-lg p-2" src={img} alt={productDetails?.title} />)
                    : null
                }
                </div>
                
            </div>
           </div>
              <div className="w-full md:w-1/2 p-5 text-center md:text-left">
                 <h1 className="text-4xl font-bold text-center md:text-left">{productDetails?.title}</h1>
                 <p className="my-5 text-xl font-bold text-green-800 text-center md:text-left">${productDetails?.price}</p>
                 <button className="border rounded px-5 py-3 cursor-pointer hover:bg-gray-900 hover:text-white"
                 onClick={()=>handleGoToCart()}>Add to cart</button>
            </div>
        </div>
    )
}
export default ProductDetails;