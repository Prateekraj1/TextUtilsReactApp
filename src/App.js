//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React  from 'react';
import {
  BrowserRouter as Router,
  Routes, // instead of Switches
  Route,

} from "react-router-dom";

/*
<!-- <nav>

      <li>Home</li>
      <li>About Us</li>
      <li>Dashboard</li>
      <li>Admin</li>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
    </div>
    -->
*/
function App() {
  
  const [mode,setMode]=useState('light');// Whether dark mode is enabled or not
  const [textMode,setTextMode]=useState('dark');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
        msg:message,
        type:type
      });
      setTimeout(() => {
        setAlert(null);
      },3000);
  }
  let toggleMode=()=>{
    /*
    setInterval(() => {
      document.title='TextUtils Is AMazing';
    }, 2000);
    setInterval(() => {
      document.title='What Are You Waiting For Download Now ';
    }, 1500);
    */
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode Enabled","success");
      //document.title='TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled","success");
      //document.title='TextUtils - Light Mode'
    }
    if(textMode==='dark'){
      setTextMode('light');
    }
    else{
      setTextMode('dark');
    }
  }
  return (
<>
<Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} textMode={textMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>

    <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route exact path="/" element={<TextForm heading="Enter The Text to analyze" mode={mode} showAlert={showAlert}/>}>
          </Route>
    </Routes>
    
    </div>
    </Router>
</>
  );
}
export default App;
