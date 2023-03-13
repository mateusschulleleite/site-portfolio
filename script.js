const menuHamburguer = document.querySelector('.cabecalho__menu-hamburguer');
const menu = document.querySelector('.cabecalho__menu');

menuHamburguer.addEventListener('click', () => {
    menu.classList.toggle('cabecalho__menu--ativo');
    menuHamburguer.classList.toggle('cabecalho__menu-hamburguer--ativo');
})

const menuOpcao = document.querySelectorAll('.menu__item');

menuOpcao.forEach(opcao => {
    opcao.addEventListener('click', () => {
        menu.classList.toggle('cabecalho__menu--ativo');
        menuHamburguer.classList.toggle('cabecalho__menu-hamburguer--ativo');
    })
})