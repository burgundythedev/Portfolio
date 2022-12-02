import React from "react";
import { Link } from "react-scroll";
import "./Header.scss";
import homeLogo from "../../UI/Image/home.png";

const Header = () => {
  return (
    <div id="home" className="header">
      <h1 className="header__name">Olivier Bourgogne</h1>
      <div className="header__wrapper-menu">
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
          to="portofolio"
          spy={true}
          smooth={true}
          duration={1500}
        >
          Portofolio
        </Link>
        <Link
          className="header__link"
          to="blog"
          spy={true}
          smooth={true}
          duration={1500}
        >
          Blog
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
      </div>
    </div>
  );
};

export default Header;
