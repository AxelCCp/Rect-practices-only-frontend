import { VistaFactura } from "./components/VistaFactura";
import { DatosComprador } from "./components/DatosComprador";
import { DatosEmpresa } from "./components/DatosEmpresa";
import { VistaTablaItems } from "./components/VistaTablaItems";
import { VistaTotal } from "./components/VistaTotal";

import { getFactura } from './services/getFactura';

import "./style/colors.css";

export const FactApp = () => {

    const {total, id, nombre, cliente, compania, items} = getFactura();

    return(
        <>
            <div className="container" >

                <div className="card my-3">

                    <div className="card-header divLabel">
                        <h3>Aplicación de facturación</h3>   
                    </div>

                    <div className="card-body divLabel2">
                        <VistaFactura id={id} nombre={nombre} />
                    </div>

                    <div className="card-body divLabel2">
                        <DatosComprador cliente={cliente}/>
                    </div> 

                    <div className="card-body divLabel2">
                        <DatosEmpresa compania={compania}/>
                    </div>

                </div>

                <div className="card my-3">

                    <div>
                            <VistaTablaItems items={items}/>    
                    </div> 

                </div>

                <div className="card my-3">

                    <div>
                        <VistaTotal total={total}/>
                    </div>

                </div>

            </div>

           
        </>
        
    );

}