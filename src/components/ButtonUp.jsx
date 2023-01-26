import React from "react";
import "./ButtonUp.scss";

import { RxCaretUp } from "react-icons/rx";

const ButtonUp = () => {
  window.addEventListener("scroll", function () {
    const divUp = document.querySelector(".div__up");

    if (this.scrollY >= 80) divUp.classList.add("visible");
    else divUp.classList.remove("visible");
  });
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
};

export default ButtonUp;
