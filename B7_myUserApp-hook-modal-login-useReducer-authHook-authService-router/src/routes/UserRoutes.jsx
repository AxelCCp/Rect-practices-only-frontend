
export const UserRoutes = ( {login, handlerLogout} ) => {

    const {
        users, 
        userSelected,
        initialUseForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,  
        handlerOpenForm,
        handlerCloseForm,  
    } = useUsers();  

    return (

        <>

            <Navbar login={ login } handlerLogout={handlerLogout} /> 

            <Routes>

                <Route path="users" element={<UsersPage
                
                    users={users}
                    userSelected={userSelected}
                    initialUseForm={initialUseForm}
                    visibleForm={visibleForm}
                    handlerAddUser={handlerAddUser}
                    handlerRemoveUser={handlerRemoveUser}
                    handlerUserSelectedForm={handlerUserSelectedForm}
                    handlerOpenForm={handlerOpenForm}
                    handlerCloseForm={handlerCloseForm}
                
                /> } />

                <Route path="users/register" element={<RegisterPage handlerAddUser={handlerAddUser} initialUseForm={initialUseForm}/> }/>

                <Route path="users/edit/:id" element={ <RegisterPage users={users} handlerAddUser={handlerAddUser} initialUseForm={initialUseForm}/> }/>

                <Route path="/" element={ <Navigate to = "/users" /> }/>   

            </Routes>  

        </>

    );
}