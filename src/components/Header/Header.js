import React from "react";
import "./Header.scss";
import picID from "../../UI/Image/picID.png";
import dayNightIcon from "../../UI/Image/journee-nuit.png";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__signature">DEV.BY.OB</h1>
      <img className="header__pic" src={picID} alt="id-pic" />
      <img src={dayNightIcon} alt="d&n" className="header__change" />
    </div>
  );
};

export default Header;
