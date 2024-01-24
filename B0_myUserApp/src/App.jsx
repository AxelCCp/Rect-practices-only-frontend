import { useReducer, useState } from 'react';
import { UserForm } from './components/UserForm';
import { UsersList } from './components/UsersList';
import { userReducer } from './reducer/userReducer';

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


export const App = () => {

  const[users, dispatch] = useReducer(userReducer, usersInit);

  const[userSelected, setUserSelected] = useState(formInit); 

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

  }


  const handlerUserSelectedForm = (user) => {
    setUserSelected({...user});                                                                 
  }


  const handlerRemoveUser = (id) => {
    dispatch({
        type: 'removeUser',
        payload: id,
    })
  }


  return (

    <>

      <div className="container my-4">

      <h4>User registry application - useState(), useEffect(), useReducer()</h4>

      <div className="row">

          <div className="col">
              <UserForm  handlerUser={handlerUser} formInit={formInit}  userSelected={userSelected} />
          </div>
      
          <div className="col">
              <UsersList users={users}  handlerRemoveUser={handlerRemoveUser} handlerUserSelectedForm={handlerUserSelectedForm} />                                                   
          </div>
          
      </div>

      </div>

    </>

  )

}

export default App
