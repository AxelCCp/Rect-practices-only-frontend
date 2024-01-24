import { useReducer, useState } from 'react';
import { UserForm } from './components/UserForm';
import { UsersList } from './components/UsersList';
import { userReducer } from './reducer/userReducer';
import { useUser } from './hooks/useUser';


export const App = () => {

  const {
    users, 
    userSelected,
    formInit,
    visibleForm,
    handlerUser,
    handlerRemoveUser,
    handlerUserSelectedForm,  
    handlerOpenForm,
    handlerCloseForm,  
} = useUser(); 


  return (

    <>

      <div className="container my-4">

      <h4>User registry application - [useState(), useEffect(), useReducer(), hooks, sweetAlert]</h4>

      <div className="row">

        {!visibleForm || 
          <div className="col">
              <UserForm  handlerUser={handlerUser} formInit={formInit}  userSelected={userSelected} handlerCloseForm={handlerCloseForm} />
          </div>
        }
      
        <div className="col">

            {visibleForm || <button className="btn btn-outline-secondary my-5" onClick={handlerOpenForm}>Create a new user</button>}

            {users.length === 0 ?  
            
              <div className="alert alert-warning">There are no users in the system!</div>  : 
              
              <UsersList users={users}  handlerRemoveUser={handlerRemoveUser} handlerUserSelectedForm={handlerUserSelectedForm} /> 
            }

        </div>
          
      </div>

      </div>

    </>

  )

}

export default App
