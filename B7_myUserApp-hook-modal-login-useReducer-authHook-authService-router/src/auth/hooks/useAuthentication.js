import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authServices";
import Swal from "sweetalert2";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {                                     
    isAuth: false,
    user: undefined
}

export const useAuthentication = () => {

    const [login, dispatch] = useReducer(loginReducer, initialLogin);                                        

    const navigate = useNavigate();

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

            navigate('/users');                                                                              

        } else {

          Swal.fire('Error de login', 'Username o password incorrectos', 'error');
        
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
        handlerLogout
        
    }


}