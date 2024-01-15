export const invoice = {

    id: 10,
    name: 'PC components',

    client: {
        name: 'Majin',
        lastname: 'boo',
        address: {
            country: 'Japan',
            city: 'aksjdlkadsj',
            street: 'kjS aksjd',
            number: 123,
        }
    },

    company: {
        name: 'New egg',
        fiscalNumber: 1234567,
        category: 'Technology',
    },
        
    items: [
        {
            id: 1,
            product: 'CPU intel i7',
            brand: 'Intel',
            price: 499,
            quantity: 5,
        },
        {
            id: 2,
            product: 'Corsair Keyboard mecanico',
            brand: 'Corsair',
            price: 150,
            quantity: 1,
        },
        {
            id: 3,
            product: 'Monitor asus',
            brand: 'Asus',
            price: 300,
            quantity: 1,
        }
    ]
    
}