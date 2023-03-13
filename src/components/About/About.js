import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/all";
import "./About.scss";
import Timeline from "../Timeline/Timeline";
import parkourMan from "../../UI/Image/247-2473763_cartoon-cog-wheel-gear-gears-mechanical-motion-cartoon.png";
import github from "../../UI/Image/icons8-github-128.png";
import linkedin from "../../UI/Image/icons8-linkedin-100.png";
import stair2 from "../../UI/Image/escalier2.png";
import resume from "../../UI/Image/CV 2023-Olivier Bourgogne-Developpeur Web.pdf";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const About = () => {
  const slideInLeft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.4,
        duration: duration || 0.4,
        scrollTrigger: {
          trigger: elem,
          start: "top bottom",
          end: "bottom center",
        },
      }
    );
  };

  useEffect(() => {
    slideInLeft("#start1", "0.5", "1");
  }, []);
  useEffect(() => {
    slideInLeft("#start2", "0.5", "1");
  }, []);
  useEffect(() => {
    slideInLeft("#start3", "0.5", "1");
  }, []);

  return (
    <div id="about" className="about">
      <div className="about__box-title">
        <h1 className="about__title about__title--about">
          <span className="about__span1">#</span>About
          <hr className="about__line-title "></hr>
        </h1>
      </div>
      <div className="about__box-container">
        <div className="about__box  about__box--1">
          <div className="about__container">
            <h1 className="about__title about__title--history">
              <span className="about__span">01.</span>my PARKOUR
              <hr className="about__line about__line--history"></hr>
            </h1>
            <p
              id="start1"
              className="about__description about__description--history"
            >
              <p id="start1" className="about__title about__title--fromto">
                From pastry chef to developer
              </p>
              After several years working in the food industry, I found myself
              wanting to try something new and challenging. In my previous
              career, I had the opportunity to work abroad and developed my work
              ethic and interpersonal skills. To embark on this new endeavor, I
              started taking classes online and teaching myself. These initial
              classes on web development confirmed my desire to keep training
              and cultivating my interests in coding. This led me to get formal
              training and expand my knowledge, which led to get a degree in web
              development. Throughout my journey, I developed knowledge and
              skills that I want to utilized to build beautiful and
              high-performance apps within a professional environment.
            </p>
          </div>
        </div>
        <div className="about__img-res">
          <img src={parkourMan} alt="img-theme" className="about__img" />
        </div>
        <div className="about__box  about__box--2">
          <div className="about__container">
            <div className="about__skills">
              <h1 className="about__title about__title--skills">
                <span className="about__span">02.</span>Skills
                <hr className="about__line about__line--skills"></hr>
              </h1>
              <p
                id="start2"
                className="about__description about__description--skills"
              >
                ["HTML", "CSS", "SASS", "BEM", "JavaScript", "React", "Media
                Queries", "GitHub", "Croissant", "Cake"]
              </p>
            </div>
            <div className="about__education">
              <h1 className="about__title about__title--education ">
                <span className="about__span">03.</span>Education
                <hr className="about__line about__line--education"></hr>
              </h1>
              <p
                id="start3"
                className="about__description about__description--education"
              >
                <li>High-School Diploma (literature)</li>
                <li>CAP Baker/Pastry</li>
                <li>
                  HND in development of web applications(Higher National
                  Diploma)
                </li>
              </p>
            </div>
            <div className="about__box-icon">
              <h1 className="about__title about__title--details ">
                <span className="about__span">04.</span>More Details
                <hr className="about__line about__line--details"></hr>
              </h1>
              <div className="about__container-icon">
                <a
                  href="https://github.com/burgundythedev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="about__icon-social"
                    src={github}
                    alt="social-icon"
                  />
                </a>
                <hr className="about__line about__line"></hr>
                <a
                  href="https://www.linkedin.com/in/olivier-bourgogne/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="about__icon-social"
                    src={linkedin}
                    alt="social-icon"
                  />
                </a>
                <hr className="about__line about__line"></hr>
                <button className="about__button">
                  <a
                    href={resume}
                    className="about__resume"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about__box  about__box--3">
        <div className="about__timeline">
          <div className="about__icon-timeline">
            <h1 className="about__title about__title--stages">
              <span className="about__span">05.</span>Learning Stages
            </h1>
            <img className="about__icon2" src={stair2} alt="social-icon" />
          </div>
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default About;
