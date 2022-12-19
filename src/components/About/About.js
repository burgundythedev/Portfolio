import React from "react";
import AboutWrapper from "../../UI/AboutWrapper";
import "./About.scss";
import Timeline from "../Timeline/Timeline";
import parkourM from "../../UI/Image/PARKOUR.png";
const About = () => {
  return (
    <AboutWrapper>
      <div id="about" className="about">
        <h1 className="about__title about__title--about">About</h1>
        <div className="about__box-container">
          <div className="about__box  about__box--1">
            <div className="about__container">
              <h1 className="about__title about__title--history">
                my PARKOUR!
              </h1>
              <h6 className="about__title about__title--fromto">
                From pastry chef to developer!
                <img className="about__icon" src={parkourM} alt="parkour-man" />
              </h6>
              <p className="about__description about__description--history">
                After several years working in the food industry, I found myself
                wanting to try something new and challenging. In my previous
                career, I had the opportunity to work abroad and developed my
                work ethic and interpersonal skills. To embark on this new
                endeavor, I started taking classes online and teaching myself.
                These initial classes on web development confirmed my desire to
                keep training and cultivating my interests in coding. This led
                me to get formal training and expand my knowledge, which led to
                get a degree in web development. Throughout my journey, I
                developed knowledge and skills that I want to utilized to build
                beautiful and high-performance apps within a professional
                environment.
              </p>
              <h1 className="about__title about__title--skills">Skills</h1>
              <p className="about__description about__description--skills">
                ["HTML", "CSS", "JavaScript", "React", "Croissant", "Cake"]
              </p>
            </div>
          </div>

          <div className="about__box  about__box--2">
            <div className="about__timeline">
              <Timeline />
            </div>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default About;
