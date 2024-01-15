
import "../style/colors.css";

export const VistaTablaItems = ({items}) => {

    return (
        
        <>
        

        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total item</th>
                </tr>
            </thead>

            <tbody>
                {items.map(

                    ({id, producto, precio, cantidad}) => {

                        return(
                            <>
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{producto}</td>
                                    <td>{precio}</td>
                                    <td>{cantidad}</td>
                                    <td>{parseInt(precio) * parseInt(cantidad)}</td>
                                </tr>
                            </>
                        )
                    }

                )}
            </tbody>

        </table>


        </>

    )

}