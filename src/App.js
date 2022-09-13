import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from './components/About'
import Alert from "./components/Alert";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

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

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success")
      document.title = 'Textutils- Dark mode';
      // setInterval(() => {
      //   document.title = 'Textutils is amazing mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'install Textutils Now';
      // }, 1000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success")
    }
  };

  return (
    <div>
      {/* <Router> */}
        {/* <Navbar /> */}
        <Navbar
          title="Navbar"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
            </Route>
          </Routes>
        </div>
      </Router> */}
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
    </div>
    </div>
  );
}

export default App;
