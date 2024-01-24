
import { Navbar } from './components/navbar';
import { useItemsShoppingCart } from './hooks/useItemsShoppingCart'
import { MyCartRoutes } from './routes/MyCartRoutes'


export const App = () => {

  const {cartItems, handlerProduct, handlerDeleteProduct} = useItemsShoppingCart();
  
  return (

    <>

      <div className='container my-4'>

        <Navbar/>

          <div className="mt-4">
            <h4>Shopping cart app - with: useEffect() and useReducer() + Hooks directory + Routes + Routes directory + useNavigate()</h4>
          </div>

          <MyCartRoutes  handlerProduct = {product => handlerProduct(product)}  handlerDeleteProduct={id => handlerDeleteProduct(id)}  cartItems = {cartItems}  />

      </div>

    
    </>

  );

}

export default App
