import React from "react";
import "./Presentation.scss";
import PresentationWrapper from "../../UI/PresentationWrapper";

const Presentation = () => {
  return (
    <PresentationWrapper>
      <div className="presentation">
        <div className="presentation__box ">
          <div className="presentation__hello presentation__hello--1">
            <h1 className="presentation__name presentation__name--1">
              BONJOUR!
            </h1>
            <h1 className="presentation__name presentation__name--2">
              I'M <span>OLIVIER</span>,
            </h1>
            <h1 className="presentation__name presentation__name--3">
              A WEB DEVELOPER.
            </h1>
            <p className="presentation__text">“Front-End Developer”</p>
          </div>
          <div className="presentation__hello  presentation__hello--2"></div>
          <div className="presentation__wrapper-circle">
            <div className="presentation__circle presentation__circle--1">
              <a href="#about" className="presentation__link">
                About
              </a>
            </div>
            <div className="presentation__circle presentation__circle--2">
              <a href="#skills" className="presentation__link">
                Skills
              </a>
            </div>
            <div className="presentation__circle presentation__circle--3">
              <a href="#projects" className="presentation__link">
                Projects
              </a>
            </div>
            <div className="presentation__circle presentation__circle--4">
              <a href="#contact" className="presentation__link">
                Contact
              </a>
            </div>
          </div>
          <p className="presentation__description">
            "Having 15 years of soft skills in work environments, I want to
            apply my Web Developer skills to business and build beautiful UI
            experiences with attention to details and performances."
          </p>
        </div>
      </div>
    </PresentationWrapper>
  );
};

export default Presentation;
