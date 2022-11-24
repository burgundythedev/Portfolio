import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Presentation from "./components/Presentation/Presentation";
import About from "./components/About/About";

function App() {
  return (
    <div className="app">
      <Header />
      <Presentation />
      <About />
    </div>
  );
}

export default App;
