import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React,{useState} from 'react';


import {
  HashRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom";


//let name=<b>bhoomi</b>;
//if i write let name="<b>bhoomi</b>" toh yeh bold nhi hoga ulta same cheej print kardega as external html
//yeh excape hogaya bold nhi bana isliye isko render karane ke liye we use dangerously setinner html 
//excape yaani html ko text bana dena
//react escape karta hai to be safe

function App() {
  //succes ka s capitlaize ke liye
 
  const [mode,setMode] = useState('light');//whether darkmode enabled or not
  const [alert,setAlert] = useState(null);
   const showAlert=(message,type)=>{
    setAlert({
       message:message,
       type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }

  return (
    //jsx fragment for adding multiple elements
    <>
       <Router> 
      <Navbar title="TextUtils" Abouttext='About' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">

      
      <Routes>
         <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" 
          element={<TextForm showAlert={showAlert}  heading="Try TextUtils-Word counter,Character counter,Remove Extra Spaces etc." mode={mode}/>} />
      </Routes>
      

       {/* <About/>*/}

       {/* <TextForm showAlert={showAlert} heading="Enter Text to Analyze Below" mode={mode}/> */}

      </div>
      </Router> 
      
    </>
  );
}

export default App;