import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import "./Presentation.scss";
import ReactDOM from "react-dom";
import Welcome from "../Project/Welcome";
import EyeForAScreen from "../Project/EyeForAScreen";
import VillaBulle from "../Project/VillaBulle";
import Stack from "../Project/Stack";
import Blog from "../Project/Blog";
import picID from "../../UI/Image/picID.png";
import mclovin from "../../UI/Image/mclovin.jpg";
import Choese from "../Project/Choese";
import Broski from "../Project/Broski";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const projectDescriptions = {
  Welcome: <Welcome />,
  Broski: <Broski />,
  Choese: <Choese />,
  EyeforaScreen: <EyeForAScreen />,
  VillaBulle: <VillaBulle />,
  TechStack: <Stack />,
  Blog: <Blog />,
};

const Presentation = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const animRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(picID);
  const [text, setText] = useState("Click Me!");
  const handleImageClick = () => {
    setImageSrc(mclovin);
    setText("I am McLovin!");

    const timer = setTimeout(() => {
      setImageSrc(picID);
      setText("Click Me!");
    }, 10000);

    return () => clearTimeout(timer);
  };

  useEffect(() => {}, [imageSrc]);

  const onLoad = () => {
    gsap.timeline().fromTo(
      ".letter",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.3,
      }
    );
  };

  const handleItemClick = (newTitle) => {
    const newDescription = projectDescriptions[newTitle];

    const letters = newTitle.split("");
    const fragment = document.createDocumentFragment();
    letters.forEach((letter) => {
      const span = document.createElement("span");
      span.className = "letter";
      span.textContent = letter;
      fragment.appendChild(span);
    });

    gsap.to(titleRef.current.children, {
      opacity: 0,
      duration: 0.2,
      stagger: 0.05,
      onComplete: () => {
        while (titleRef.current.firstChild) {
          titleRef.current.removeChild(titleRef.current.firstChild);
        }
        titleRef.current.appendChild(fragment);
        gsap.fromTo(
          titleRef.current.children,
          {
            x: -100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 0.2,
          }
        );
      },
    });

    gsap.to(descriptionRef.current, {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        ReactDOM.unmountComponentAtNode(descriptionRef.current);
        descriptionRef.current.innerHTML = "";

        if (React.isValidElement(newDescription)) {
          ReactDOM.render(newDescription, descriptionRef.current);
        } else {
          descriptionRef.current.innerHTML = newDescription;
        }

        gsap.to(descriptionRef.current, { opacity: 1, duration: 2 });
      },
    });
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div className="presentation">
      <div className="presentation__wrapper">
        <div className="presentation__container">
          <div className="presentation__box-experience">
            <div className="presentation__box-welcome">
              <div className="presentation__animation">
                <div ref={animRef} className="presentation__img-container">
                  <img
                    className="presentation__img"
                    src={imageSrc}
                    alt="id-pic"
                    onClick={handleImageClick}
                  />
                  <span className="presentation__hover-text">{text}</span>
                </div>
              </div>
              <p ref={titleRef} className="presentation__name">
                <span className="letter">W</span>
                <span className="letter">E</span>
                <span className="letter">L</span>
                <span className="letter">C</span>
                <span className="letter">O</span>
                <span className="letter">M</span>
                <span className="letter">E</span>
                <span className="letter">.</span>
              </p>
            </div>
            <div className="presentation__description-wrapper">
              <div ref={descriptionRef} className="presentation__description">
                <Welcome />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="presentation__sidebar">
        <h3 className="presentation__sidebar-title">Projects</h3>
        <div className="presentation__sidebar-list-wrapper">
          <div className="presentation__sidebar-list">
            {Object.keys(projectDescriptions).map((projectTitle) => (
              <p
                key={projectTitle}
                className="presentation__project"
                onClick={() => handleItemClick(projectTitle)}
              >
                {projectTitle}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
