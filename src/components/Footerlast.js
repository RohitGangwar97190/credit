import React from 'react'
import "./Footerlast.css"
 import '@fortawesome/fontawesome-free/css/all.min.css';
{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}
const   Footerlast = () => {
    return (
        <div>
            <footer>

                <div class="upper">
                    <div class="links">
                        <h3>links</h3>
                        <p><a href="#">lorem</a></p>
                        <p><a href="#">lorem</a></p>
                        <p><a href="#">lorem</a></p>
                        <p><a href="#">lorem</a></p>
                        <p><a href="#">lorem</a></p>


                    </div>
                    <div class="info">
                        <h3>information</h3>
                        <p><a href="#">FAQ</a></p>
                    </div>
                    <div class="about">
                        <h3>company
                        </h3>
                        <p><a href="#">About Us</a></p>
                    </div>
                    <div class="newsletter">
                        <label for="email">Join The Newsletter</label>
                        <input type="email" placeholder="enter email" id="email" name="email"></input>
                        <span><button>➡</button></span>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                </div>

                {/* <hr> */}
                <div class="lower">

                    <div class="one"><span>
                        <h1>Affadavit Wala</h1>
                    </span>
                        <span>ALL RIGHTS RESERVED</span>
                    </div>
                    <div class="two">
                        <a href="#">terms</a><a href="#">privacy</a><a href="#">cookies</a>
                    </div>
                    <div class="three">
                        {/* <i class="fa fa-instagram" style="font-size: 32px;"></i>
                        <i class="fa fa-telegram" style="font-size: 32px;"></i>
                        <i class="fa fa-linkedin" style="font-size: 32px;"></i>
                        <i class="fa fa-twitter" style="font-size: 32px;"></i>
                        <i class="fa fa-facebook" style="font-size: 32px;"></i> */}
                        <button className=''><span><i class="fa-brands fa-github"></i></span></button>
                        <button className=''><span><i class="fa-brands fa-instagram"></i></span></button>
                 <button className=""><span><i class=" login with fa-brands fa-google"></i></span></button>
                   <br></br>
                   <br></br>
                   <button className=""><span><i class="fa-brands fa-facebook"></i></span></button>

                    </div>
                </div>
            </footer>




        </div >
    )
}

export default Footerlast;