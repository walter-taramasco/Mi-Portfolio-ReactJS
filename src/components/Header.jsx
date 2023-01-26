import React, { useState } from "react";
import "./Header.scss";

import { RiMenu3Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const mediaQueryMobile = window.matchMedia("(max-width: 480px)");

  // Manejar menú
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Utilizar el dato del scroll para añadir efecto tanto al header como al botón para ir al principio de la página
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (this.scrollY >= 80) header.classList.add("fixed");
    else header.classList.remove("fixed");
  });

  // Si la el ancho de la pantalla es como máximo 480px, ejecutar este código, lo que hace es que cada vez que presionemos los li se cierre el menú
  function cerrarMenu() {
    handleToggle();
  }

  return (
    <>
      <div className="header__div">
        <img
          src="/logo.webp"
          alt="logo Walter Taramasco"
          className="header__img"
        />
        <ul className={`header__ul ${navbarOpen ? " show-menu" : ""}`}>
          <li className="header__li">
            <a href="#proyectos" onClick={cerrarMenu}>
              PROYECTOS
            </a>
          </li>
          <li className="header__li">
            <a href="#sobre-mi" onClick={cerrarMenu}>
              SOBRE MÍ
            </a>
          </li>
          <li className="header__li">
            <a href="#contacto" onClick={cerrarMenu}>
              CONTACTO
            </a>
          </li>
        </ul>
        <button className="header__button close" title="Cerrar Menú">
          <AiOutlineClose
            className={`close__icono ${navbarOpen ? " show-icono-close" : ""}`}
            onClick={handleToggle}
          />
        </button>
        <button className="header__button open" title="Abrir Menú">
          <RiMenu3Line className="menu__icono" onClick={handleToggle} />
        </button>
      </div>
    </>
  );
};

export default Header;
