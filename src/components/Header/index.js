import React, { useEffect } from "react";
import "./Header.css";
import menuHamburguer from './menuHamburguer.png';
import menuClose from './menuClose.png';

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      const screenY = 30;
      if(window.scrollY >= screenY) {
        header.classList.add('header-shadow');
      } else {
        header.classList.remove('header-shadow');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleItemClick = (targetId) => {
    const targetSection = document.querySelector(targetId);
    const targetOffset = targetSection.offsetTop;
    window.scrollTo(0, targetOffset);
  };

  let menuOpened = false;

  const menuClicked = () => {
    const headerNavbar = document.querySelector('.header-navbar');
    headerNavbar.classList.toggle('navbar-opened')

    const buttonHamburguer = document.querySelector('.header-hamburger');
    buttonHamburguer.classList.toggle('hamburguer-opened');

    const menuImage = document.querySelector('.header-menu-image');

    if(menuOpened == false) {
      menuImage.setAttribute('src', menuClose)
      menuOpened = true;
    } else if(menuOpened == true){
      menuImage.setAttribute('src', menuHamburguer)
      menuOpened = false;
    }

  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-hamburger" onClick={() => menuClicked()}>
          <img className="header-menu-image" src={menuHamburguer} />
        </div>
        <div className="header-logo">
          <h1>Mateus Schulle</h1>
        </div>
        <nav className="header-navbar">
          <ul>
            <li className="header-list-item" onClick={() => handleItemClick("#Home")}>Home</li>
            <li className="header-list-item" onClick={() => handleItemClick("#Portfólio")}>Portfólio</li>
            <li className="header-list-item" onClick={() => handleItemClick("#Contato")}>Contato</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
