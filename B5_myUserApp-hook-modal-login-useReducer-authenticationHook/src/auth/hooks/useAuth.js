import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined
  }
  

export const useAuth = () => {

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

    return {
        login,
        handlerLogin,
        handlerLogout,
    }
}