import "./Project.scss";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/all";
import popcorn from "../../UI/Image/popcorn.png";
import github from "../../UI/Image/github-form.png";
import link from "../../UI/Image/link.png";
import form from "../../UI/Image/form.png";
import adventure from "../../UI/Image/adventure.png";
import shop from "../../UI/Image/shop.jpeg";
import woo from "../../UI/Image/woo.png";
import todo from "../../UI/Image/todolist-vert.png";
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
          <div className="project__card project__card--card1">
            <div className="project__container-description project__container-description--moviedb">
              <div className="project__presentation project__presentation--moviedb">
                <div className="project__start project__start--moviedb">
                  <h6 className="project__featured project__featured--moviedb">
                    Featured Project
                  </h6>
                  <h1 className="project__title project__title--moviedb">
                    CineClubWOO
                  </h1>
                </div>
                <div className="project__container-img __container-img--moviedb">
                  <img src={popcorn} className="project__icon" alt="icon" />
                </div>
              </div>
              <div className="project__container-text project__container-text--moviedb">
                <p
                  id="p1"
                  className="project__description project__description--moviedb"
                >
                  CineClubWOO is a simple design one page web app for
                  visualizing personalized MovieDB-API data. View the Top Ten
                  rated movies and a movie list sort by alphabet, newer to
                  older, and detailed information about each movie. Check it
                  out!
                </p>
                <ul id="p1" className="project__list project__list--moviedb">
                  <li className="project__items">React</li>
                  <li className="project__items">JSX</li>
                  <li className="project__items">SASS</li>
                  <li className="project__items">Responsive</li>
                  <li className="project__items">MovieDB API</li>
                </ul>
              </div>
              <div className="project__social-icon project__social-icon--moviedb">
                <a
                  href="https://github.com/burgundythedev/MovieDB-App"
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
                  href="https://burgundythedev.github.io/MovieDB-App/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={link} className="project__social-img" alt="icon" />
                </a>
              </div>
            </div>
            <div className="project__container-screen project__container-screen--moviedb">
              <a
                href="https://burgundythedev.github.io/MovieDB-App/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="project__screen project__screen--moviedb"
                  src={woo}
                  alt="project-screen"
                />
              </a>
            </div>
          </div>
          <div className="project__card project__card--card2">
            <div className="project__container-description project__container-description--moviedb">
              <div className="project__presentation project__presentation--moviedb">
                <div className="project__start project__start--moviedb">
                  <h6 className="project__featured project__featured--moviedb">
                    Featured Project
                  </h6>
                  <h1 className="project__title project__title--moviedb">
                    to do list
                  </h1>
                </div>
                <div className="project__container-img __container-img--moviedb">
                  <img src={form} className="project__icon" alt="icon" />
                </div>
              </div>
              <div className="project__container-text project__container-text--moviedb">
                <p
                  id="p1"
                  className="project__description project__description--moviedb"
                >
                  Organize your life and work with this TodoList app, you can
                  add, edit and delete tasks.
                </p>
                <ul id="p1" className="project__list project__list--moviedb">
                  <li className="project__items">React</li>
                  <li className="project__items">JSX</li>
                  <li className="project__items">CSS</li>
                  <li className="project__items">Responsive</li>
                  <li className="project__items">React Hooks</li>
                </ul>
              </div>
              <div className="project__social-icon project__social-icon--moviedb">
                <a
                  href="https://github.com/burgundythedev/todolist"
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
                  href="https://burgundythedev.github.io/todolist/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={link} className="project__social-img" alt="icon" />
                </a>
              </div>
            </div>
            <div className="project__container-screen project__container-screen--moviedb">
              <a
                href="https://burgundythedev.github.io/todolist/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="project__screen project__screen--moviedb"
                  src={todo}
                  alt="project-screen"
                />
              </a>
            </div>
          </div>
          <div className="project__card project__card--card3">
            <div className="project__container-description project__container-description--moviedb">
              <div className="project__presentation project__presentation--moviedb">
                <div className="project__start project__start--moviedb">
                  <h6 className="project__featured project__featured--moviedb">
                    Featured Project
                  </h6>
                  <h1 className="project__title project__title--moviedb">
                    FooClothing
                  </h1>
                </div>
                <div className="project__container-img __container-img--moviedb">
                  <img src={adventure} className="project__icon" alt="icon" />
                </div>
              </div>
              <div className="project__container-text project__container-text--moviedb">
                <p
                  id="p1"
                  className="project__description project__description--moviedb"
                >
                  FooClothing App is a showcase website. You can visualize what
                  FooClothing is about and sell.
                </p>
                <ul id="p1" className="project__list project__list--moviedb">
                  <li className="project__items">React</li>
                  <li className="project__items">React Router v6</li>
                  <li className="project__items">SASS</li>
                  <li className="project__items">Responsive</li>
                  <li className="project__items">PostsAPI</li>
                </ul>
              </div>
              <div className="project__social-icon project__social-icon--moviedb">
                <a
                  href="https://github.com/burgundythedev/e-commerce"
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
                  href="https://burgundythedev.github.io/e-commerce/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={link} className="project__social-img" alt="icon" />
                </a>
              </div>
            </div>
            <div className="project__container-screen project__container-screen--moviedb">
              <a
                href="https://burgundythedev.github.io/e-commerce/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="project__screen project__screen--moviedb"
                  src={shop}
                  alt="project-screen"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
