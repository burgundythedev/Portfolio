import React from "react";
import "./Welcome.scss";
const Welcome = () => {
  return (
    <div className="welcome">
      <p className="welcome__text">
        I'm Olivier Bourgogne, a front-end developer located in France. I am
        enthusiastic about leveraging my web development expertise in the
        business realm to craft visually stunning UI experiences that prioritize
        meticulous attention to detail and optimal performance.
        <br />
        <br />
        Explore my portfolio to see some of my notable projects.{" "}
        <a
          href="https://www.linkedin.com/in/olivier-bourgogne/"
          className="welcome__link"
          target="_blank"
          rel="noreferrer"
        >
          <strong>Let's connect</strong>
        </a>{" "}
        for a discussion about how we can collaborate and enhance your business
        through cutting-edge web development.
      </p>
    </div>
  );
};

export default Welcome;
