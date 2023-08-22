import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {


  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success");
    }
  }

  return (
    <>
      <Router>
        {/* <Navbar/> */}
        {/* <Navbar title="TextUtils" aboutText="About Textutils"/> */}
        <Navbar title="WordMingle" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode} />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
