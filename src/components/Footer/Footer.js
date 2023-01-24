import React from "react";
import "./Footer.scss";
import github from "../../UI/Image/icons8-github-128.png";
import linkedin from "../../UI/Image/icons8-linkedin-100.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container-text">
        <p className="footer__text">E-mail: bourgogne.olivier@gmail.com</p>
        <p className="footer__text">Phone: +33698198041</p>
      </div>
      <div className="footer__box-icon">
        <a
          href="https://github.com/burgundythedev"
          target="_blank"
          rel="noreferrer"
        >
          <img className="footer__icon" src={github} alt="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/olivier-bourgogne/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="footer__icon" src={linkedin} alt="social-icon" />
        </a>
        <p className="footer__text">developed by Olivier Bourgogne</p>
      </div>
    </div>
  );
};

export default Footer;
