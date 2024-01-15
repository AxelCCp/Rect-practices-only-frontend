
export const CompanyView = ({company}) => {

    const { name: companyName, category, fiscalNumber } = company;

    return(

        <>
            <ul className="list-group">
                <li className="list-group-item">Company: {companyName}</li>
                <li className="list-group-item">Category: {category}</li>
                <li className="list-group-item">Tax id number: {fiscalNumber}</li>
            </ul>
        </>

    );

}   