import "./Project.scss";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/all";
import github from "../../UI/Image/github-form.png";
import link from "../../UI/Image/link.png";
import villabulle from "../../UI/Image/screen-website-villa.png";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const Project = () => {
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
        delay: delay || 0.6,
        duration: duration || 2,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };

  useEffect(() => {
    slideInLeft("#p1");
  }, []);
  useEffect(() => {
    slideInLeft("#p2");
  }, []);
  useEffect(() => {
    slideInLeft("#p3");
  }, []);
  useEffect(() => {
    slideInLeft("#p4");
  }, []);
  return (
    <div id="portfolio" className="project">
      <div className="project__box-container">
        <div className="project__box project__box--1">
          <h1 className="project__status">
            <div>
              <span className="about__span1">#</span>Some Things I’ve Built
            </div>
            <hr className="project__line"></hr>
          </h1>
        </div>
        <div className="project__box project__box--2">
          <div className="project__card">
            <div className="project__container-description project__container-description">
              <div className="project__presentation project__presentation">
                <div className="project__start project__start">
                  <h6 className="project__featured project__featured">
                    Featured Project
                  </h6>{" "}
                  <div className="project__social-icon project__social-icon">
                    <h1 className="project__title project__title">
                      E-SHOP WEBSITE: Villa Bulle
                    </h1>

                    <a
                      href="https://github.com/burgundythedev/evisit-villabulle"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={github}
                        className="project__social-img"
                        alt="icon"
                      />
                    </a>
                    <a
                      href="https://burgundythedev.github.io/evisit-villabulle/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={link}
                        className="project__social-img"
                        alt="icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project__container-text">
                <p
                  id="p1"
                  className="project__description project__description"
                >
                  <p>
                    The <b>Villabulle E-Commerce</b> is an <b>React-based</b>{" "}
                    web application, designed with{" "}
                    <b>
                      Redux, SASS/BEM, Media Queries, Firebase, NPM packages and
                      custom hooks.
                    </b>{" "}
                    This dynamic platform provides an immersive e-commerce
                    experience for both users and administrators. Users can
                    effortlessly create accounts, log in securely, reset
                    passwords, and make purchases. Additionally, users can
                    access their order history, while administrators have full
                    control to manage products, display them for users, and
                    analyze order data through a bar chart component. The utmost
                    attention has been paid to{" "}
                    <b>security through environment variables</b>. The website
                    has been meticulously optimized to prevent users from
                    getting lost, even in the event of errors occurring during
                    their user experience. This prioritizes a smooth and
                    intuitive journey for users at all times.{" "}
                    <b>Check my website by clicking 👉</b>
                  </p>
                </p>

                <a
                  href="https://burgundythedev.github.io/evisit-villabulle/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="project__screen project__screen"
                    src={villabulle}
                    alt="project-screen"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
