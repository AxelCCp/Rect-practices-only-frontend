import { useEffect, useState } from "react";
import { calculateTotal } from "../service/productService";

export const Cartview = ({items, handlerDelete}) => {

    const [total, setTotal] = useState(0);  

    useEffect(() => {                                                                              
        setTotal(calculateTotal(items));                                                        //cuando cambien los items, se debe recalcular el total, por eso se usa [items]. 
        sessionStorage.setItem('cart', JSON.stringify(items))                                   //se guarda el obj item como string en la session del navegador. Luego los items se deben inicializar en el cart app.   
    }, [items])

    const onDeleteProduct = (id) => {
        console.log('deleting product');
        handlerDelete(id);
    }

    return (

        <>
        
            <div className="my-4 w-50">

                <h6>My cart:</h6>

                <table className="table">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>

                        { items.map(item => (

                            <tr key={item.product.id}>
                                <td>{item.product.name}</td>
                                <td>{item.product.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.quantity * item.product.price}</td>
                                <td><button className="btn btn-danger" onClick={ () => onDeleteProduct(item.product.id)}> Delete </button></td>
                            </tr>
                        ))}
                    </tbody>

                    <tfoot>
                        <tr>
                            <td colSpan="3" className="text-end fw-bold">Total:</td>
                            <td colSpan="2" className="text-center fw-bold">{total}</td>
                        </tr>
                    </tfoot>
                    
                </table>

            </div>
        
        </>

    );

}