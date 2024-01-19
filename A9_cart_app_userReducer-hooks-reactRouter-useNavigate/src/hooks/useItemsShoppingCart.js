import { useEffect, useReducer } from "react";
import { itemsReducer } from '../reducer/itemsReducer';

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || []; 

export const useItemsShoppingCart = () => {

    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));                                       
    }, [cartItems])

    const handlerProduct = (product) => {

        const hasItem = cartItems.find((i) => i.product.id === product.id);
        
        if(hasItem){
        dispatch({
            type : 'UpdateQuantityProduct',
            payload : product
        });

        } else {
        dispatch({
            type : 'AddProduct',
            payload : product
        });
        }

    }


    const handlerDeleteProduct = (id) => {

        dispatch({
        type : 'DeleteProduct',
        payload : id
    });

    }

    return {handlerProduct, handlerDeleteProduct, cartItems}

}