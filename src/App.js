import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Appbar from "./Components/Appbar/Appbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Appbar />
    </div>
  );
}

export default App;
