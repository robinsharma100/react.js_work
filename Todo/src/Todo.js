import React from 'react'
import {useState,useEffect} from 'react'

import './Todo.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";
import {auth} from './firebase'
import {db} from './firebase' 

  
export default function Todo({user}) {
    const [text,setText] =useState('');
    const [mytodos,setTodos] =useState([])

    useEffect(()=>{
        if(user)
        {const docRef = db.collection('todos').doc(user.uid);
        docRef.onSnapshot(docSnap=>{
            if(docSnap.exists){
                console.log(docSnap.data().todos)
                setTodos(docSnap.data().todos)
            }
            else{
                console.log('no docs')
            }
        })
    }else{history.push('/')}
},[])
    const addTodo = ()=>{
        db.collection('todos').doc(user.uid).set({
            todos:[...mytodos,text]
        })
    }

    const deleteTodo = (deleteTodo)=>{
        const docRef = db.collection('todos').doc(user.uid);
        docRef.get().then(docSnap=>{
          const result=  docSnap.data().todos.filter(todo =>todo!= deleteTodo)
            docRef.update({
                todos:result
            })
        })
    }
    const history = useHistory();
    
    
    
    return (
    <>
        <div className="navbar navbar-dark bg-primary d-flex justify-content-around">
            <h3 className="mx-auto">todo</h3>
            <button type="button" class="btn btn-outline-light me-3"onClick={()=>{
                auth.signOut()
                history.push('/')
            }} >Logout</button>
        </div>
        <div className='container my-5'>
            <div className='row justify-content-center ' >
                <div className='col-8 d-flex'>
                    <input type="text" class="form-control" value={text} onChange={(e)=>setText(e.target.value)} placeholder="enter your item"/>
                    <button className="btn btn-primary mx-3" onClick={()=>addTodo()}>add</button>
                </div>
            </div>
        </div>

         <div className="container">  
            <ul class="list-group">
            { mytodos.map(todo =>{
                return <li class="list-group-item" key={todo}>
                            {todo}
                            <button className='btn btn-danger float-end' onClick={()=>deleteTodo(todo)}>delete</button>
                        </li>
            })}
            </ul>
        </div>






        {/*<<div className="d-flex justify-content-around bg-success">
            <div className="mx-auto"><div> todo app</div></div>
            <div >
                <div className="mx-3 bg-danger">sd</div>
            </div>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <div className="input-field">
                    <input type='email' placeholder='email' onChange= {(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type='submit' className='btn btn-primary'>logout</button>
            </form>
    </div>*/}
        
    {/*    <div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <form class="box">
                    <h1>Login</h1>
                    <p class="text-muted"> Please enter your login and password!</p>
                     <input type="text" name="" placeholder="Username"/> 
                     <input type="password" name="" placeholder="Password"/> 
                     <a class="forgot text-muted" href="#">Forgot password?</a>
                      <input type="submit" name="" value="Login" href="#"/>
                    <div class="col-md-12">
                        <ul class="social-network social-circle">
                            <li><a href="#" class="icoFacebook" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#" class="icoTwitter" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#" class="icoGoogle" title="Google +"><i class="fab fa-google-plus"></i></a></li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>*/}
    </>


    );
}
