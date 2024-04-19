import React from "react";
import "./Choese.scss";

const Choese = () => {
  return (
    <div className="choese">
      <p className="choese__text">
        Discover <strong className="choese__strong">Choese Sneakers</strong>, a
        showcase of modern web design with{" "}
        <strong className="choese__strong">React TypeScript</strong>, powered by{" "}
        <strong className="choese__strong">Vite</strong> and styled with{" "}
        <strong className="choese__strong">Tailwind CSS</strong>. This project
        highlights advanced Tailwind utilities for responsive, eye-catching UIs.
        <br />
        It features a curated sneaker collection, emphasizing design versatility
        and rapid development. <strong className="choese__strong">
          Vite
        </strong>, <strong className="choese__strong">TypeScript</strong>, and{" "}
        <strong className="choese__strong">Tailwind CSS</strong> are key to its
        performant, maintainable, and stylish interface.
      </p>
      <a
        href="https://choese.onrender.com/"
        className="choese__link"
        target="_blank"
        rel="noreferrer"
      >
        <div className="choese__screen-container">
          <p className="choese__link-text">View Site</p>
        </div>
      </a>
    </div>
  );
};

export default Choese;
