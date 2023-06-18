import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);

  }

  const togglemode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#093372';
      showAlert("Dark mode has been enabled!","Success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!","Success");
    }
  }




  return (
    <>
    {/* <Router> */}
    <Navbar togglemode={togglemode} mode = {mode} title = "TextUtils"/>
    <Alert alert={alert} />
    <div className="container my-3">
    {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/"> */}
           <TextForm mode = {mode} headings = "Enter the text to analyze below" />
          {/* </Route>
    </Switch> */}
   
    </div>
    {/* </Router> */}
   

    
    
    
    
   
    

    
    
    
    </>
    
  
  );
}

export default App;
