import ReactDOM from 'react-dom'
import React from 'react'
import './App.css';
import Head from './Head';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Todo from './Todo';
import {useState,useEffect} from 'react'
import {auth} from './firebase'

function App() {
  const [user,setUser] = useState(null);
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user) setUser(user)
      else setUser(null);
    })

  },[])
  
  return (
    <Switch>
      <Route exact path="/"><Login/></Route>
      <Route path="/Signup"><Signup/></Route>
      <Route path="/Todo" ><Todo user={user}/></Route>
    </Switch>
  );
}

export default App;
