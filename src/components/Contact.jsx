import React from "react";
import "./Contact.scss";

import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <section className="container__section contacto" id="contacto">
        <h4 className="contacto__h4">CONTACTO</h4>
        <div className="contacto__div">
          <a
            href="https://www.linkedin.com/in/walter-taramasco-4048b0203/"
            className="contacto__link"
          >
            <AiOutlineLinkedin />
          </a>
          <a
            href="https://github.com/walter-taramasco"
            className="contacto__link"
            target="_blank"
          >
            <AiOutlineGithub />
          </a>
          <a
            href="mailto:contacto.walterweb@gmail.com"
            className="contacto__link"
            target="_blank"
          >
            <AiOutlineMail />
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
