import React from "react";
import "./Footer.scss";
import devby from "../../UI/Image/devby.png";
import devby2 from "../../UI/Image/devby2.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container-text"></div>
      <img className="footer__icon" src={devby} alt="icon" />
      <p className="footer__text">developed by Olivier Bourgogne</p>
      <img className="footer__icon" src={devby2} alt="icon" />
      <div class="form__background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Footer;
