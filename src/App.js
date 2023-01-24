import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Presentation from "./components/Presentation/Presentation";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Form from "./components/Contact/Form";
import WrapperBack from "./UI/WrapperBack";
import Blog from "./components/Blog/Blog";
import ProjectWrapper from "./UI/ProjectWrapper";
import { Helmet } from "react-helmet";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>O.Bourgogne Web Developer</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Olivier Bourgogn Portfolio" />
      </Helmet>
      <WrapperBack>
        <Header />
        <Presentation />
      </WrapperBack>
      <About />
      <ProjectWrapper>
        <Project />
        <Blog />
      </ProjectWrapper>
      <Form />
      <Footer />
    </div>
  );
}

export default App;
