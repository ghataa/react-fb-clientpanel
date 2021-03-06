import React, { Component } from "react";
import "./App.css";
import AppNavbar from "./components/layouts/AppNavbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
          <div className="container">
            <h1>Hello ClientPanel</h1>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
