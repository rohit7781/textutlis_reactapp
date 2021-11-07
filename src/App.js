
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';

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
      <Navbar title='Text utils' mode={mode} toggledarkmode={togglecolormode} />
      <TextForm heading="Welcome to Text Utils" mode={mode} />
      {/* <About /> */}

    </>
  );
}

export default App;
