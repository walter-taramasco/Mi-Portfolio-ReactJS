import React from "react";
import "./Header.scss";

import { RiMenu3Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  // Obtengo el valor del scrollY y con eso trabajo los eventos con el menú y
  // el botón para volver hacia arriba de la página
  var header = document.querySelector(".header");
  var headerUl = document.querySelector(".header__ul");
  var closeIcono = document.querySelector(".close__icono");

  window.onscroll = function () {
    var movimientoScrollY = window.scrollY;
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
            <a href="#proyectos">
              <li className="header__li">PROYECTOS</li>
            </a>
            <a href="#sobremi" className="header__a">
              <li className="header__li">SOBRE MÍ</li>
            </a>
            <a href="#contacto">
              <li className="header__li">CONTACTO</li>
            </a>
          </ul>
          <button className="header__button close">
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
