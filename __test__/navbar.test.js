import { Navbar, NavResponsive } from '../js/navbar.js';

describe('test class', () => {
    const navbarObj = new Navbar();
    test('it should be object', () => {
        expect(typeof navbarObj.navbar).toBe('object');
    });

    const navbarResObj = new NavResponsive();
    test('it should be function', () => {
        expect(typeof navbarResObj.onResize).toBe('function');
    });
});


