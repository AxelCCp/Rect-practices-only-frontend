
export const UsersList = ({users, handlerUserSelectedForm, handlerRemoveUser}) => {

return(

    <>
    
        <table className="table my-5">
            <thead>
                <tr>
                    <th>#</th>
                    <th>username</th>
                    <th>email</th>
                    <th>update</th>
                    <th>eliminar</th>
                </tr>
            </thead>
            <tbody>
                { 
                    users.map(({id, username, email, password}) => (
                      
                        <tr  key={id} >
                            <td>{ id }</td>
                            <td>{ username }</td>
                            <td>{ email }</td>
                            <td>
                                <button type="button" className="btn btn-outline-info btn-sm" onClick={() => handlerUserSelectedForm({ id : id, username : username, email : email, password : password })}> update </button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => handlerRemoveUser(id)} >remove</button>
                            </td>
                        </tr>

                    ))
                }
            </tbody>
        </table>        

    </>

)

}