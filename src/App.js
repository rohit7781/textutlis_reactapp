
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light') 
  const togglecolormode = ()=> {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='#4a4a4a ';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
 
    }
  }



  return (
    <>

    {/* old method */}
    {/* <Router>
      <Navbar title='Text utils' mode={mode} toggledarkmode={togglecolormode} />
      <Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm heading="Welcome to Text Utils" mode={mode} />
          </Route>
      </Routes>
    </Router> */}

  {/* New method */}
    <Router>
      <Navbar title='Text utils' mode={mode} toggledarkmode={togglecolormode} />
        <Routes>
          <Route exact path="/" element={<TextForm heading="Welcome to Text Utils" mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode}/>} />
        </Routes>
    </Router>

    </>
  );
}

export default App;
