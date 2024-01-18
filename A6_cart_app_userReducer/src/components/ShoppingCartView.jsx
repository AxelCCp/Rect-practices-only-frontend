import { useEffect, useState } from "react";
import { calculateTotal } from "../services/productService";


export const ShoppingCartView = ({items, handlerDelete}) => {

    const [total, setTotal] = useState(0);

    useEffect(() => {                                                                                           
        setTotal(calculateTotal(items));
    }, [items])


    const onDeleteProduct = (id) => {
        console.log('deleting product');
        handlerDelete(id);
    }

    return (

        <>
        
            <h6>Shopping cart details:</h6>
        
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
                    {items.map(item => (
                        <tr key={item.product.id}>
                            <td>{item.product.name}</td>
                            <td>{item.product.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.quantity * item.product.price}</td>
                            <td>
                                <button className="btn btn-outline-danger" onClick={()=>onDeleteProduct(item.product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>

                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2" className="text-center fw-bold">{total}</td>
                    </tr>
                </tfoot>

            </table>

        </>
    );

}