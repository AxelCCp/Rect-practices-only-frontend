
export const DatosComprador = ({cliente}) => {

    const {nombre, apellido, direccion : {pais, ciudad, calle, numero}} = cliente;

    return (
        <>
        
            <h6>Datos del comprador</h6>

            <ul className="list-group">
                <li className="list-group-item">Nombre: {nombre}</li>
                <li className="list-group-item">Apellido: {apellido}</li>
                <li className="list-group-item">Dirección: {calle} #{numero}, {ciudad}, {pais}.</li>
            </ul>    
        
        </>
    )

}