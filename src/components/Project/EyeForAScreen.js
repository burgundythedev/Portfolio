import React from "react";
import "./EyeForAScreen.scss";
const EyeForAScreen = () => {
  return (
    <div className="eye">
      <p className="eye__text">
        EyeForAScreen is a dynamic React TypeScript project, expertly crafted
        using Vite for accelerated development. It offers a feature-rich
        platform for an effortless movie browsing experience, complete with a
        convenient watchlist functionality.
        <br />
        <br />
        EyeForAScreen, a user-friendly movie browsing application, integrates
        Redux Toolkit for efficient state management, the MovieDB API for
        comprehensive movie data, and React Router for seamless navigation. It
        employs SASS, utilizing the BEM methodology for stylistic consistency
        and an enhanced user experience.
      </p>
      <a
        href="https://eyeforascreen.onrender.com/"
        className="eye__link"
        target="_blank"
        rel="noreferrer"
      >
        <p className="eye__link-text">View Site</p>
      </a>
    </div>
  );
};

export default EyeForAScreen;
