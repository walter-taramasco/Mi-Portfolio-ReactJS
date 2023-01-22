import React from "react";
import "./AboutMe.scss";

import { FaSass, FaReact } from "react-icons/fa";

const AboutMe = () => {
  return (
    <>
      <section className="container__section sobremi">
        <div className="sobremi__div">
          <h4 className="sobremi__h4">SOBRE MÍ</h4>
          <p className="sobremi__p">
            Me considero un apasionado por la tecnología desde muy pequeño, este
            gusto hizo que a los 13 años descubra acerca del desarrollo web y
            desde ese momento continúo en esta área.
          </p>
          <p className="sobremi__p">
            Me gusta crear las webs desde cero (ej. sin utilizar librerías con
            elementos creados previamente), sino que prefiero disfrutar del
            proceso y aprender de este.
          </p>
          <p className="sobremi__p">
            Cada proyecto para mí fue muy significante, ya sea porque aportó
            tanto en mi experiencia como en mi aprendizaje. Pero un proyecto que
            realizó un punto de inflexión para mí fue el de la página web Cabaña
            La Pitufina, este además de ser mi primer proyecto fue el que
            realmente me hizo saber que esto era lo mío.
          </p>
          <div className="tecnologias__div aprendiendo tecnologia">
            <p className="aprendiendo__p">Aprendiendo...</p>
            <div className="aprendiendo__div">
              <div className="tecnologia__div">
                <FaSass className="tecnologia__icono" />
              </div>
              <div className="tecnologia__div">
                <FaReact className="tecnologia__icono" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
