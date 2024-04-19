import React from "react";
import "./EyeForAScreen.scss";
const EyeForAScreen = () => {
  return (
    <div className="eye">
      <p className="eye__text">
        <strong className="eye__strong">EyeForAScreen</strong> is a dynamic{" "}
        <strong className="eye__strong">React TypeScript project</strong>,
        expertly crafted using <strong className="eye__strong">Vite</strong>. It
        offers an effortless movie browsing experience, complete with a
        convenient watchlist functionality.
        <br />
        EyeForAScreen, integrates{" "}
        <strong className="eye__strong">Redux Toolkit</strong> for efficient
        state management, the{" "}
        <strong className="eye__strong">MovieDB API</strong> for comprehensive
        movie data, and <strong className="eye__strong">React Router</strong>{" "}
        for seamless navigation.
      </p>
      <a
        href="https://eyeforascreen.onrender.com/"
        className="eye__link"
        target="_blank"
        rel="noreferrer"
      >
        <div className="eye__screen-container">
          <p className="eye__link-text">View Site</p>
        </div>
      </a>
    </div>
  );
};

export default EyeForAScreen;
