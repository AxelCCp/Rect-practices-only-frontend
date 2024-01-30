import { useReducer, useState } from "react";
import { userReducer } from "../reducer/userReducer";
import Swal from "sweetalert2";

const usersInit = [
    {
    id: 1,
    username: 'Giru',
    password: '12345',
    email: 'giru@giru.jp'
    },
    {
    id: 2,
    username: 'Puar',
    password: '12345',
    email: 'puar@zzz.jp'
    }
];

const formInit = 
{
    id: 0,
    username: '',
    password: '',
    email: ''
}


export const useUser = () => {

    const[users, dispatch] = useReducer(userReducer, usersInit);

    const[userSelected, setUserSelected] = useState(formInit); 

    const[visibleForm, setVisibleForm] = useState(false);
  

    const handlerUser = (user) => {     
  
        console.log('handlerUser - user: ', user);
        
        let type;

        if(user.id === 0){
            type = 'addUser';
        }else{
            type = 'updateUser';
        }

        dispatch({                                                                                  
            type: type,                                                                      
            payload: user,                                                           
        })

        Swal.fire(
            (user.id === 0) ? 'User Created' : 'User updated',
            (user.id === 0) ? 'The user has been created successfully!' : 'The user has been updated successfully!',
            'success'
        );
  
        setVisibleForm(false);
    }
    

    const handlerUserSelectedForm = (user) => {
        setVisibleForm(true);
        setUserSelected({...user});                                                                 
    }


    const handlerRemoveUser = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Be careful the user will be eliminated!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete!'
          }).then((result) => {
            if (result.isConfirmed) {

                dispatch({
                    type: 'removeUser',
                    payload: id,
                });

              Swal.fire(
                'User deleted!',
                'The user has been successfully deleted!',
                'success'
              )
            }
          })
    }


    const handlerOpenForm = () => {
        setVisibleForm(true);
    }

    const handlerCloseForm = () => {
        setVisibleForm(false);
        setUserSelected(formInit);        
    }

    return {
        users, 
        userSelected,
        formInit,
        visibleForm,
        handlerUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
    }

}