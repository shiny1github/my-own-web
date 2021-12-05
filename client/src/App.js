import React from "react";
import "./App.css";
import { Route} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About  from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";


//"react-router-dom": "^6.0.2",

export const App = () => {
  return (
    <>
      <Navbar/>
      
       <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/login">
        <Login />
      </Route>
      
      <Route path="/signup">
        <Signup/>
      </Route>
      
    </>
  );
};

export default App;
