import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/all";
import "./Presentation.scss";
import PresentationWrapper from "../../UI/PresentationWrapper";
import picID from "../../UI/Image/picID.png";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const Presentation = () => {
  const titleRef = useRef();
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
        stagger: 0.5,
        delay: 1.5,
      }
    );
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <PresentationWrapper>
      <div className="presentation">
        <div className="presentation__wrapper">
          <div className="presentation__box-hello">
            <p ref={titleRef} className="presentation__name">
              Hi! I'm&nbsp;
              <span className="letter">O</span>
              <span className="letter">l</span>
              <span className="letter">i</span>
              <span className="letter">v</span>
              <span className="letter">i</span>
              <span className="letter">e</span>
              <span className="letter">r</span>, a Web Developer
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
            <h1 className="presentation__look">Take a look around</h1>
            <div className="presentation__scroll-downs">
              <div className="presentation__mousey">
                <div className="presentation__scroller"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PresentationWrapper>
  );
};

export default Presentation;
