
export const itemsReducer = (state=[], action) => {

    switch (action.type) {

        case 'AddProduct':
            console.log('AddProduct')
            return [
                ...state,                                                                                                    
                {
                    product : action.payload,                                                                                
                    quantity: 1,
                }
            ];

        case 'UpdateQuantityProduct':
            console.log('UpdateQuantityProduct')
            return state.map((i) => {
                if(i.product.id === action.payload.id){                                                                     
                    return {
                        ...i,
                        quantity : i.quantity + 1,
                    };
                }
                return i;
            });

        case 'DeleteProduct':
            console.log('DeleteProduct')
            return [                                                                                                       
            ...state.filter((i) => i.product.id !== action.payload)                                                    
        ];

        default:
            console.log('default')
            return state;

    }
}