import React from "react";
import "./Broski.scss";

const Broski = () => {
  return (
    <div className="broski">
      <p className="broski__text">
        <strong className="broski__strong">Broski Social Chat</strong> is a
        sleek, real-time chat application built with{" "}
        <strong className="broski__strong">Vite</strong>,{" "}
        <strong className="broski__strong">React, TypeScript</strong>, and{" "}
        <strong className="broski__strong">Tailwind CSS</strong>. This{" "}
        <strong className="broski__strong">full-stack Node</strong> app uses{" "}
        <strong className="broski__strong">Redux Toolkit</strong> and{" "}
        <strong className="broski__strong">RTK Query</strong> for state
        management, while <strong className="broski__strong">Express</strong>{" "}
        and
        <strong className="broski__strong"> Socket.io</strong> power its
        backend, ensuring fast and reliable communication. Data is managed with{" "}
        <strong className="broski__strong">MongoDB</strong>.
      </p>
      <a
        href="https://broski-social-chat.onrender.com/"
        className="broski__link"
        target="_blank"
        rel="noreferrer"
      >
        <div className="broski__screen-container">
          <p className="broski__link-text">View Site</p>
        </div>
      </a>
    </div>
  );
};

export default Broski;
