import React, { useState, useRef, useEffect } from "react";
import "./Form.scss";
import emailjs from "@emailjs/browser";
import Footer from "../../components/Footer/Footer";
import github2 from "../../UI/Image/git-hub-icon.png";
import linkedin2 from "../../UI/Image/icons8-linkedin-100.png";
import flag from "../../UI/Image/france.png";
import astro from "../../UI/Image/astronaut.png";
import phone from "../../UI/Image/phone.png";
import email from "../../UI/Image/message.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const Form = () => {
  const [statusMessage, setStatusMessage] = useState("");

  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_kny8nph",
        "template_qo5bv2b",
        form.current,
        "1zwwS5-PLI5G7ctZ7"
      )
      .then(
        (result) => {
          setStatusMessage("Message sent successfully");
        },
        (error) => {
          setStatusMessage("An error occured");
        }
      );
    event.target.reset();
  };

  useEffect(() => {
    if (statusMessage === "Message sent successfully") {
      setTimeout(() => {
        setStatusMessage("");
      }, 5000);
    }
  }, [statusMessage]);
  const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
      },
      {
        opacity: 1,

        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top bottom",
          end: "bottom top",
        },
      }
    );
  };

  useEffect(() => {
    slideInTop("#text1", "1", "1.5");
  }, []);
  useEffect(() => {
    slideInTop("#text2", "1.5", "2");
  }, []);
  useEffect(() => {
    slideInTop("#text3", "1", "1.2");
  }, []);

  return (
    <React.Fragment>
      <div id="contact" className="form">
        <div className="form__box-title">
          <h1 className="form__title">
            <div>
              <span className="form__span">#</span>Get In Touch
            </div>
            <hr className="form__line-title "></hr>
          </h1>
        </div>
        <div className="form__box-element">
          <div className="form__box-description">
            <div className="form__circle-box">
              <div className="form__sphere">
                <div className="form__circle form__circle--1"></div>
                <div className="form__circle form__circle--2"></div>
                <div className="form__circle form__circle--3"></div>
              </div>
              <div className="form__globe">
                <img className="form__astro" src={astro} alt="social-icon" />
              </div>
            </div>
            <div className="form__container-contact">
              <p id="text1" className="form__message">
                I’m currently looking for new opportunities, my inbox is always
                open. Whether you have a question or just want to say hi, I’ll
                get back to you!
              </p>
              <div className="form__details">
                <p className="form__text">
                  <img className="form__sign" src={phone} alt="social-sign" />
                  +33698198041
                </p>
                <p className="form__text">
                  <img className="form__sign" src={email} alt="social-sign" />
                  bourgogne.olivier@gmail.com
                </p>
                <p className="form__text">
                  <img className="form__flag" src={flag} alt="social-sign" />
                  Based in Paris
                </p>
                <div className="form__box-icon">
                  <a
                    href="https://github.com/burgundythedev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="form__icon"
                      src={github2}
                      alt="social-icon"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/olivier-bourgogne/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="form__icon"
                      src={linkedin2}
                      alt="social-icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="text2" className="form__box-container">
            <form ref={form} onSubmit={sendEmail} className="form__container ">
              <h1 className="form__sent">{statusMessage}</h1>
              <div className="form__input-box form__input-box--1">
                <label className="form__label" for="email">
                  Your email
                </label>
                <input
                  required="required"
                  className="form__input "
                  type="email"
                  name="email_adress"
                  placeholder="Email Adress"
                />
              </div>
              <div className="form__input-box form__input-box--2">
                <label className="form__label" for="subject">
                  Subject
                </label>
                <textarea
                  required="required"
                  className="form__subject"
                  name="subject_message"
                  placeholder="Message"
                ></textarea>
              </div>
              <input value="Send" className="form__button" type="submit" />
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Form;
