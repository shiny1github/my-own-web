import React from "react";
import'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import { Route, Switch }from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About  from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Errorpage from "./components/Errorpage";


//"react-router-dom": "^6.0.2",

export const App = () => {
  return (
    <>
      <Navbar/>
      <Switch>
      
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
      <Route>
        <Errorpage/>
      </Route>
      </Switch>

      
    </>
  );
};

export default App;
