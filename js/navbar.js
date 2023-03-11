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

export class NavResponsive {
    constructor() {
        this.navbarList = document.getElementById("navbar_list");
        this.openMenu = document.getElementById("open_menu");
        this.closeMenu = document.getElementById("close_menu");
    }

    resNav = (e) => {
        if (e.target.id.includes('open_menu')) {
            this.navbarList.classList.add('navbar-res');
            this.openMenu.style.display = 'none';
            this.closeMenu.style.display = 'block';
        } else {
            this.navbarList.classList.remove('navbar-res');
            this.openMenu.style.display = 'block';
            this.closeMenu.style.display = 'none';
        }
    }

    windowResize = () => {
        console.log(window.innerWidth);
        if (window.innerWidth >= 770) {
            this.openMenu.style.display = 'none';
            if (this.closeMenu.style.display === 'block') {
                this.navbarList.classList.remove('navbar-res');
                this.closeMenu.style.display = 'none';
            }
        } else {
            this.openMenu.style.display = 'block';
        }
    }

    onResize() {
        this.openMenu.addEventListener('click', this.resNav);
        this.closeMenu.addEventListener('click', this.resNav);
        window.addEventListener('resize', this.windowResize)
    }
}