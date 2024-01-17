import { useEffect, useState } from "react";

export const FormProductsView = ({handler}) => {

    const [formItemsState, setFormItemsState] = useState({ product: '', price: '', brand: '', quantity: ''});

    const {product, brand,  price, quantity} = formItemsState;  

    useEffect(() => {
        console.log('el precio ha sido modificado')                                                 
    }, [price]);  
  
    useEffect(() => {
        console.log('el formItemsState ha sido modificado')
    }, [formItemsState]);                                                                                  
  
                                                                                                  
  
  
    const onInputChange = ({target: {name, value}}) => {                                                                                         //DEL TARGET SE DESESTRUCTURA EL NAME Y EL VALUE
      console.log(name); 
      console.log(value); 
      setFormItemsState({
          ...formItemsState,
          [name] : value                                                                                                                      //[AGREGA EL NOMBRE DEL CAMPO] : Y SU VALOR
      }); 
    }



    const onInvoiceItemsSubmit = (event) => {                                                                                                    

        event.preventDefault();                                                                                                                 
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
    
        

        handler(formItemsState);
                                                                                                                                 
        setFormItemsState({
            product: '',     
            brand: '',                                                                          
            price: '',
            quantity: '',
        });

    }  



    return (

        <>
        
        <form className="w-50" onSubmit={event => onInvoiceItemsSubmit(event)}>

            <input type="text" name="product" placeholder="Producto" value={product} className="form-control m-3" onChange={onInputChange}/>

            <input type="text" name="brand" placeholder="Brand" value={brand} className="form-control m-3" onChange={onInputChange}/>

            <input type="number" name="price" placeholder="Precio" value={price} className="form-control m-3" onChange={event => onInputChange(event)}/>

            <input type="number" name="quantity" placeholder="Cantidad" value={quantity} className="form-control m-3" onChange={event => onInputChange(event)}/>

            <button type="submit" className="btn btn-primary m-3">Add the new item</button>

        </form>
        
        </>

    );

}