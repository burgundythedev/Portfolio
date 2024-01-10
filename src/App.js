import React from "react";
import "./App.scss";

// import Project from "./components/Project/Project";
import WrapperBack from "./UI/WrapperBack";
import { Helmet } from "react-helmet";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>O.Bourgogne Web Developer</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Olivier Bourgogne Portfolio" />
      </Helmet>
      <WrapperBack>
        <Home />
      </WrapperBack>
      {/* <Project /> */}
    </div>
  );
}

export default App;
