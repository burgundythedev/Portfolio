import React from "react";
import Header from "../Header/Header";
import Presentation from "../Presentation/Presentation";
import "./Home.scss";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div className="home">
      <div class="home__top-line"></div>
      <div class="home__left-line"></div>
      <Header />
      <Presentation />
      <Footer />
      <div class="home__bottom-line"></div>
      <div class="home__right-line"></div>
    </div>
  );
};

export default Home;
