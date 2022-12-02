import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Presentation from "./components/Presentation/Presentation";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Form from "./components/Contact/Form";
import WrapperBack from "./UI/WrapperBack";

function App() {
  return (
    <div className="app" style={{ cursor: `url(cursor.png), auto ` }}>
      <WrapperBack>
        <Header />
        <Presentation />
      </WrapperBack>
      <About />
      <Project />
      <Form />
    </div>
  );
}

export default App;
