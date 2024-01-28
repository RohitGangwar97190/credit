import React, { useState } from "react"
import Login from './Login' 
import{Route,Routes} from "react-router-dom" 
import Navbar from "./Navbar";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import "./Header.css"
const Header=()=>{
  
   return(
 <div className="container" >
    <Navbar/>
</div>
     )
 };
 export default Header;
