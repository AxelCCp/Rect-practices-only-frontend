
import { useEffect, useState } from 'react'
import { getProducts } from '../service/productService';

export const CatalogView = ({handler}) => {

    const [products, setProducts] = useState([]);

    useEffect(
        () => {
        setProducts(getProducts);
        }, []  //con esto, se ejecuta el useEffect solo cuando carga el componente.
    )

    const onAddProduct = (product) => {                                       
        console.log(product);
        handler(product);                                                       
    }

    return (

        <>
        
        <div className="row">

            { products.map(({id, name, description, price}) => (

                <div className="col-4 my-2" key={id}>

                    <div className="card" style={{backgroundColor:"#7FB3D5"}}>
                    
                        <div className="card-body">
                            <p className="card-title">{name}</p>
                            <p className="card-text">{description}</p>
                            <p className="card-text">$ {price}</p>      
                            <button className="btn btn-primary" onClick={() => onAddProduct({id, name, description, price})}>Add to cart</button>  
                        </div>

                    </div>

                </div>

            ))}
                
        </div>
        
        </>

    );

}