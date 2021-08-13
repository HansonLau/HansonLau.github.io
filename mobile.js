const menu = document.querySelector('#mobileMenu');
const items = document.querySelector('.navbarOptions');
const home = document.querySelector('#name');

const back = document.querySelector('.backPage');

const print = () => {
    console.log("hi");
}

back.addEventListener('click', print);

const openMenu = () => {
    menu.classList.toggle('is-active');
    items.classList.toggle('active');
};

menu.addEventListener('click', openMenu);

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle('is-active');
      items.classList.remove('active');
    }
};
  
items.addEventListener('click', hideMobileMenu);
home.addEventListener('click', hideMobileMenu);