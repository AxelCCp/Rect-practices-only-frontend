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

  const[productValue, setProductValue] = useState('');   
  
  const[brandValue, setBrandValue] = useState('');   
    
  const[priceValue, setPriceValue] = useState('');                                    
  
  const[quantityValue, setQuantityValue] = useState('');                              

  const[items, setItems] = useState(initialItems);   
  
  const[counter, setCounter] = useState(4);

  const[total, setTotal] = useState(initialTotal);


  return (
    <>

      <div className="container" style={{backgroundColor:"#F9E79F"}}>

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

            if(productValue.trim().length <= 1) return;
            if(brandValue.trim().length <= 1) return;              
            if(priceValue.trim().length <= 1) return;

            if(isNaN(priceValue.trim())) {
              alert('The price value is not a number');    
              return;
            }

            if(quantityValue.trim().length < 1) return;          
            if(isNaN(quantityValue.trim())) {
                alert('The price value is not a number');  
                return;
            }       

            setItems([...items, {                                                                                   
              id: counter, 
              product: productValue.trim(), 
              brand: brandValue.trim(),                                                                        
              price:parseInt(priceValue, 10), 
              quantity: parseInt(quantityValue, 10)
            }]);

            setProductValue('');
            setBrandValue('');
            setPriceValue('');
            setQuantityValue('');
            setCounter(counter+1);
            setTotal(parseInt(total, 10) + (parseInt(priceValue, 10) * parseInt(quantityValue, 10)));

          }}>            

            <input type="text" name="product" placeholder="Product" value={productValue} className="form-control" onChange={event => {console.log(event.target.value); setProductValue(event.target.value); }}/>

            <input type="text" name="brand" placeholder="Brand" value={brandValue} className="form-control mt-2" onChange={event => {console.log(event.target.value); setBrandValue(event.target.value); }}/>

            <input type="number" name="price" placeholder="Price" value={priceValue} className="form-control mt-2" onChange={event => {console.log(event.target.value); setPriceValue(event.target.value); }}/>
                              
            <input type="number" name="quantity" placeholder="Quantity" value={quantityValue} className="form-control mt-2" onChange={event => {console.log(event.target.value); setQuantityValue(event.target.value); }}/>
        
            <button type="submit" className="btn btn-primary mt-3">Add new item</button>

          </form>

        </div>
        
        <div>...</div>

      </div>
      


    </>
  )
}

export default InvoiceAppForm
