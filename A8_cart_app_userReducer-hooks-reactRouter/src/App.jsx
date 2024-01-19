import { Navigate, Route, Routes } from 'react-router-dom';
import { ProductsCatalogView } from './components/ProductsCatalogView'
import { ShoppingCartView } from './components/ShoppingCartView'
import { Navbar } from './components/navbar';
import { useItemsShoppingCart } from './hooks/useItemsShoppingCart';


export const App = () => {

    const {cartItems, handlerProduct, handlerDeleteProduct} = useItemsShoppingCart();

  return (

    <>

      <div className='container my-4'>

        <Navbar/>

        <div className="mt-4">
          <h4>Shopping cart app - with: useEffect() and useReducer() + Hooks directory + Routes</h4>
        </div>

        <Routes>

          <Route path="/" element={ <Navigate to={'/catalog'} /> } />  

          <Route path="catalog" element = {<ProductsCatalogView  handlerProduct = { product => handlerProduct(product) }/>} />
        
          <Route path="mycart" element = {<ShoppingCartView items={cartItems} handlerDelete={id => handlerDeleteProduct(id)} />} />
        
        </Routes>

      </div>

    
    </>

  );

}

export default App
