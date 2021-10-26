import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Route path="/home" exact component={Home} />
      <Route path="/contact" exact component={Contact} />
    </BrowserRouter>
  );
}

export default App;
