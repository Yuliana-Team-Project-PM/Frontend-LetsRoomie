import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../pages/Home';

describe('<Home />', () => {
    const home = shallow(<Home />);

    test('Render del Home', () => {
        expect(home.length).toEqual(1);
    });

    test('Home debe contener a navbar', () => {
        expect(home.find('Navbar')).toHaveLength(1);
    });

    test('Home debe contener barra de búsqueda', () => {
        expect(home.find('SearchBar')).toHaveLength(1);
    });

    test('Home debe contener un Hero', () => {
        expect(home.find('Hero')).toHaveLength(1);
    });

    test('Home debe contener un Footer', () => {
        expect(home.find('Footer')).toHaveLength(1);
    });

    test('Home debe contener 1 main', () => {
        expect(home.find('main')).toHaveLength(1);
    });
});