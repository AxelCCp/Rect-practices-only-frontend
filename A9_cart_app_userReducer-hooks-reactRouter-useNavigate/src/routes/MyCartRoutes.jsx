import { Navigate, Route, Routes } from "react-router-dom";
import { ProductsCatalogView } from "../components/ProductsCatalogView"
import { ShoppingCartView } from "../components/ShoppingCartView"



export const MyCartRoutes = ({handlerProduct, handlerDeleteProduct, cartItems}) => {

    return(
        <>
        
        <Routes>

            <Route path="/" element={ <Navigate to={'/catalog'} /> } />  

            <Route path="catalog" element = {<ProductsCatalogView  handlerProduct = { product => handlerProduct(product) }/>} />

            <Route path="mycart" element = {<ShoppingCartView items={cartItems} handlerDelete={id => handlerDeleteProduct(id)} />} />

        </Routes>

        </>
    );
}