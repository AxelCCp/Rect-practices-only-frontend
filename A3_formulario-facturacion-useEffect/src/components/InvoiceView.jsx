
export const InvoiceView = ({id, name}) => {

    return(

        <>
            <ul className="list-group">
                <li className="list-group-item">id: {id}</li>
                <li className="list-group-item">Description: {name}</li>
            </ul>
        </>

    );
}