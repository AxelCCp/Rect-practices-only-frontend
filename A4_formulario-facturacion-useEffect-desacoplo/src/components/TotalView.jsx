
export const TotalView = ({total}) => {

    return (

        <>
            <ul className="list-group">
                <li className="list-group-item text-end">
                    <h4>Total invoice: US${total}</h4>
                </li>
            </ul>
        </>

    );
}