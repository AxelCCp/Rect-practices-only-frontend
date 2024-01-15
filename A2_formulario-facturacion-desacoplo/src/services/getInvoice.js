import { invoice } from '../datos/invoice';

export const getInvoice = () => {

    const total = invoice.items
                        .map(items => items.price * items.quantity)
                        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return {...invoice, total: total}
}