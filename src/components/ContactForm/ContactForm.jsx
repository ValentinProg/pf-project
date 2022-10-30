import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";
import { Button } from "@material-ui/core";

const ContactForm = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lcgadbm",
        "template_ggvfj6g",
        form.current,
        "L-kxPOBZm5cJ4HK3C"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setDone(true);
  };

  //hide result

  setTimeout(() => {
    setDone(false);
  }, 4000);

  return (
    <form className="formWrapper" ref={form} onSubmit={sendEmail}>
      <div className="contactForm ">
        {/* <h2>Say hello!</h2> */}
        <span>Full Name</span>
        <br />
        <input type="text" name="fullName" className="formInput" required />
        <br />
        <span>Enter Email</span>
        <br />
        <input type="text" name="email" className="formInput" required />
        <br />
      </div>
      <div className="contactForm">
        <span>Message</span>
        <br />
        <textarea name="message" required></textarea>
        <br />
        <button>SUBMIT</button>
      </div>
      <div className="sentMes">
        {done &&
          "Thank you! Your message has been successfully sent. I will contact you soon"}
      </div>
    </form>
  );
};

export default ContactForm;
