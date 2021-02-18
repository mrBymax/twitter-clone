import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="outerWrap">
      <div className="App">
        <Navbar />
      </div>
      <div className="musicControls">Audio controller</div>
    </div>
  );
}

export default App;
