import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/all";
import htmlLogo from "../../UI/Image/html.png";
import cssLogo from "../../UI/Image/css.png";
import jsLogo from "../../UI/Image/js-logo.png";
import githubLogo from "../../UI/Image/git-hub-icon.png";
import mysqlLogo from "../../UI/Image/mysql-icon.png";
import wpLogo from "../../UI/Image/wordpress-icon.png";
import reactLogo from "../../UI/Image/react-logo.png";
import laraLogo from "../../UI/Image/laravel-icon.png";
import phpLogo from "../../UI/Image/php.png";
import walkM from "../../UI/Image/bouton-de-marche-homme.png";
import ropeMan from "../../UI/Image/homme-rope.png";
import internMan from "../../UI/Image/homme-stage.png";
import diplomaMan from "../../UI/Image/homme-diplome.png";
import jumpMan from "../../UI/Image/homme-au-bar.png";
import hikeMan from "../../UI/Image/randonneur.png";
import rocketMan from "../../UI/Image/homme-ready.png";
import "./Timeline.scss";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Timeline = () => {
  const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
      },
      {
        opacity: 1,

        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top bottom",
          end: "bottom center",
        },
      }
    );
  };

  useEffect(() => {
    slideInTop("#top1", "0.5", "0.6");
  }, []);
  useEffect(() => {
    slideInTop("#top2", "0.6", "0.8");
  }, []);
  useEffect(() => {
    slideInTop("#top3", "0.7", "1.2");
  }, []);
  useEffect(() => {
    slideInTop("#top4", "0.8", "1.6");
  }, []);
  useEffect(() => {
    slideInTop("#top5", "0.9", "2");
  }, []);
  useEffect(() => {
    slideInTop("#top6", "1", "2.4");
  }, []);

  return (
    <section className="timeline" id="nextSection">
      <div className="timeline__beginner">
        <div id="top1" className="timeline__wrap timeline__wrap--bx1">
          <div className="timeline__icon timeline__icon--1b">
            <span className="timeline__ref">2021</span>
            <img className="timeline__man" src={walkM} alt="logo-walk" />
          </div>
          <div className="timeline__first timeline__first--fcc">
            <h1 className="timeline__date">FreeCodeCamp </h1>
            <p className="timeline__description">
              "FreeCodeCamp was my gateway to my first steps into coding. I
              completed all of the HTML, CSS, and JS courses."
            </p>
            <img src={htmlLogo} alt="logo" className="timeline__logo" />
            <img src={cssLogo} alt="logo" className="timeline__logo" />
            <img src={jsLogo} alt="logo" className="timeline__logo" />
          </div>
        </div>
        <div id="top2" className="timeline__wrap timeline__wrap--bx2">
          <div className="timeline__icon timeline__icon--2">
            <span className="timeline__ref">2021</span>
            <img className="timeline__man" src={ropeMan} alt="logo-walk" />
          </div>
          <div className="timeline__first timeline__first--it">
            <h1 className="timeline__date">Training Web Dev </h1>
            <p className="timeline__description">
              "I have experience working with a variety of technologies,
              including PHP, JS, HTML/CSS, MySQL, Laravel, GitHub, and more."
            </p>
            <img src={phpLogo} alt="logo" className="timeline__logo" />
            <img src={laraLogo} alt="logo" className="timeline__logo" />
            <img src={jsLogo} alt="logo" className="timeline__logo" />
            <img src={cssLogo} alt="logo" className="timeline__logo" />
            <img src={htmlLogo} alt="logo" className="timeline__logo" />
            <img src={wpLogo} alt="logo" className="timeline__logo" />
            <img src={githubLogo} alt="logo" className="timeline__logo" />
            <img src={mysqlLogo} alt="logo" className="timeline__logo" />
          </div>
        </div>
        <div id="top3" className="timeline__wrap timeline__wrap--bx3">
          <div className="timeline__icon timeline__icon--3">
            <span className="timeline__ref">2021</span>
            <img className="timeline__man" src={internMan} alt="logo-walk" />
          </div>
          <div className="timeline__first timeline__first--intern">
            <h1 className="timeline__date">Internship</h1>
            <p className="timeline__description">
              "During my 6 months internship, I gained experience and developed
              projects using React.js."
            </p>
            <img src={reactLogo} alt="logo" className="timeline__logo" />
          </div>
        </div>
        <div id="top4" className="timeline__wrap timeline__wrap--bx4">
          <div className="timeline__icon timeline__icon--4">
            <span className="timeline__ref">2022</span>
            <img className="timeline__man" src={diplomaMan} alt="logo-walk" />
          </div>
          <div className="timeline__first timeline__first--i">
            <h1 className="timeline__date">Graduated (Bac+2)</h1>
            <p className="timeline__description">
              "I delivered an oral presentation showcasing the personal projects
              I developed throughout my internship and academic training."
            </p>
            <img
              src={reactLogo}
              alt="logo"
              className="timeline__logo timeline__logo--logo-it"
            />
          </div>
        </div>
        <div id="top5" className="timeline__wrap timeline__wrap--bx5">
          <div className="timeline__icon timeline__icon--5">
            <span className="timeline__ref"> 2022</span>
            <img className="timeline__man" src={hikeMan} alt="logo-walk" />
          </div>
          <div className="timeline__first timeline__first--j">
            <h1 className="timeline__date">Udemy (Self Taught)</h1>
            <p className="timeline__description">
              "I delved deeper into React.js, learning about Hooks, React
              Routing, Animations, HTTP Requests, APIs, BEM, SASS, and more."
            </p>
            <img src={reactLogo} alt="logo" className="timeline__logo" />
          </div>
        </div>
        <div id="top6" className="timeline__wrap timeline__wrap--bx6">
          <div className="timeline__icon timeline__icon--6">
            <img className="timeline__man" src={jumpMan} alt="logo-walk" />
            <span className="timeline__ref">2022</span>
            <img className="timeline__man" src={rocketMan} alt="logo-walk" />
          </div>
          <div className="timeline__first timeline__first--k">
            <h1 className="timeline__date">
              Ready to show the world my skills
            </h1>
            <p className="timeline__description timeline__description--k">
              "I am creating personal projects using ReactJS, BEM, SASS, API,
              GitHub, and other coding concepts while continuously learning"
            </p>
            <img src={reactLogo} alt="logo" className="timeline__logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
