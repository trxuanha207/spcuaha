let header = document.querySelector('header');

window.addEventListener('scroll', ()=> {
    header.classList.toggle('shadow', window.scrollY > 0)
});
let menu = document.querySelector('#menu-icon');
let navbar = ducument.querySelector('.bavbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
