import React, { useState, useRef, useEffect } from "react";
import "./Form.scss";
import FormWrapper from "../../UI/FormWrapper";
import emailjs from "@emailjs/browser";
import astroMan from "../../UI/Image/astronaut-white.png";

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

  return (
    <React.Fragment>
      <FormWrapper>
        <div id="contact" className="form">
          <h1 className="form__title form__title--1">Contact</h1>
          <p className="form__status">
            Get In Touch! I’m currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll get back to you!
          </p>
          <div className="form__card">
            <div className="form__container form__container--2">
              <div class="drops">
                <div className="form__drop form__drop--1"></div>
                <div className="form__drop form__drop--2"></div>
                <div className="form__drop form__drop--3"></div>
                <div className="form__drop form__drop--4"></div>
              </div>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="form__form-container"
              >
                <h1 className="form__sent">{statusMessage}</h1>
                <div className="form__input-box form__input-box--1">
                  <label className="form__label" for="email">
                    Your email:
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
                    Subject :
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
              <div className="form__container form__container--3">
                <img
                  className="form__icon"
                  src={astroMan}
                  alt="astronaut-icon"
                />
                <h1 className="form__location">Paris, France</h1>
              </div>
            </div>
          </div>
        </div>
      </FormWrapper>
    </React.Fragment>
  );
};

export default Form;
