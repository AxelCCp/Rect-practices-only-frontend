
export const ClientView = ({client}) => {

    const { name: clientname, lastname, address:{country, city, street, number}} = client;

    return(

        <>
            <ul className="list-group">
                <li className="list-group-item">Name: {clientname} {lastname}</li>
                <li className="list-group-item">Country: {country} / {city}</li>
                <li className="list-group-item">Address: {street} {number}</li>
            </ul>
        </>

    );

}   