import React from 'react';
import {BrowserRouter as Router,Switch,Route}from "react-router-dom";

import Navbar from './NavbarComponent/HomeNavbar';
import Gallery from './HomePages/Gallery';
import Blogs from './HomePages/Blogs';
import Programs from './HomePages/Programs';
import GetStarted from './HomePages/Home';

import Login from './HomePages/Login';
import CreateUserComponent from './HomePages/SignUp'

import Admin from './AdminComponent/Admin';
import Trainer from './TrainerComponent/Trainer';
import Member from './MemberComponent/Member';






const App = () => 
{
  const dark=false
  return (
    <Router>
  

<div className={dark?"dark":"light"} style={{color:'white',backgroundColor:"black"}}>
     
      <Navbar/>
      
      <Switch>
      <Route  path="/getStarted" component={GetStarted}/> 
      <Route  path="/gallery" component={Gallery}/>
      <Route  path="/programs" component={Programs}/>
      <Route  path="/blogs" component={Blogs}/>
      
      <Route  path="/login" component={Login}/>
      <Route  path="/createuser" component={CreateUserComponent}/>
      <Route  path="/admin" component={Admin}/>
      <Route  path="/trainer" component={Trainer}/>
      <Route  path="/member" component={Member}/>
     

     
    
      </Switch>


   
      </div>
    </Router>
  )
}

export default App
