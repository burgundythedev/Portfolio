import React from "react";
import "./Presentation.scss";
import PresentationWrapper from "../../UI/PresentationWrapper";
import picID from "../../UI/Image/picID.png";
import github from "../../UI/Image/icons8-github-128.png";
import linkedin from "../../UI/Image/icons8-linkedin-100.png";
import arrow from "../../UI/Image/arrowup.png";

const Presentation = () => {
  return (
    <PresentationWrapper>
      <div className="presentation">
        <div className="presentation__wrapper">
          <div className="presentation__box-hello">
            <p className="presentation__name">
              Hi! I'm
              <span> Olivier</span>, a Web Developer.
            </p>
          </div>
          <div className="presentation__pic  presentation__pic">
            <img className="presentation__img" src={picID} alt="id-pic" />
            <div className="presentation__box-experience">
              <p className="presentation__description">
                "15 years of Soft Skills in work environnements and life, I want
                to apply my Web Developer skills to business and build beautiful
                UI experiences with attention to details and performances."
              </p>
            </div>
          </div>
          <div className="presentation__box-status">
            <div className="presentation__box-icon">
              <a
                href="https://github.com/burgundythedev"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="presentation__icon"
                  src={github}
                  alt="social-icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/olivier-bourgogne/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="presentation__icon"
                  src={linkedin}
                  alt="social-icon"
                />
              </a>
            </div>
            <div className="presentation__scroll-downs">
              <div className="presentation__mousey">
                <div className="presentation__scroller"></div>
              </div>
              <p>or Click on Menu</p>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </PresentationWrapper>
  );
};

export default Presentation;
