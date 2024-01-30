import { Route, Routes } from "react-router-dom";
import { useAuthentication } from "./auth/hooks/useAuthentication";


export const App = () => {

  const { login, handlerLogin, handlerLogout } = useAuthentication();

  return (
    <>
    
    <Routes>
            {
            
            login.isAuth 
            
                ? (                                                                                                  
                
                    <Route path='/*' element={ <UserRoutes login={login} handlerLogout={handlerLogout} /> } />                          
                  
                ) : 

                <>

                    <Route path='/login' element={ <LoginPage handlerLogin={handlerLogin} /> } />

                    <Route path='/*' element={ <Navigate to="/login" /> } />

                </>
                
            }
            
        </Routes>
    
    </>
  )

}

export default App
