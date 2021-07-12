import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import Home from "./scenes/Home";
import Router from "./router";

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
}

export default App;
