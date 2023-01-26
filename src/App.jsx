import React from "react";

/* Componentes */
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import ButtonUp from "./components/ButtonUp";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import "./index.scss";

const App = () => {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <div className="container">
        <section className="container__section inicio">
          <Home />
        </section>
        <section className="container__section portafolio" id="proyectos">
          <Portfolio />
        </section>
        <section className="container__section sobre-mi" id="sobre-mi">
          <AboutMe />
        </section>
        <section className="container__section contacto" id="contacto">
          <Contact />
        </section>
      </div>
      <ButtonUp />
    </>
  );
};

export default App;
