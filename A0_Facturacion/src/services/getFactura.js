import { factura } from '../datos/factura';

export const getFactura = () => {

    const total = factura.items
            .map(items => items.precio * items.cantidad)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return {
            ...factura,
            total : total
    }

}