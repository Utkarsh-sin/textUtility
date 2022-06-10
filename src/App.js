
import { useState } from 'react';
import './App.css';
import Alert from './Component/Alert';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import About from './Component/About';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import Header from './Component/Header'
// import Footer from './Component/Footer'


function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  

  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }

  const toggleDarkMode = () =>{
    removeBodyClass();
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='rgb(23 25 26)';
      showAlert("Dark mode is enabled successfully","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled successfully","success")
    }
  }
  const removeBodyClass=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-dark');
  }
  const bgc = (cls) =>{
    removeBodyClass();
    document.body.classList.add('bg-'+cls);
  }
  

  return (
    <>
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleDMode={toggleDarkMode} bgColor={bgc}/*aboutText="About Us"*//>
      <Alert alert={alert} />
      <div className ="my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<TextForm heading="Enter the text below to analyze" mode={mode} showAlert={showAlert}/>}/>
          </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
