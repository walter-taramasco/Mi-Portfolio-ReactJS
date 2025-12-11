import React from "react";
import "./Home.scss";

import { BiDownload, BiMessageDots } from "react-icons/bi";

const Home = () => {
  return (
    <>
      <div className="inicio__div texto">
        <img
          className="inicio__img"
          src="/assets/images/fotoDeWalter.webp"
          alt="foto de Walter Taramasco"
        />
        <div className="texto__div botones">
          <p className="texto__p">Hola, mi nombre es</p>
          <h1 className="texto__h1">WALTER TARAMASCO</h1>
          <h2 className="texto__h2">Desarrollador Frontend</h2>
          <div className="botones__div">
            {/*
            <a
               className="botones__a"
              download
              href="/assets/docs/CV_Walter_Taramasco.pdf"
              title="Descarga el PDF"
            >
              Descarga mi CV <BiDownload className="botones__a--icon" />
            </a>
            */}

            <a
              className="botones__a contactar-conmigo"
              title="Contacta conmigo"
              href="#contacto"
            >
              ¡Contacta conmigo! <BiMessageDots className="botones__a--icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
