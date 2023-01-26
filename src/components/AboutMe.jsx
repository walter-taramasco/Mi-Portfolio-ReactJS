import React from "react";
import "./AboutMe.scss";

import { FaSass, FaReact } from "react-icons/fa";

const AboutMe = () => {
  return (
    <>
      <div className="sobremi__div">
        <h3 className="sobremi__h3">SOBRE MÍ</h3>
        <p className="sobremi__p">
          Soy autodidacta desde los 14 años, en ese momento me interese por el
          mundo de la programación, en especial la enfocada en el desarrollo
          web.
        </p>
        <p className="sobremi__p">
          🗸 En este momento estoy realizando proyectos como Desarrollador
          Frontend (<span className="sobremi__span"> HTML </span>,
          <span className="sobremi__span"> CSS </span>,
          <span className="sobremi__span"> Javascript </span>,
          <span className="sobremi__span"> SASS </span> y
          <span className="sobremi__span"> React JS </span> -todavía estoy
          aprendiendo este último-).
        </p>
        <p className="sobremi__p">
          🗸 Me gusta crear las webs desde cero (ej. sin utilizar librerías con
          elementos creados previamente), sino que prefiero disfrutar del
          proceso y aprender de este.
        </p>
        <p className="sobremi__p">
          🗸 Cada proyecto para mí fue muy significante, ya sea porque aportó
          tanto en mi experiencia como en mi aprendizaje. Pero un proyecto que
          realizó un punto de inflexión para mí fue el de la página web Cabaña
          La Pitufina, esta además de ser mi primer proyecto/trabajo fue la que
          realmente me hizo saber que esto era lo mío.
        </p>
      </div>
    </>
  );
};

export default AboutMe;
