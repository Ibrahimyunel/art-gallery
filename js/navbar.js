export class Navbar {
    constructor() {
        this.navbar = document.getElementById("navbar");
    }

    navScroll() {
        if (window.scrollY >= 100) {
            this.navbar.classList.add("nav-scroll");
        } else {
            this.navbar.classList.remove("nav-scroll");
        }
    }

    onScroll() {
        window.addEventListener('scroll', this.navScroll);
    }
}
