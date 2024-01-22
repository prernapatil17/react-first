import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {Routes,Route}from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Link,


} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("dark");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showalert("dark mode has enable", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("light mode has enable", "success");
    }
  };

  return (
    <>
    <Router>
      <Navbar title="Navbar" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about"
           element={ <About />}>
          </Route>
          <Route exact path="/"
            element={<Textform heading="Enter the text to analyse" mode={mode} />}>
          </Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
