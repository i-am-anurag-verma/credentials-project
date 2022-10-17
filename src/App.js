import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from './components/About'
import Alert from "./components/Alert";
import React, { useState } from "react";
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
const removeBodyClasses = () =>{
  document.body.classList.remove('bg-light');
  document.body.classList.remove('bg-dark');
  document.body.classList.remove('bg-warning');
  document.body.classList.remove('bg-danger');
  document.body.classList.remove('bg-success');
}


  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success")
      
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success")
    }
  };

  return (
    <BrowserRouter>

      {/* <Router> */}
      {/* <Navbar /> */}
      <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="about" element={<About mode={mode}/>}>
          </Route>
          <Route path="/" element={<TextForm heading="Word counter Character counter" mode= {mode} showAlert={showAlert} />}>
          </Route>
        </Routes>
      </div>
      {/* </Router> */}
    </BrowserRouter>
  );
}

export default App;
