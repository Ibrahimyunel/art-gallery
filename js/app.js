import { Navbar } from "./navbar.js";

const navbarObj = new Navbar();
navbarObj.onScroll();

const navbarList = document.getElementById("navbar_list");
const openMenu = document.getElementById("open_menu");
const closeMenu = document.getElementById("close_menu");

function resNav(e) {
    if (e.target.id.includes('open_menu')) {
        navbarList.classList.add('navbar-res');
        openMenu.style.display = 'none';
        closeMenu.style.display = 'block';
    } else {
        navbarList.classList.remove('navbar-res');
        openMenu.style.display = 'block';
        closeMenu.style.display = 'none';
    }
}

function windowResize() {
    console.log(window.innerWidth);
    if (window.innerWidth >= 770) {
        openMenu.style.display = 'none';
        if (closeMenu.style.display === 'block') {
            navbarList.classList.remove('navbar-res');
            closeMenu.style.display = 'none';
        }
    } else {
        openMenu.style.display = 'block';
    }
}

openMenu.addEventListener('click', resNav);
closeMenu.addEventListener('click', resNav);
window.addEventListener('resize', windowResize)

