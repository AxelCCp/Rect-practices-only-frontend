export const Navbar = ({login, handlerLogout}) => {

    return (

        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">

                <div className="container-fluid">

                    <a className="navbar-brand" href="#">Users registry app with login and logout</a>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    
                        <span className="navbar-toggler-icon"></span>
                    
                    </button>
                    
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    
                        <span className="nav-item nav-link text-primary mx-3">
                        
                            { login.user?.username }                                                    {/* si el usuario llegara a venir null,  se pone el "?", para q diga undefined en vez de dar el error. */}

                        </span>

                        <button className="btn btn-outline-success" onClick={handlerLogout}>

                            Logout

                        </button>

                    </div>

                </div>

            </nav>
        
        </>

    )
} 