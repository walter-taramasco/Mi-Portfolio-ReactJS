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
      <h3 className="contacto__h3">CONTACTO</h3>
      <div className="contacto__div">
        <a
          href="https://www.linkedin.com/in/walter-taramasco/"
          className="contacto__link"
          target="_blank"
          aria-label="Link que redirecciona hacia mi perfil de LinkedIn"
        >
          <AiOutlineLinkedin />
        </a>
        <a
          href="https://github.com/walter-taramasco"
          className="contacto__link"
          target="_blank"
          aria-label="Link que redirecciona hacia mi perfil de Github"
        >
          <AiOutlineGithub />
        </a>
        <a
          href="mailto:contacto.walterweb@gmail.com"
          className="contacto__link"
          target="_blank"
          aria-label="Link para enviarme un mail"
        >
          <AiOutlineMail />
        </a>
      </div>
    </>
  );
};

export default Contact;
