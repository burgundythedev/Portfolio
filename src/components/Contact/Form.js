import React from "react";
import "./Form.scss";
import FormWrapper from "../../UI/FormWrapper";
import astroMan from "../../UI/Image/astronaut-white.png";

const Form = () => {
  return (
    <FormWrapper>
      <div id="contact" className="form">
        <div className="form__container form__container--1">
          <h1 className="form__title form__title--1">Contact</h1>
          <p className="form__title form__title--2">"Open to work!"</p>
          <img src={astroMan} alt="astronaut-icon" />
        </div>
        <div className="form__container form__container--2">
          <form className="form__form-container">
            <h1 className="form__title form__title--3">Contact Me 🚀</h1>
            <div className="form__input-box form__input-box--1">
              <label className="form__label" for="fname">
                First Name
              </label>
              <input
                className="form__input "
                type="text"
                name="firstname"
                placeholder="Your name"
              />
            </div>
            <div className="form__input-box form__input-box--2">
              <label className="form__label" for="lname">
                Last Name
              </label>
              <input
                className="form__input"
                type="text"
                name="lastname"
                placeholder="Your last name"
              />
            </div>
            <div className="form__input-box form__input-box--3">
              <label className="form__label" for="subject">
                Subjects :
              </label>
              <textarea
                className="form__input"
                id="subject"
                name="subject"
                placeholder="Message"
              ></textarea>
            </div>
            <input className="form__button" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </FormWrapper>
  );
};

export default Form;
