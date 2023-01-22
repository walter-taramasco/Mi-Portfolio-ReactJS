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
      <Header />
      <div className="container">
        <Home />
        <Portfolio />
        <AboutMe />
        <Contact />
      </div>
      <ButtonUp />
    </>
  );
};

export default App;
