import { Navbar } from '../js/navbar.js';

describe('test class', () => {
    const navbarObj = new Navbar();
    test('it should read as element', () => {
        expect(typeof navbarObj.navbar).toBeTruthy();
    });
});


