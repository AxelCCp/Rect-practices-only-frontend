import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './InvoiceAppForm.css'

import { InvoiceView } from './components/InvoiceView'
import { ClientView } from './components/ClientView'
import { CompanyView } from './components/CompanyView'
import { TableItemsView } from './components/TableItemsView' 
import { TotalView } from './components/TotalView' 

import { getInvoice } from './services/getInvoice'
import { useState } from 'react'


export const InvoiceAppForm = () => {

  const {total:initialTotal, id, name, date, client, company, items:initialItems} = getInvoice();

  const [formInputsState, setFormInputsState] = useState({product: '', brand: '', price: '', quantity: ''});

  const {product, brand, price, quantity} = formInputsState;

  const[items, setItems] = useState(initialItems);   
  
  const[counter, setCounter] = useState(4);

  const[total, setTotal] = useState(initialTotal);

  const cambioElInput = ({target: {name, value}}) => {
    
    console.log(name);
    
    console.log(value);

    setFormInputsState({...formInputsState, [name] : value});

  }


  return (
    <>

      <div className="container" style={{backgroundColor:"#ABEBC6"}}>

        <div>...</div>
        
        <div className="card my-3">

          <div className='row w-25 p-3'> 

            <div className="col" >
              <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
            </div>
            
            <div className="col" >
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>

            <div className="col">
              <h3>InvoiceApp</h3>
            </div>

          </div>

        </div>


        <div className="card-body w-25 ">
          <h6>Invoice</h6>
          <InvoiceView id={id} name={name} date={date}/>
        </div>


        <div className="card-body">

          <div className="row my-3">

            <div className="col">
                <h6>Customer details</h6>
                <ClientView client={client}/>
            </div>

            <div className="col"> 
                <h6>Company information</h6>
                <CompanyView company={company}/>
            </div>

          </div>
          
        </div>

        <div className="card-body">
          <h6>Items description</h6>
          <TableItemsView title="Invoice items:" items={items}/>
        </div>


        <div className="card-body">
          <TotalView total= {total}/>
        </div>


        <div className="card-body mt-3">

          <h6>New items form</h6>

          <form className="w-50" onSubmit={ event  => {

            event.preventDefault();  

            if(product.trim().length <= 1) return;
            if(brand.trim().length <= 1) return;              
            if(price.trim().length <= 1) return;

            if(isNaN(price.trim())) {
              alert('The price value is not a number');    
              return;
            }

            if(quantity.trim().length < 1) return;          
            if(isNaN(quantity.trim())) {
                alert('The price value is not a number');  
                return;
            }       

            setItems([...items, {                                                                                   
              id: counter, 
              product: product.trim(), 
              brand: brand.trim(),                                                                        
              price:parseInt(price, 10), 
              quantity: parseInt(quantity, 10)
            }]);

            setFormInputsState({product: '', brand: '', price: '', quantity: ''});
            setCounter(counter+1);
            setTotal(parseInt(total, 10) + (parseInt(price, 10) * parseInt(quantity, 10)));

          }}>            

            <input type="text" name="product" placeholder="product" value={product} className="form-control" onChange={cambioElInput}/>

            <input type="text" name="brand" placeholder="brand" value={brand} className="form-control mt-2" onChange={cambioElInput}/>

            <input type="number" name="price" placeholder="price" value={price} className="form-control mt-2" onChange={cambioElInput}/>
                              
            <input type="number" name="quantity" placeholder="quantity" value={quantity} className="form-control mt-2" onChange={cambioElInput}/>
        
            <button type="submit" className="btn btn-primary mt-3">Add new item</button>

          </form>

        </div>
        
        <div>...</div>

      </div>
      


    </>
  )
}

export default InvoiceAppForm
