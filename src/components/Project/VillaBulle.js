import React from "react";
import "./VillaBulle.scss";
import villabulle from "../../UI/Image/villabulle.png";
const VillaBulle = () => {
  return (
    <div className="villa">
      <p className="villa__text">
        This e-commerce platform offers secure user accounts, purchase
        functions, order history, and an admin panel for product management and
        data analysis, ensuring a smooth and intuitive user experience.
      </p>
      <p className="villa__text">
        Villabulle E-Commerce is built on{" "}
        <strong className="villa__strong">React</strong>, incorporating{" "}
        <strong className="villa__strong">Redux</strong>,{" "}
        <strong className="villa__strong">SASS/BEM</strong>,{" "}
        <strong className="villa__strong">Media Queries</strong>, and{" "}
        <strong className="villa__strong">Firebase</strong>. It uses{" "}
        <strong className="villa__strong">NPM packages and custom hooks</strong>
        , with a focus on security through{" "}
        <strong className="villa__strong">environment variables</strong>.
      </p>
      <a
        href="https://burgundythedev.github.io/evisit-villabulle/"
        target="_blank"
        rel="noreferrer"
        className="villa__link"
      >
        <div className="villa__screen-container">
          <img className="villa__screen" src={villabulle} alt="screenshot" />
          <p className="villa__link-text">View Site</p>
        </div>
      </a>
    </div>
  );
};

export default VillaBulle;
