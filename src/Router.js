import React from 'react'
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import OrderOnline from './Components/Order-Online';



function Router(){
return(
    <BrowserRouter>
  <Routes>
   <Route exact path='/' Component={Home}/>
   <Route path='/home' Component={Home}/>
  <Route path="/chennai/:restaurtant" Component={OrderOnline} />
  <Route path="/login" Component={Login} />
  </Routes>
    </BrowserRouter>
)

}


export default Router
