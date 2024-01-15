

export const CompanyView = ({company}) => {

    const {name, fiscalNumber, category}  = company;

    return (
        <>
            <ul className="list-group">
                <li className="list-group-item">{name}</li>
                <li className="list-group-item">{fiscalNumber}</li>
                <li className="list-group-item">{category}</li>
            </ul>
        </>
    );

}