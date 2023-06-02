import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textfrom from "./components/Textfrom";
import About from "./components/About";
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light');
  const [alert, setAlert]=useState(null);
  const showAlert=(message,txt)=>
  {
    setAlert({msg:message,t:txt});
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const togglemode=()=>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#212529';
      showAlert("Darkmode has been enabled","info");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Lightmode has been enabled","success");
    }
  }
  return (
    <>
      <Router>
      <Navbar title='My-app' content='Home' mode={mode} togglemode={togglemode}/>
      <div className='container my-3'>
      <Alert alert={alert} mode={mode}/>
      <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact  path="/" element={<Textfrom title='Enter the text here' mode={mode} togglemode={togglemode} showAlert={showAlert}/>}/>
          <Route exact  path="/my-app" element={<Textfrom title='Enter the text here' mode={mode} togglemode={togglemode} showAlert={showAlert}/>}/>
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
