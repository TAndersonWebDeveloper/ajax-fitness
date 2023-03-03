import React, { useState, useEffect } from "react";
import "./ContactForm.css";
function ContactForm() {
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [mobileWindow, setMobileWindow] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 701) {
      setMobileWindow(true);
    }
  }, []);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      setNameIsValid(false);
    } else {
      setNameIsValid(true);
    }
    if (enteredEmail.length === 0 || !enteredEmail.includes("@")) {
      setEmailIsValid(false);
    } else {
      setEmailIsValid(true);
      setFormIsValid(true);
    }
    if (nameIsValid && emailIsValid) {
      console.log(formIsValid);
    }
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="form-container">
        {!mobileWindow && <div className="contact-img--container"></div>}

        <div className="contact-form--container">
          {!formIsValid && (
            <>
              <h2>Contact Us</h2>
              <input
                type="text"
                placeholder="Name*"
                required
                onChange={nameHandler}
              />
              <input
                type="email"
                placeholder="Email*"
                required
                onChange={emailHandler}
              />
              <input type="tel" placeholder="Phone Number" />
              <textarea cols="50" rows="4" placeholder="Message"></textarea>
              <label htmlFor="cars">Membership Inquiry:</label>
              <select name="membership" id="membership">
                <option value="trial">7-Day Free Trial</option>
                <option value="daily">Daily</option>
                <option value="monthly">Monthly</option>
                <option value="premium">Premium</option>
                <option value="general">General Inquiry</option>
              </select>
              <button type="submit">Submit</button>
            </>
          )}
          {formIsValid && (
            <>
              <h2>Thanks for reaching out!</h2>
              <p>We will be in touch shortly!</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
