export const DatosEmpresa = ({compania}) => {

    const {nombre, numeroFiscal} = compania;

    return (
        <>
        
            <h6>Datos de empresa</h6>

            <ul className="list-group">
                <li className="list-group-item">Nombre: {nombre}</li>
                <li className="list-group-item">Numero fiscal: {numeroFiscal}</li>
               
            </ul>    
        
        </>
    )


}