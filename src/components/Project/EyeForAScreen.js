import React from "react";
import "./EyeForAScreen.scss";
const EyeForAScreen = () => {
  return (
    <div className="eye">
      <p className="eye__text">
        EyeForAScreen is a dynamic{" "}
        <strong className="eye__strong">React TypeScript project</strong>,
        expertly crafted using <strong className="eye__strong">Vite</strong> for
        accelerated development. It offers a feature-rich platform for an
        effortless movie browsing experience, complete with a convenient
        watchlist functionality.
        <br />
        <br />
        EyeForAScreen, a user-friendly movie browsing application, integrates{" "}
        <strong className="eye__strong">Redux Toolkit</strong> for efficient
        state management, the{" "}
        <strong className="eye__strong">MovieDB API</strong> for comprehensive
        movie data, and <strong className="eye__strong">React Router</strong>{" "}
        for seamless navigation. It employs{" "}
        <strong className="eye__strong">SASS</strong>, utilizing the{" "}
        <strong className="eye__strong">BEM methodology</strong> for stylistic
        consistency and an enhanced user experience.
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
