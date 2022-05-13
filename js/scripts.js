const menu = document.querySelector(".burger-container");

const active = () => menu.classList.toggle('active'); // o método "toggle" adiciona um elemento no html caso o mesmo não exista

menu.addEventListener('click', active);