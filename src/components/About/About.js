import React from "react";
import AboutWrapper from "../../UI/AboutWrapper";
import "./About.scss";
import parkourM from "../../UI/Image/PARKOUR.png";
import Timeline from "../Timeline/Timeline";
const About = () => {
  return (
    <AboutWrapper>
      <div className="about">
        <div className="about__box  about__box--1">
          <div className="about__container about__container--history">
            <h1 className="about__title about__title--history">
              About my
              <img className="about__icon" src={parkourM} alt="parkour-man" />
              <span className="about__parkour"> PARKOUR!</span>
            </h1>
            <p className="about__description about__description--history">
              After several years working in the Food Industry, I decided to
              reach a new challenge and art of work. My first steps in the web
              development has confirmed my desire to keep training and
              cultivating my interests for the coding. I've started by learning
              by myself on the web, after a few months and a confirmation that I
              want to keep learning in this field I've started a training in a
              school that ended by a degree and more knowledge. After my degree,
              I had to work and keep learning after my dayshift. You can follow
              my learning journey below with the timeline
            </p>
          </div>
          <div className="about__timeline">
            <Timeline />
          </div>
        </div>
        <div className="about__box  about__box--2">
          <div className="about__triangle about__triangle--1"></div>
          <div className="about__container about__container--skills">
            <h1 className="about__title about__title--skills">Skills</h1>
            <p className="about__description about__description--skills">
              ["HTML", "CSS", "JavaScript", "React", "Croissant", "Cake"]
            </p>
          </div>
          <div className="about__container about__container--education">
            <h1 className="about__title about__title--education">Education</h1>
            <div className="about__description about__description--education">
              <li className="about__degree">
                2022: IT-AKADEMY - Web Developer (France: Level 5/Bac+2)
              </li>
              <li className="about__degree">
                2013: Université Lyon 2 - DAEU (Litterature)
              </li>
              <li className="about__degree">
                2004: Les Compagnons du Devoir - CAP Baker & Pastry
              </li>
            </div>
          </div>
          <div className="about__container about__container--hobbies">
            <h1 className="about__title about__title--hobbies">Hobbies</h1>
            <p className="about__description about__description--hobbies">
              ["Sports", "Basket-Ball", "Technology","Gastronomy", "Travel",
              "Music", "VR Gaming"]
            </p>
          </div>
          <div className="about__triangle about__triangle--2"></div>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default About;
