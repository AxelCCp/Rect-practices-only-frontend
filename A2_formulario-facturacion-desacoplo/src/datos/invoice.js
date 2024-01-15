export const invoice = {
    
    id: 10,
    name: 'Componentes PC',
    date: '08-01-2024',
    
    client: {
        name: 'MR.',
        lastname: 'Popo',
        address: {
            country: 'Japan',
            city: 'zzzzz',
            street: 'alskdja',
            number: 7
        }
    },

    company: {
        name: 'New egg',
        category: 'Technology',
        fiscalNumber: 1234567,
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
            brand: 'Asus',
            product: 'Monitor asus',
            price: 300,
            quantity: 1,
        }
    ]
    
}