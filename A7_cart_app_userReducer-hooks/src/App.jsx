
import { ProductsCatalogView } from './components/ProductsCatalogView'
import { ShoppingCartView } from './components/ShoppingCartView'
import { useItemsShoppingCart } from './hooks/useItemsShoppingCart';


export const App = () => {

    const {cartItems, handlerProduct, handlerDeleteProduct} = useItemsShoppingCart();

  return (

    <>

      <div className='container my-4'>

        <h4>Shopping cart app - with: useEffect() and useReducer() + Hooks directory</h4>

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
