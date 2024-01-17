
export const TableItemsView = ({items, handlerDeleteitem}) => {

    return (

        <>          
            <table className="table">

                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total item</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map(({id, product, brand, price, quantity}) => {       

                        return (

                            <tr key={id}>                                       
                                <td>{product}</td>
                                <td>{brand}</td>
                                <td>{price}</td>
                                <td>{quantity}</td>
                                <td>{parseFloat(price) * parseFloat(quantity)}</td>
                                <td><button className='btn btn-danger' onClick={() => handlerDeleteitem(id)}>eliminar</button></td>
                            </tr>
                            
                        )
                    })}
                </tbody>

            </table>
        </>        

    )
} 