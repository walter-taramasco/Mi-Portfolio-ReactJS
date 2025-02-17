import React from "react";
import "./AboutMe.scss";

import { FaSass, FaReact } from "react-icons/fa";

const AboutMe = () => {
  return (
    <>
      <div className="sobremi__div">
        <h3 className="sobremi__h3">SOBRE MÍ</h3>
        <p className="sobremi__p">
          🗸 En este momento estoy realizando proyectos como Desarrollador
          Frontend (<span className="sobremi__span"> HTML </span>,
          <span className="sobremi__span"> CSS </span>,
          <span className="sobremi__span"> Javascript </span>,
          <span className="sobremi__span"> SASS </span> y
          <span className="sobremi__span"> React JS </span> -aprendiendo este último-).
        </p>
        <p className="sobremi__p">
          🗸 Intereses profesionales: Especializarme en desarrollo front-end y diseño de experiencias de usuario (UX), contribuyendo a soluciones digitales innovadoras.
        </p>
        <p className="sobremi__p">
          🗸 Objetivo profesional: Contribuir al desarrollo de soluciones tecnológicas que impacten positivamente en la sociedad, mientras continúo creciendo en el campo de la ingeniería y la tecnología.
        </p>
      </div>
    </>
  );
};

export default AboutMe;
