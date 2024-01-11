import React from "react";
import "./Welcome.scss";
const Welcome = () => {
  return (
    <div className="welcome">
      <p className="welcome__text">
        I'm <strong>Olivier Bourgogne</strong>, a{" "}
        <strong>front-end developer</strong> located in France. I am
        enthusiastic about leveraging my{" "}
        <strong>web development expertise</strong> in the business realm to
        craft <strong>visually stunning UI experiences</strong> that prioritize
        meticulous attention to detail and <strong>optimal performance</strong>.
        <br />
        <br />
        Explore my portfolio to see some of my <strong>notable projects</strong>
        .{" "}
        <a
          href="https://www.linkedin.com/in/olivier-bourgogne/"
          className="welcome__link"
          target="_blank"
          rel="noreferrer"
        >
          <strong>Let's connect</strong>
        </a>{" "}
        for a discussion about how we can collaborate and enhance your business
        through <strong>cutting-edge web development</strong>.
      </p>
    </div>
  );
};

export default Welcome;
