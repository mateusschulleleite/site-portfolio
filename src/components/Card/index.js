import React from "react";
import "./Card.css";

export default function Card(props) {
  function exibesite() {
    const newIframe = document.createElement("iframe");
    newIframe.setAttribute("src", props.cardLive);
    newIframe.classList.add('iframe-open')

    const siteviewButton = document.querySelector(".siteview-button");
    siteviewButton.insertAdjacentElement("afterend", newIframe);

    const positionScreen = window.scrollY;
    const siteview = document.querySelector(".siteview");
    siteview.style.top = `${positionScreen}px`;
    siteview.classList.add("siteview-enable");

    const body = document.querySelector("body");
    body.style.overflow = "hidden";
  }
  return (
    <div className="card">
      <div className="bg">
        <div className="card-title">
          <h3>{props.cardTitle}</h3>
        </div>
        <div className="card-description">
          <p>{props.cardDescription}</p>
        </div>
        <div className="card-actions">
          <a onClick={exibesite}>Pré visualização</a>
          <a target="_blank" href={props.cardLive}>Live</a>
          <a target="_blank" href={props.cardRepo}>Repositório</a>
        </div>
      </div>
      <div className="blob"></div>
    </div>
  );
}
