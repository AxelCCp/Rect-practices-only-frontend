import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { getInvoice, calculateTotal } from "./service/getInvoice"

import { TableItemsView } from './components/TableItemsView'
import { CompanyView } from './components/CompanyView'
import { ClientView } from './components/ClientView'
import { InvoiceView } from './components/InvoiceView'
import { TotalView } from './components/TotalView'
import { FormProductsView } from './components/FormProductsView'


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

  const[activeForm, setActiveForm] = useState(false);

  const [total, setTotal] = useState(0);

  const[counter, setCounter] = useState(4);

  const [invoice, setInvoice] = useState(invoiceInitial); 

  const[items, setItems] = useState([]);  

  const {id, name, client, company} = invoice;



  useEffect(() => {                                                                               
    const data = getInvoice();
    console.log(invoice);
    setInvoice(data);                                                                           
    setItems(data.items);                                                                       
  }, []);                                                                                         


                                                                                                    
  useEffect(() => {
      console.log('el counter ha sido modificado')                                                 
  }, [counter]);  



  useEffect(() => {   
    setTotal(calculateTotal(items));                                            
  }, [items]);  



  const handlerAddItems = ({product, brand, price, quantity}) => {      

    setItems([...items, {              

        id: counter, 
        product: product.trim(),  
        brand: brand.trim(),                                                                                                        
        price: parseInt(price, 10), 
        quantity: parseInt(quantity, 10)
    }]);          

    setCounter(counter+1);
  }



  const handlerDeleteitem = (id) => {
      setItems(items.filter(item => item.id !== id))
  }


  
  const onActiveForm = () => {
      setActiveForm(!activeForm);
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
            <TableItemsView title="Datos de la factura:" items={items} handlerDeleteitem={id => handlerDeleteitem(id)} style={{backgroundColor: "#707B7C"}}/>

            
            <TotalView total= {total} style={{backgroundColor: "#707B7C"}}/>

            <button className="btn btn-secondary mt-3" onClick={onActiveForm}>{ !activeForm ? 'Add item' : 'Hide form' }</button>

            { !activeForm ? '' : <FormProductsView handler={(newItem) => handlerAddItems(newItem)}/> } 
              
              
          </div>

        </div>

        <div>...</div>

      </div>

    </>

  );
  
}


export default App;


