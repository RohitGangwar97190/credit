import React from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css"
function Navbar(){
    return(
        <nav>
       
        <Link to="/Credia">Law's</Link>
    
        <Link to="/veri">How its Work</Link>
        <Link to="/">FAQ</Link>
        <Link to="/Query">Contact</Link>
        <Link to="/Login">Login/Register</Link>
        </nav>
    )
};
export default Navbar;