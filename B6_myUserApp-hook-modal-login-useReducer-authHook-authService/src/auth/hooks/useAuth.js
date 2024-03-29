import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import { loginUser } from "../services/authService";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined
  }
  

export const useAuth = () => {

    const [login, dispatch] = useReducer(loginReducer, initialLogin);  
  
    const handlerLogin = ({username, password}) => {  
        
        const isLogin = loginUser({username, password});    

        if(isLogin){
        
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