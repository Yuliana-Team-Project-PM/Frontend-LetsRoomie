import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../../components/Navbar';


describe('<Navbar />', () => {
    const navbar = shallow(<Navbar />);

    test('Render de componente Navbar', () => {
        expect(navbar.length).toEqual(1);
    });

    test('Navbar contiene el logo', () => {
        expect(navbar.find('img').exists()).toBe(true);
    });

    test('Navbar contiene 1 elemento header', () => {
        expect(navbar.find('header')).toHaveLength(1);
    });

    test('Navbar contiene 1 nav', () => {
        expect(navbar.find('nav')).toHaveLength(1);
    });
    
    test('Navbar contiene 1 list', () => {
        expect(navbar.find('ul').exists()).toBe(true);
    });
    
    test('Navbar contiene style', () => {
        expect(navbar.find('header').hasClass('Header')).toBe(true);
    });
});