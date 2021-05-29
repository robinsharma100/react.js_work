import React from 'react'
import './Todo.css';
import {useState} from 'react'
import {auth} from './firebase'
import {Link, useHistory} from 'react-router-dom'
import './Login.css'

export default function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();
    const handleSubmit =async(e)=>{
        e.preventDefault();
        try{
        const result= await auth.signInWithEmailAndPassword(email,password); 
        history.push('/Todo')
        }
        catch(err){
            alert(err);
        }}
    
    return (
        <div>
            <div className="navbar navbar-dark bg-primary">
            <div className="container d-flex ">
            <h3 className="">welcome to todo</h3>
            <Link to='/Signup' type="button" class="btn btn-outline-light signup_button">Signup</Link>
            </div>
            </div>
            <div className='row form_container my-5 mx-auto'>
                <div class="card">
                    <div class="card-head text-center my-3">
                        <h3 class="mb-0">Login</h3>
                    </div>
                    <div class="card-body">
                        <form autocomplete="off" class="form" onSubmit={(e)=>{handleSubmit(e)}} id="formLogin" name="formLogin" role="form">
                        <div class="form-group my-2">
                            <label for="uname1">Email</label> 
                            <input class="form-control" type='email' placeholder='email' onChange= {(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div class="form-group my-2">
                            <label>Password</label> 
                            <input type="password" class="form-control" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                            <button class="btn btn-primary btn-lg my-2 login_button " type='submit'>Login</button>
                        </form>
                    </div>
                </div>
                <label className='text-center mb-2'>new here !please signup  </label>
            </div>

            
        </div>
    )
}
