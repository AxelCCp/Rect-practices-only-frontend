export const factura = {
    id: 10,
    nombre: 'Componentes PC',
    cliente: {
        nombre: 'Pepe',
        apellido: 'Doe',
        direccion: {
            pais: 'USA',
            ciudad: 'Los Ángeles',
            calle: 'One Street',
            numero: 12
        }
    },
        compania: {
            nombre: 'New egg',
            numeroFiscal: 1234567,
        },
        items: [
            {
                id: 1,
                producto: 'CPU intel i7',
                precio: 499,
                cantidad: 5,
            },
            {
                id: 2,
                producto: 'Corsair Keyboard mecanico',
                precio: 150,
                cantidad: 4,
            },
            {
                id: 3,
                producto: 'Monitor asus',
                precio: 300,
                cantidad: 1,
            }
        ]
    
}