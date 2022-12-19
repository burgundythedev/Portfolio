import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Presentation from "./components/Presentation/Presentation";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Form from "./components/Contact/Form";
import WrapperBack from "./UI/WrapperBack";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <WrapperBack>
        <Header />
        <Presentation />
      </WrapperBack>
      <About />
      <Project />
      <Blog />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
