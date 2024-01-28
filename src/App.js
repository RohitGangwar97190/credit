import React ,{useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DemoCarousel from "./components/DemoCarousel";
import InfiniteScrollingText from './components/InfiniteScrollingText';
import './App.css';
import Login from "./components/Login";
import Credential from "./components/Credential";
import Verification from "./components/Verification";
import Last from "./components/Last";
import { Route,Routes } from "react-router-dom";
import Footerlast from "./components/Footerlast";


function App() {
  const[header,setHeader]=useState("");
  const[page,setPage]=useState("");
  const[footer,setFooter]=useState("");
  const textToScroll = <h1 className="rohit">'This is a website  which shows the humanity nature toward the society and Increased their Credential point'</h1>;
    return (
    <div>
      <Routes>
      <Route path="/" element={<>
      <Header/>
      <InfiniteScrollingText text={textToScroll} />

      <DemoCarousel/>
     
      <Footer/>
       <Last/> 
       <Footerlast/>

      </>} > 
       </Route>
      <Route path="/Login" element={<Login/>} >  </Route>
       <Route path="/Credian" element={<Credential/>} >  </Route>
       <Route path="/Veri" element={<Verification/>} >  </Route>
       </Routes>
    </div>
  );
}

export default App;
