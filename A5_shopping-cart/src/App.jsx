import { useState } from 'react';
import { Cartview } from './components/Cartview';
import { CatalogView } from './components/CatalogView';

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];  

export const App = () => {

  const [cartItems, setCartItems] = useState(initialCartItems);  

  const handlerAddProductCart = (product) => {

    console.log('handlerAddProductCart: ', product.name); 
    const hasItem = cartItems.find((i) => i.product.id === product.id);

    if(hasItem){

      setCartItems(
        cartItems.map((i) => {
            if(i.product.id === product.id){
                i.quantity = i.quantity + 1;
            }
            return i;
        })
      )

    } else {

      setCartItems([
        ...cartItems,                                                                             
        {
            product,                                                                                
            quantity: 1,
        }
      ]);
      
    }

  }


  const handlerDeleteProductCart = (id) => {

    setCartItems([
      ...cartItems.filter((i) => i.product.id !== id)
    ])

  }


  return (

    <>
    
    <div className="container" style={{backgroundColor:"#CCD1D1"}}>

    <div>...</div>

      <h6>Shopping cart app</h6>
      <CatalogView handler={product => handlerAddProductCart(product)}/>


      <Cartview items={cartItems} handlerDelete={id => handlerDeleteProductCart(id)}/>

      <div>...</div>

    </div>
    
    </>    

  );

}

export default App
