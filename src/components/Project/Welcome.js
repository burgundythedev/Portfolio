import React from "react";
import "./Welcome.scss";

const Welcome = () => {
  return (
    <div className="welcome">
      <p className="welcome__text">
        Having transitioned into web development, my portfolio not only embodies
        my <strong>technical skills</strong> but also my{" "}
        <strong>passion, commitment</strong>, and the efforts I have made to
        make my mark in this field.
        <br />
        An expert in <strong>React, TypeScript, and more</strong>, I am
        passionate about creating{" "}
        <strong>dynamic and high-performance web experiences</strong>.
        <br />
        <br />
        Together, let's bring your <strong>digital visions to life</strong>.
        <a
          href="https://www.linkedin.com/in/olivier-bourgogne/"
          className="welcome__link"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <strong>Let's connect</strong>
        </a>{" "}
        for a discussion about how we can collaborate and enhance your business
        through <strong>cutting-edge web development</strong>.
      </p>
    </div>
  );
};

export default Welcome;
