import React, { useRef } from "react";
import "./Portfolio.scss";

import { AiOutlineGithub } from "react-icons/ai";
import { TbWorldShare } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";

const Proyecto = ({
  title,
  description,
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
        <h4 className="proyecto__h4">{title}</h4>
        <img src={srcImg} alt={altImg} className="proyecto__img" />
        <p className="proyecto__p">{description}</p>
        <div className="tecnologias__div">
          {tecnologias.map((tecnologia) => {
            return (
              <span className="tecnologias__span" key={tecnologia.name}>
                {tecnologia.icon}
                {tecnologia.name}
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
            <TbWorldShare />
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
          title="CABAÑA LA PITUFINA"
          description="Desarrollé y diseñé un sitio web utilizando HTML, CSS y JavaScript. El proyecto, alojado en Netlify, demuestra mi capacidad para crear estructuras sólidas con HTML, aplicar estilos modernos y responsivos con CSS, y agregar interactividad dinámica con JavaScript. Este proyecto refleja mi enfoque en la creación de experiencias de usuario intuitivas y atractivas, así como mi habilidad para implementar soluciones web desde cero, ajustándome a lo requerido por el cliente."
          srcImg="/assets/images/lapitufina.webp"
          altImg="Imagén de la página web Cabaña La Pitufina"
          tecnologias={[
            {
              name: "HTML",
              icon: <FaHtml5 className="tecnologias__span-icon" />,
            },
            {
              name: "CSS3",
              icon: <FaCss3Alt className="tecnologias__span-icon" />,
            },
            {
              name: "Javascript",
              icon: <IoLogoJavascript className="tecnologias__span-icon" />,
            },
          ]}
          linkPage="https://cabana-la-pitufina.netlify.app/"
          linkGithub="https://github.com/walter-taramasco/website-cabana-la-pitufina"
        />
      </div>
    </>
  );
};

export default Portfolio;
