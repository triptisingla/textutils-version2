import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import SpeechToText from './components/SpeechToText';
// import About from './components/About';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Alert from './components/alert';
import Description from './components/Description';
function App() {

  const [mode, setMode] = useState('light')
  const [msg, setMsg] = useState(null);

  const useText = {
    status: "Success",
    message: `Switched to ${mode} mode!`
  }

  const alertFunc = () => {
    setMsg(null);
  }

  const toggle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "rgb(34 48 52)";
      setMsg(useText);
      setTimeout(alertFunc,
        2000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      setMsg(useText);
      setTimeout(alertFunc,
        1500);

    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggle={toggle}/>
        <Alert obj={useText} msg={msg} mode={mode} />
        <div className="container">
          <Routes>
            <Route path='/home' exact element={<TextForm heading="Enter the text to analyze"  mode={mode}/>} />
            <Route path='/speechtotext' exact element={<SpeechToText mode={mode}/>} />
            <Route path='/' exact element={<Description  mode={mode}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
