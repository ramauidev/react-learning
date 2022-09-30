import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import AdDesigner from "./components/AdDesigner/AdDesigner";
import Votes from "./components/Votes/Votes";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <AdDesigner />
        <Votes />
      </div>
    </div>
  );
}

export default App;
