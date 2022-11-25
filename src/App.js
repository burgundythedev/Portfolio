import React from "react";
import "./App.scss";
import Presentation from "./components/Presentation/Presentation";
import About from "./components/About/About";

function App() {
  return (
    <div className="app">
      <Presentation />
      <About />
    </div>
  );
}

export default App;
