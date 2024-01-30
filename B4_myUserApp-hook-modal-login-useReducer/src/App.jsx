import { useReducer, useState } from 'react';

import { UserForm } from './components/UserForm';
import { UsersList } from './components/UsersList';
import { UserModalForm } from './components/UserModalForm';

import { useUser } from './hooks/useUser';
import { UserPages } from './pages/UserPages';
import { LoginView} from './auth/pages/LoginView';
import { Navbar } from './components/layout/Navbar';
import { loginReducer } from './auth/reducers/loginReducer';


const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
  isAuth: false,
  user: undefined
}

export const App = () => {

  const [login, dispatch] = useReducer(loginReducer, initialLogin);  
  
  const handlerLogin = ({username, password}) => {                                                         

    if(username === 'admin' && password === '12345'){
      
        const user = {username: 'admin'}

        dispatch({                                                                                       
            type: 'login',
            payload: user,
        })

        sessionStorage.setItem('login', JSON.stringify({    
            isAuth: true,
            user: user
        }));

    } else {

      Swal.fire('Login error', 'Invalid username and/or password', 'error');
    
    }

  }


  const handlerLogout = () => {
    dispatch({
        type: 'logout',
    });
    sessionStorage.removeItem('login');
}

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
