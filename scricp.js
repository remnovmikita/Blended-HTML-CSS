const OpenBtnMenu = document.querySelector('.btn-section-four');
const modalMenu = document.querySelector('.modal');
const CloseMdMenu = document.querySelector('.close-nav-menu');

OpenBtnMenu.addEventListener('click', () => {
    modalMenu.classList.add('is-open');
});
CloseMdMenu.addEventListener('click', () => {
    modalMenu.classList.remove('is-open');
});