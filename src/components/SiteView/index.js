import React from "react";
import "./SiteView.css";
import buttonClose from "./buttonClose.png";

export default function SiteView() {
function teste() {
    const siteview = document.querySelector(".siteview");
    siteview.classList.remove("siteview-enable");

    const body = document.querySelector("body");
    body.style.overflowY = "scroll";

    const iframe = document.querySelector('.iframe-open');
    iframe.remove();
}

  return (
    <div className="siteview">
      <div className="siteview-visualizacao">
        <img
          className="siteview-button"
          src={buttonClose}
          onClick={teste}
          alt="Botao de fechar"
        />
      </div>
    </div>
  );
}
