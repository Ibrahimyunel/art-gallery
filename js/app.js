import { Navbar, NavResponsive } from "./navbar.js";

const navbarObj = new Navbar();
const navbarResObj = new NavResponsive();
navbarObj.onScroll();
navbarResObj.onResize();

