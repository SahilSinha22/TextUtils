 
import './App.css';

import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const[Mode,setMode]=useState("light");///whether dark mode is enabled or not
  
  const[alert,setAlert]=useState(null);
  const showAlert = (message,type)=>{
   setAlert({
     msg: message,
     type: type
   })
   setTimeout(()=>{
setAlert(null);
   },1500);
     }
  const toggleMode=()=>{
    if(Mode==="light"){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
     showAlert("Enable Dark Mode","success");
     ///document.title="TextUtils - Dark Mode"
     //setInterval(()=>{
     // document.title="TextUtils - Amazing Mode"
     ////},2000)
     //setInterval(()=>{
      ///document.title="TextUtils - Now"
     ///},1500)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='White';
     showAlert("Enable Light Mode","success");
     ///document.title="TextUtils - Light Mode";
     
    }
  }
  return (
    
    <>
  <Router>
<Navbar title="Textutils" About="About us" mode={Mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
                  
<Routes>
  <Route exact path='/' element={<Textform showAlert={showAlert} heading="TextUtils - Word counter, character counter,Remove extra space" mode={Mode}/>
}></Route>
<Route exact path='/about' element={< About  mode={Mode}/>}></Route>
  </Routes>
</div>
</Router>
</>

  );
}

export default App;
