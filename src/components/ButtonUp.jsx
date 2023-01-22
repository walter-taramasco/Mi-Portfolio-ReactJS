import React from "react";
import "./ButtonUp.scss";

import { RxCaretUp } from "react-icons/rx";

export function ButtonUp() {
  window.onscroll = function () {
  var botonUp = document.querySelector(".div__up");
    var movimientoScrollY = window.scrollY;
    if (movimientoScrollY >= 5) {
      botonUp.classList.add("visible");
    } else {
      botonUp.classList.remove("visible");
    }
  };
  // Función para volver hacia arriba de la página
  function Up() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      <div className="div__up">
        <RxCaretUp onClick={Up} />
      </div>
    </>
  );
}
