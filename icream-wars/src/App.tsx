import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import AdDesigner from "./components/AdDesigner/AdDesigner";
import Votes from "./components/Votes/Votes";
import Ad from "./components/Ad/Ad";

function App() {
  return (
    <div className="App">
      <Header user="Rama" />

      <div className="ad-container">
        <Ad flavor="Choclate" fontSize={42} darkTheme={true} />
        <Ad flavor="Vanila" fontSize={42} darkTheme={false} />
        <Ad flavor="Strawberry" fontSize={42} darkTheme={true} />
      </div>

      <div className="wrapper">
        <AdDesigner />
        <Votes />
      </div>
    </div>
  );
}

export default App;
