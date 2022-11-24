import React from "react";
import "./Form.scss";
import FormWrapper from "../../UI/FormWrapper";

const Form = () => {
  return (
    <FormWrapper>
      <h1>Contact</h1>
      <p>Open to work</p>
      <div className="form__container">
        <form className="form__form">
          <h1 className="form__title">Contact Me</h1>
          <label for="fname">First Name</label>
          <input type="text" name="firstname" placeholder="Your name" />
          <label for="lname">Last Name</label>
          <input type="text" name="lastname" placeholder="Your last name.." />
          <label for="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Message"
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
        {/* <div class="drops">
          <div class="drop drop-1"></div>
          <div class="drop drop-2"></div>
          <div class="drop drop-3"></div>
          <div class="drop drop-4"></div>
          <div class="drop drop-5"></div>
        </div> */}
      </div>
    </FormWrapper>
  );
};

export default Form;
