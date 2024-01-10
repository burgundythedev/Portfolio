import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/all";
import "./Header.scss";
import location from "../../UI/Image/location.png";
import gmail from "../../UI/Image/gmail.png";
import linkedin from "../../UI/Image/linkedin.png";
import github from "../../UI/Image/github.png";
import logo from "../../UI/Image/OB-logo.png";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

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
    <div className="header">
      <div className="header__img-container">
        <img className="header__img" src={logo} alt="id-pic" />
      </div>
      <ul id="menu" className="header__list">
        {screenWidth >= 480 && (
          <div
            className="header__details"
            href="contact"
            spy={true}
            smooth={true}
            duration={1500}
          >
            <img
              id="menu"
              className="header__logo"
              src={location}
              alt="logo-ob"
            />
            <p className="header__text">France</p>
          </div>
        )}
        <div
          className="header__details"
          href="home"
          spy={true}
          smooth={true}
          duration={1500}
        >
          <img id="menu" className="header__logo" src={gmail} alt="logo-ob" />
          <p className="header__text">bourgogne.olivier@gmail.com</p>
        </div>
        <a
          className="header__link"
          href="https://www.linkedin.com/in/olivier-bourgogne/"
          target="_blank"
          spy={true}
          smooth={true}
          duration={1500}
          rel="noreferrer"
        >
          <img
            id="menu"
            className="header__logo"
            src={linkedin}
            alt="logo-ob"
          />
        </a>
        <a
          className="header__link"
          href="https://github.com/burgundythedev"
          target="_blank"
          spy={true}
          smooth={true}
          duration={1500}
          rel="noreferrer"
        >
          <img id="menu" className="header__logo" src={github} alt="logo-ob" />
        </a>
      </ul>
    </div>
  );
};

export default Header;
