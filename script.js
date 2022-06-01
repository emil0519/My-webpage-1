const navToggle = document.querySelector('.header-button');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});