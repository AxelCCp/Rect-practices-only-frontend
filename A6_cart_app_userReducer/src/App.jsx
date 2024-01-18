import { useEffect, useReducer, useState } from 'react'

import { ProductsCatalogView } from './components/ProductsCatalogView'
import { ShoppingCartView } from './components/ShoppingCartView'
import { itemsReducer } from "./reducer/itemsReducer";

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || []; 

export const App = () => {

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


  return (

    <>

      <div className='container my-4'>

        <h4>Shopping cart app - with: useEffect() and useReducer()</h4>

        <div className="mt-4">
          <ProductsCatalogView  handlerProduct = { product => handlerProduct(product) }/>
        </div>

        <div className="mt-4">
          <ShoppingCartView items={cartItems} handlerDelete={id => handlerDeleteProduct(id)} />
        </div>

      </div>

    
    </>

  );

}

export default App
