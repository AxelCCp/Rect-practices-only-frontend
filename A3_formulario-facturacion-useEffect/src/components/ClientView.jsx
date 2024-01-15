

export const ClientView = ({client}) => {

    const {name: nameClient, lastname, address:{country, city, street, number}} = client;

    return(
        
        <>
            <ul className="list-group">
                <li className="list-group-item">{nameClient} {lastname}</li>
                <li className="list-group-item">{country} / {city}</li>
                <li className="list-group-item">{street} {number}</li>
            </ul>
        </>

    );
}