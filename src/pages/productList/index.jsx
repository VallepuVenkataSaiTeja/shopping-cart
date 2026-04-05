import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import ProductTile from "../../productTile";

function ProductList(){
    const {listOfProducts, loading} = useContext(ShoppingCartContext);
    console.log(listOfProducts);
    if(loading) return <h3>Loading data! please wait...</h3>
    return (
        <section>
            <div className="p-20 text-center">
                <div>
                    <h1 className="font-bold text-5xl">Our Featured Products</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 p-5 mt-20">
                    {
                        listOfProducts && listOfProducts.length > 0 ? 
                        listOfProducts.map(singleProductItem => <ProductTile singleProductItem={singleProductItem} key={singleProductItem?.id}  />) :
                        <h3>Np products found</h3>
                    }
                </div>
            </div>
        </section>
    )
}
export default ProductList;