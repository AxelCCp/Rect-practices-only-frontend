
export const VistaFactura = ({id, nombre}) => {

    return (
        <>
            <h6>Factura</h6>
            <ul className="list-group">
                <li className="list-group-item">Id: {id}</li>
                <li className="list-group-item">Nombre: {nombre}</li>
            </ul>

        </>

    )
}