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
      <h4 className="contacto__h4">CONTACTO</h4>
      <div className="contacto__div">
        <a
          href="https://www.linkedin.com/in/walter-taramasco/"
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
    </>
  );
};

export default Contact;
