
export const TableItemsView = ({items}) => {

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
                                <td>{parseInt(price) * parseInt(quantity)}</td>
                            </tr>
                            
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}