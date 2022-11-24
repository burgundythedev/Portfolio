import React from "react";
import AboutWrapper from "../../UI/AboutWrapper";
import "./About.scss";

const About = () => {
  return (
    <AboutWrapper>
      <div className="about">
        <div className="about__container about__container--history">
          <h1 className="about__title about__title--history">About</h1>
          <p className="about__description about__description--history">
            "Having 13 years of soft skills, I want to apply my Web Developer
            skills in business and build beautiful UI experiences with attention
            to details and performances."
          </p>
        </div>
        <div className="about__container about__container--education">
          <h1 className="about__title about__title--education">Education</h1>
          <ul className="about__description about__description--education">
            <li className="about__li">
              2022: IT-AKADEMY - Web Developer (Level 5 (France: Bac+2))
            </li>
            <li className="about__li">
              2013: Université Lyon 2 - DAEU (Litterature)
            </li>
            <li className="about__li">
              2004: Les Compagnons du Devoir - CAP Baker & Pastry
            </li>
          </ul>
        </div>
        <div className="about__container about__container--skills">
          <h1 className="about__title about__title--skills">Skills</h1>
          <p className="about__description about__description--skills">
            ["HTML", "CSS", "JavaScript", "React", "Croissant", "Cake"]
          </p>
        </div>
        <div className="about__container about__container--hobbies">
          <h1 className="about__title about__title--hobbies">Hobbies</h1>
          <p className="about__description about__description--hobbies">
            ["Sports", "Basket-Ball", "Technology","Gastronomy", "Travel",
            "Music", "VR Gaming"]
          </p>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default About;
