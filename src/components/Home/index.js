import React from "react";
import "./Home.css";
import arrow from './arrow.png';

export default function Home() {
  return (
    <section id="Home" className="home">
      <div className="container">
        <div className="home-description">
          <h2>Desenvolvedor<br></br>Frontend</h2>
          <p>Sou um desenvolvedor front-end apaixonado pela criação de interfaces intuitivas e responsivas. Com habilidades em diversas linguages, busco sempre aprimorar a experiência do usuário através de design e funcionalidade harmoniosos.</p>
        </div>
        <div className="home-more">
          <p>Descubra um pouco mais sobre o que eu faço</p>
          <img src={arrow} alt="Seta" />
        </div>
      </div>
    </section>
  );
}
