import { useEffect, useState } from "react";

export const UserForm = ({handlerUser, formInit, userSelected}) => {

    const [userForm, setUserForm] = useState(formInit);

    const {id, username, password, email} = userForm;   

    useEffect(() => {
        setUserForm({
            ...userSelected,
            //password : '',

        }); 
    }, [userSelected]);

    const onInputChange = ({target}) => {
        console.log(target.value);
        const {name, value} = target;
        setUserForm({                                                                                   
            ...userForm,                                                                               
            [name] : value,                                                                             
        })
    }

    const onSubmit = (event) => {

        event.preventDefault();                                                                        
        
        if(!username || (!password && id===0) || !email){                                                          
            alert("You must complete all the inputs!");
            return;
        }
        
        alert('Sending form...');

        handlerUser(userForm);
        setUserForm(formInit);                                                                  
    }  

    return (

        <>
            <form onSubmit={onSubmit}>
                <input className="form-control my-3 w-75" placeholder="username" name="username" value={username} onChange={ onInputChange }/>

                { id > 0 ? '' : <input className="form-control my-3 w-75" placeholder="password" name="password" type="password" value={password} onChange={ onInputChange }/> }

                <input className="form-control my-3 w-75" placeholder="email" name="email"  value={email} onChange={ onInputChange } />

                <input className="form-control my-3 w-75"  name="id" value={id}  type="hidden"/>

                <button className="btn btn-outline-primary" type="submit" onChange={ onInputChange }> {id > 0 ? 'Update' : 'Create'} </button>
            </form>
        </>

    );

}