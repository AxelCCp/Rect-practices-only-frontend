import { NavLink } from "react-router-dom";

export const Navbar = () => {

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#ECF0F1"}}>
                <div style={{marginLeft:"10px"}}>
                    <a className="navbar-brand" href="#">My React App</a>
                </div>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink className={ 'nav-link' } to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={ 'nav-link' } to="/catalog">Catalog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={ 'nav-link' } to="/mycart">My cart</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )

}