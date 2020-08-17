import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from './components/Login';
import Logout from './components/Logout';
import LoginHooks from './components/LoginHooks';
import LogoutHooks from './components/LogoutHooks';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
              <LoginHooks />
        <LogoutHooks />
        <br />
      </p>
    </div>
  );
}


export default App;
