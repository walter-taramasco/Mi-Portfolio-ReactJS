import React, { useRef } from "react";
import "./Portfolio.scss";

import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

const Proyecto = ({
  title,
  srcImg,
  altImg,
  tecnologias,
  linkGithub,
  linkPage,
  keyProyecto,
}) => {
  return (
    <>
      <div className="proyecto__div tecnologias links" key={keyProyecto}>
        <img src={srcImg} alt={altImg} className="proyecto__img" />
        <p className="proyecto__p">{title}</p>
        <div className="tecnologias__div">
          {tecnologias.map((tecnologia) => {
            return (
              <span className="tecnologias__span" key={tecnologia}>
                {tecnologia}
              </span>
            );
          })}
        </div>
        <div className="links__div">
          {linkGithub ? (
            <a
              href={linkGithub}
              className="links__a"
              target="__blank"
              aria-label="link para redireccionar hacia el repositorio del proyecto"
            >
              <AiOutlineGithub />
            </a>
          ) : (
            false
          )}
          <a
            href={linkPage}
            className="links__a"
            target="__blank"
            aria-label="link para redireccionar hacia la página del proyecto"
          >
            <AiOutlineLink />
          </a>
        </div>
      </div>
    </>
  );
};

const Portfolio = () => {
  return (
    <>
      <h3 className="portafolio__h3">PROYECTOS</h3>
      <div className="portafolio__div proyecto">
        <Proyecto
          keyProyecto="Cabaña La Pitufina"
          title="Cabaña La Pitufina"
          srcImg="/assets/images/lapitufina.webp"
          altImg="Imagén de la página web Cabaña La Pitufina"
          tecnologias={["HTML", "CSS3", "Javascript"]}
          linkPage="https://cabana-la-pitufina.netlify.app/"
        />
        <Proyecto
          keyProyecto="To Do List"
          title="To Do List"
          srcImg="/assets/images/todolist.webp"
          altImg="Imagén de la página web To Do List"
          tecnologias={["HTML", "CSS3", "Javascript"]}
          linkGithub="https://github.com/walter-taramasco/To-Do-List"
          linkPage="https://todolist-by-walter.netlify.app/"
        />
      </div>
    </>
  );
};

export default Portfolio;
