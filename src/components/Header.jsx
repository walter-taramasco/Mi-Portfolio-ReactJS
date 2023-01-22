import React from "react";
import "./Header.scss";

import { RiMenu3Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  // Obtengo el valor del scrollY y con eso trabajo los eventos con el menú y
  // el botón para volver hacia arriba de la página
  const header = document.querySelector(".header");
  const headerUl = document.querySelector(".header__ul");
  const closeIcono = document.querySelector(".close__icono");
  const seccionProyectos = document.querySelector(".portafolio");
  const seccionSobreMi = document.querySelector(".sobremi");
  const seccionContacto = document.querySelector(".contacto");

  window.onscroll = function () {
    const movimientoScrollY = window.scrollY;
    if (movimientoScrollY >= 5) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  };

  //Abrir y cerrar el menú
  function abrirMenu() {
    closeIcono.classList.add("menu-abierto-icono");
    headerUl.classList.add("menu-abierto");
  }

  function cerrarMenu() {
    closeIcono.classList.remove("menu-abierto-icono");
    closeIcono.style.transition = "all 0.3s ease-in-out";
    headerUl.classList.remove("menu-abierto");
    headerUl.style.transition = "all 0.3s ease-in-out";
  }

  // Si algún <li> es clickeado que se cierre el menú
  function liProyectosClose() {
    // Redireccionar a la sección que corresponde
    seccionProyectos.scrollIntoView({ block: "center", behavior: "smooth" });
    cerrarMenu();
  }

  function liSobreMiClose() {
    // Redireccionar a la sección que corresponde
    seccionSobreMi.scrollIntoView({ block: "center", behavior: "smooth" });
    cerrarMenu();
  }

  function liContactoClose() {
    // Redireccionar a la sección que corresponde
    seccionContacto.scrollIntoView({ block: "center", behavior: "smooth" });
    cerrarMenu();
  }

  return (
    <>
      <header className="header">
        <div className="header__div">
          <img
            src="/logo.png"
            alt="logo Walter Taramasco"
            className="header__img"
          />
          <ul className="header__ul">
            <li className="header__li" onClick={liProyectosClose}>
              PROYECTOS
            </li>
            <li className="header__li" onClick={liSobreMiClose}>
              SOBRE MÍ
            </li>
            <li className="header__li" onClick={liContactoClose}>
              CONTACTO
            </li>
          </ul>
          <button className="header__button close" onClick={cerrarMenu}>
            <AiOutlineClose className="close__icono" />
          </button>
          <button className="header__button menu" onClick={abrirMenu}>
            <RiMenu3Line className="menu__icono" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
