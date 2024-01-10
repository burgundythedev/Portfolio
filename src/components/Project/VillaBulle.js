import React from "react";
import "./VillaBulle.scss";
const VillaBulle = () => {
  return (
    <div className="villa">
      <p className="villa__text">
        This e-commerce platform offers secure user accounts, purchase
        functions, order history, and an admin panel for product management and
        data analysis, ensuring a smooth and intuitive user experience.
      </p>
      <p className="villa__text">
        Villabulle E-Commerce is built on React, incorporating Redux, SASS/BEM,
        Media Queries, and Firebase. It uses NPM packages and custom hooks, with
        a focus on security through environment variables.
      </p>
      <a
        href="https://burgundythedev.github.io/evisit-villabulle/"
        target="_blank"
        rel="noreferrer"
        className="villa__link"
      >
        <p className="villa__link-text">View Site</p>
      </a>
    </div>
  );
};

export default VillaBulle;
