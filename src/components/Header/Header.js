import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/all";
import { Link } from "react-scroll";
import "./Header.scss";
import homeLogo from "../../UI/Image/home.png";
import logo from "../../UI/Image/OB_free-file.png";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const Header = () => {
  const slideInBottom = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        y: 600,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,

        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top bottom",
          end: "bottom center",
        },
      }
    );
  };
  const slideOpacity = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,

        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top bottom",
          end: "bottom center",
        },
      }
    );
  };

  useEffect(() => {
    slideInBottom("#line1", "0.5", "1");
  }, []);
  useEffect(() => {
    slideInBottom("#line2", "0.5", "5");
  }, []);
  useEffect(() => {
    slideOpacity("#menu", "0.5", "5");
  }, []);
  return (
    <div id="home" className="header">
      <div className="header__box-logo"></div>
      <div className="header__left-line">
        <div className="header__box-logo">
          <img id="menu" className="header__logo" src={logo} alt="logo-ob" />
          <div id="line1" className="header__line2"></div>
        </div>
      </div>
      <div className="header__wrapper-menu">
        <ul id="menu" className="header__list">
          <Link
            className="header__link"
            to="home"
            spy={true}
            smooth={true}
            duration={1500}
          >
            <img src={homeLogo} className="header__icon" alt="home-logo" />
          </Link>
          <Link
            className="header__link"
            to="about"
            spy={true}
            smooth={true}
            duration={1500}
          >
            About
          </Link>
          <Link
            className="header__link"
            to="portfolio"
            spy={true}
            smooth={true}
            duration={1500}
          >
            Portfolio
          </Link>
          <Link
            className="header__link"
            to="contact"
            spy={true}
            smooth={true}
            duration={1500}
          >
            Contact
          </Link>
          <div id="line2" className="header__line"></div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
