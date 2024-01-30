import { UserPages } from './pages/UserPages';
import { LoginView} from './auth/pages/LoginView';
import { Navbar } from './components/layout/Navbar';
import { useAuth } from './auth/hooks/useAuth';



export const App = () => {

  const { login, handlerLogin, handlerLogout } = useAuth();


  return (

    <>
      {/*
      <UserPages/>
      <LoginView/>
      */}

      {login.isAuth  ? 
            
            (                                                                                                   //se ponen () : para crear un fragmento, ya q sino da error.
            <>
                <Navbar login={ login } handlerLogout={handlerLogout} />                                        { /*se le pasa el login como una props*/}
                <UserPages/> 
            </>
            )
            
            : 
            
            <LoginView handlerLogin={handlerLogin} />}
    </>

  )

}

export default App
