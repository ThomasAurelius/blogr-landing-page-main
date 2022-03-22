const btnClose = document.querySelector('.btn-close');
const menu = document.querySelector('.menu');
const btnMenuIcon = document.querySelector('.menu-icon');

btnClose.addEventListener('click', displayMenu);
btnMenuIcon.addEventListener('click', displayMenu);

function displayMenu() {
    menu.classList.toggle('menu-hide');
    btnMenuIcon.classList.toggle('menu-icon-hide');
}