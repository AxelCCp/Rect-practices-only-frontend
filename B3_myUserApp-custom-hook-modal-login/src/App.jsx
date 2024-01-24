import { useReducer, useState } from 'react';

import { UserForm } from './components/UserForm';
import { UsersList } from './components/UsersList';
import { UserModalForm } from './components/UserModalForm';

import { useUser } from './hooks/useUser';
import { UserPages } from './pages/UserPages';
import { LoginView} from './auth/pages/LoginView';


export const App = () => {

  

  return (

    <>

      {/*<UserPages/>*/}

      <LoginView/>



    </>

  )

}

export default App
