import React from "react";
import "./Portfolio.css";
import Card from "../Card";
import SiteView from "../SiteView";

export default function Portfólio() {
  return (
    <section id="Portfólio" className="portfolio">
      <SiteView />
      <div className="container">
        <div className="portfolio-title">
          <h2>Projetos particulares e em cursos que ja realizei.</h2>
        </div>
        <div className="portolio-projects">
          <Card
            cardTitle="Crivelo - Landing Page"
            cardDescription="Site para venda de cadeiras ergonomicas"
            cardLive="https://www.crivelo.com.br"
            cardRepo="https://www.crivelo.com.br"
          />
          <Card
            cardTitle="Ergo I - Landing Page"
            cardDescription="Site para venda de cadeiras ergonomicas"
            cardLive="https://www.crivelo.com.br/ergoi"
            cardRepo="https://www.crivelo.com.br/ergoi"
          />
          <Card
            cardTitle="Ergo Basic - Landing Page"
            cardDescription="Site para venda de cadeiras ergonomicas"
            cardLive="https://www.crivelo.com.br/ergo-basic"
            cardRepo="https://www.crivelo.com.br/ergo-basic"
          />
          <Card
            cardTitle="Fitness Power - Landing Page"
            cardDescription="Site para divulgação de academia"
            cardLive="https://landingpage-fitness-power.vercel.app/"
            cardRepo="https://github.com/mateusschulleleite/landingpage-fitness-power"
          />
          <Card
            cardTitle="Nutricionista - Landing Page"
            cardDescription="Site para nutricionista"
            cardLive="https://landingpage-camila-almeida.vercel.app/"
            cardRepo="https://github.com/mateusschulleleite/landingpage-camila-almeida"
          />
          <Card
            cardTitle="Meteora"
            cardDescription="O projeto Meteora foi criado totalmente com a biblioteca Bootstrap, em um curso de Bootstrap que realizei na Alura"
            cardLive="https://meteora-mateusschulleleite.vercel.app"
            cardRepo="https://github.com/mateusschulleleite/meteora"
          />
          <Card
            cardTitle="Clone Netflix"
            cardDescription="O clone da Netflix é um projeto 100% autoral, nele utilizei React e a biblioteca Swiper. Os dados de login são, email: teste@netflixclone.com.br e senha: 12345678"
            cardLive="https://clone-netflix-mateusschulleleite.vercel.app"
            cardRepo="https://github.com/mateusschulleleite/clone-netflix"
          />
          <Card
            cardTitle="Projeto portfólio"
            cardDescription="Página portfolio criada em andamento de curso na Alura"
            cardLive="https://projeto-curso-portfolio.vercel.app"
            cardRepo="https://github.com/mateusschulleleite/curso-projeto-portfolio"
          />
          <Card
            cardTitle="Calculadora de IMC"
            cardDescription="Projeto pessoal para calcular o IMC pessoal de cada pessoa"
            cardLive="https://calculadora-de-imc-xi-steel.vercel.app"
            cardRepo="https://github.com/mateusschulleleite/calculadora-de-imc"
          />
          <Card
            cardTitle="Página de Cadastro"
            cardDescription="Página criada para preencher e validar informações de cadastro em curso na Alura"
            cardLive="https://curso-cadastro.vercel.app/"
            cardRepo="https://github.com/mateusschulleleite/curso-cadastro"
          />
          <Card
            cardTitle="Alura Books"
            cardDescription="Ecommerce de livros criado em curso na Alura"
            cardLive="https://curso-alura-books-tawny.vercel.app/"
            cardRepo="https://github.com/mateusschulleleite/curso-alura-books"
          />
          <Card
            cardTitle="Métodos de Array"
            cardDescription="Página criada para validação de varios tipos de array em curso na Alura"
            cardLive="https://curso-metodos-de-array.vercel.app/"
            cardRepo="https://github.com/mateusschulleleite/curso-metodos-de-array"
          />
          <Card
            cardTitle="Validação de formulários"
            cardDescription="Página criada para validação de formulario em curso na Alura"
            cardLive="https://curso-validacao-formularios.vercel.app/"
            cardRepo="https://github.com/mateusschulleleite/curso-validacao-formularios"
          />
          <Card
            cardTitle="Jogo número secreto"
            cardDescription="Jogo criado em curso na alura para validação e utilização do microfone para jogar"
            cardLive="https://curso-jogo-numero-secreto.vercel.app/"
            cardRepo="https://github.com/mateusschulleleite/curso-jogo-numero-secreto"
          />
          <Card
            cardTitle="Organo"
            cardDescription="Página criada em curso organizacional de times, criada com React"
            cardLive="https://organo-mateusschulleleite.vercel.app/"
            cardRepo="https://github.com/mateusschulleleite/curso-organo"
          />
        </div>
      </div>
    </section>
  );
}
