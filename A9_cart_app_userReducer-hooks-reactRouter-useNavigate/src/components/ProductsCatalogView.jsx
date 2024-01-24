import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../services/productService";


export const ProductsCatalogView = ({handlerProduct}) => {

    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    useEffect(
        () => { 
            setProducts(getProducts());
        }, []
    )

    const addToMyCart = (product) => {
        console.log(product);
        handlerProduct(product);
        navigate('/mycart');
    } 

    return (

        <>
        
            <h6>Products catalog: </h6>
            
            <div className="row">

                {
                    products.map( ({id, name, description, price}) => (

                        <div className="col-4 my-2" key={id}>
                            
                            <div className="card bg-light">
                                <div className="card-body">
                                    <h6 className="card-title">{name}</h6>
                                    <p className="card-text">{description}</p>
                                    <p className="card-text">US$ {price}</p>
                                    <button className="btn btn-outline-secondary" onClick={ () => addToMyCart({id, name, description, price}) }>Add to cart</button>
                                </div>
                            </div>

                        </div>

                    ))   
                }

            </div>


        </>
    );
}