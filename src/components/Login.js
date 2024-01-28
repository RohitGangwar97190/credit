import React from "react";
import { useLocation } from "react-router-dom";
import "./Login.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Login=()=>{
    
    
    return(
        <div className="abc">
            
            <form className="form">
                <input type="email" placeholder="xyz@gmail.com"></input>
                <br></br>
                <br></br>
                <input type="password" placeholder="your Password"></input>
                <br></br>
                <br></br>
                <input type="submit"></input>
                <br></br>
                <br></br>
                <button>Forgot Password </button>
                <br></br>
                
                   <p>OR</p>
                   <button className="">Login with <span><i class=" login with fa-brands fa-google"></i></span></button>
                   <br></br>
                   <br></br>
                   <button className="">Login With <span><i class="fa-brands fa-facebook"></i></span></button>
                   
                   <div></div>
                  

        
                
            </form>
        
        </div>
    )
};
export default Login;