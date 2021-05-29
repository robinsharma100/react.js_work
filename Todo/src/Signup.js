import React from 'react'
import './Todo.css';
import {useState} from 'react'
import {auth} from './firebase'
import {useHistory} from 'react-router-dom'
 
export default function Signup() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
        const result= await auth.createUserWithEmailAndPassword(email,password); 
        history.push('/Todo')
        }
        catch(err){
            alert(err);
        }
    }
   
    return (
        <>  
            <div className="navbar navbar-dark bg-primary">
            <h3 className="mx-auto">welcome to todo Signup</h3>
            </div>
            <div className='row form_container my-5 mx-auto'>
            <div class="card">
                <div class="card-head text-center my-3">
                    <h3 class="mb-0">Signup</h3>
                </div>
                <div class="card-body">
                    <form autocomplete="off" class="form" onSubmit={(e)=>{handleSubmit(e)}} id="formLogin" name="formLogin" role="form">
                    <div class="form-group my-2">
                        <label for="uname1">Email</label> 
                                            <input class="form-control" type='email' placeholder='email' value={email} onChange= {(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div class="form-group my-2">
                        <label>Password</label> 
                            <input type="password" class="form-control" placeholder='password'value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                        <button class="btn btn-primary btn-lg my-2 login_button " type='submit'>Signup</button>
                    </form>
                </div>
             </div>
        </div>
     </>
    );
}
