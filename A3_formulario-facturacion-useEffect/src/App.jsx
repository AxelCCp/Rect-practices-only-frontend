import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { getInvoice, calculateTotal } from "./service/getInvoice"

import { TableItemsView } from './components/TableItemsView'
import { CompanyView } from './components/CompanyView'
import { ClientView } from './components/ClientView'
import { InvoiceView } from './components/InvoiceView'
import { TotalView } from './components/TotalView'


const invoiceInitial = {   

  id: 0,
  name: '',

  client: {
      name: '',
      lastname: '',
      address: {
          country: '',
          city: '',
          street: '',
          number: 0
      }
  },

  company: {
      name: '',
      fiscalNumber: 0,
      category: '',
  },
  
  items: []

}


export const App = () => {

  const [total, setTotal] = useState(0);

  const[counter, setCounter] = useState(4);

  const [invoice, setInvoice] = useState(invoiceInitial); 

  const[items, setItems] = useState([]);  

  const [formItemsState, setFormItemsState] = useState({ product: '', price: '', brand: '', quantity: ''});

  const {id, name, client, company} = invoice;

  const {product, brand,  price, quantity} = formItemsState;



  useEffect(() => {                                                                               
    const data = getInvoice();
    console.log(invoice);
    setInvoice(data);                                                                           
    setItems(data.items);                                                                       
  }, []);                                                                                         

  
  useEffect(() => {
      console.log('el precio ha sido modificado')                                                 
  }, [price]);  

  useEffect(() => {
      console.log('el formItemsState ha sido modificado')
  }, [formItemsState]);                                                                                  

                                                                                                  
  useEffect(() => {
      console.log('el counter ha sido modificado')                                                 
  }, [counter]);  


  useEffect(() => {
      console.log('los items han sido modificados')                                                 
  }, [items]);  
  

  useEffect(() => {   
    setTotal(calculateTotal(items));                                            
  }, [items]);  


  const onInputChange = ({target: {name, value}}) => {                                                                                         //DEL TARGET SE DESESTRUCTURA EL NAME Y EL VALUE
    console.log(name); 
    console.log(value); 
    setFormItemsState({
        ...formItemsState,
        [name] : value                                                                                                                      //[AGREGA EL NOMBRE DEL CAMPO] : Y SU VALOR
    }); 
  }


  const onInvoiceItemsSubmit = (event) => {                                                                                                    //SE PASA EL EVENT SIN DESESTRUCTURAR

    event.preventDefault();                                                                                                                 //PREVIENE LA PERDIDA DE INFO SI ES Q SE RECARGA LA PAGINA. 
    
    if(product.trim().length <= 1) return;

    if(brand.trim().length <= 1) return;

    if(price.trim().length <= 1) return;

    if(isNaN(price.trim())) {
        alert('The value is not a number!');    
        return;
    }

    if(quantity.trim().length < 1) return;

    if(isNaN(quantity.trim())) {
        alert('The value is not a number!');  
        return;
    }       

    setItems([...items, {                                                                                                                    //AGREGA UN NUEVO ELEMENTO  AL ARRAY DE ELEMENTOS.
        id: counter, 
        product: product.trim(),
        brand: brand.trim(),                                                                                                          //SE QUITAN LOS ESPACIOS EN BLANCO A LA IZQ Y DER. 
        price: parseInt(price, 10), 
        quantity: parseInt(quantity, 10)
    }]);
                                                                                                                                            //SE LIMPIAN LOS DATOS DEL FOMULARIO DESPUES DE AGREGAR EL PRODUCTO.
    setFormItemsState({
        product: '',     
        brand: '',                                                                          
        price: '',
        quantity: '',
    });



}  

  return(

    <>

      <div className="container" style={{backgroundColor: "#E5E8E8"}}>

        <div>...</div>

        <div className="card my-3">


          <div className="card-header" style={{backgroundColor: "#D6EAF8"}}>
              <h4>Facturation system with the hook useEffect</h4>
          </div>


          <div className="card-body" style={{backgroundColor: "#D6EAF8"}}>
          
            <InvoiceView id={id} name={name}/>

            <div className="row my-3">

                <div className="col">
                    <h6>Client information:</h6>
                    <ClientView client={client}/>
                </div>

                <div className="col">     
                    <h6>Company information:</h6>
                    <CompanyView company={company}/>
                </div>

            </div>


            <h6>Invoice items:</h6>
            <TableItemsView title="Datos de la factura:" items={items} style={{backgroundColor: "#707B7C"}}/>

            
            <TotalView total= {total} style={{backgroundColor: "#707B7C"}}/>

              
            <form className="w-50" onSubmit={event => onInvoiceItemsSubmit(event)}>

                <input type="text" name="product" placeholder="Producto" value={product} className="form-control m-3" onChange={onInputChange}/>

                <input type="text" name="brand" placeholder="Brand" value={brand} className="form-control m-3" onChange={onInputChange}/>

                <input type="number" name="price" placeholder="Precio" value={price} className="form-control m-3" onChange={event => onInputChange(event)}/>

                <input type="number" name="quantity" placeholder="Cantidad" value={quantity} className="form-control m-3" onChange={event => onInputChange(event)}/>
            
                <button type="submit" className="btn btn-primary m-3">Add the new item</button>
            
            </form>
              
              
          </div>

        </div>

        <div>...</div>

      </div>

    </>

  );
  
}


export default App;


