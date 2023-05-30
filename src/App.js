import Nav from './components/Nav';
import './App.css';
import Second from './components/Second';
import React, { useState } from 'react';
import About from './components/About';
import Abot from './components/Abot';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');

  //that is clas another
  const [alert, setalert] = useState(null);
  const [greenmode, setgreenmde] = useState('light')
  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type,

    })
    setTimeout(() => {
      setalert(null)
    }, 2000);

  }
  // const removeClass = ()=>{
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-success')
    
  // }
  const toggleMode = (cls) => {
    // removeClass();
    // document.body.classList.add('bg-'+ cls)
    if (mode === 'dark') {
      
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert('Light mode has been enabled', 'success')
      
      // if (document.body.classList.add('bg-'+ cls)) {
      //   removeClass();
      // }
      if (greenmode === 'dark') {
        document.body.style.backgroundColor = '#122503';
      } else {
        document.body.style.backgroundColor = 'white';
      }
    } else {

      setmode('dark')
      document.body.style.backgroundColor = 'black';
      showalert('Dark mode has been enabled', 'success')
    }
  }
  const modegreen = () => {
    if (greenmode === 'light') {
      setgreenmde('dark')
      showalert('Green mode has been enabled', 'success')
      document.body.style.backgroundColor = '#122503';
    }
    else {
      setgreenmde('light')
      document.body.style.backgroundColor = 'white';
      showalert('light mode has been enabled', 'success')
      if (mode === 'dark') {
        document.body.style.backgroundColor = 'black';
      } else {
        document.body.style.backgroundColor = 'white';
      }
    }
  }
  return (
    <>
      <Router>
        <Nav mode={mode} modegreen={modegreen} greenmode={greenmode} toggleMode={toggleMode}></Nav>
        <About alart={alert} mode={mode} modegreen={modegreen}></About>
        <div className='container mt-5'>
        {/* <Second mode={mode} greenmode={greenmode} showalert={showalert} /> */}
          <Routes>
            <Route exact path='/About' element={<Abot mode={mode} greenmode={greenmode} />}>
            </Route>
            <Route exact path='/' element={<Second mode={mode} greenmode={greenmode} showalert={showalert} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}
Nav.defaultProps = {
  title: 'Text Utiles'
}
Second.defaultProps = {
  heading: 'Write here',
  btn: 'Change to lowercase'
}

export default App;

