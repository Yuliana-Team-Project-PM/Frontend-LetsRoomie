import React from 'react';
import { shallow } from 'enzyme';
import Favorites from '../../pages/Favorites';

describe('<Favorites />', () => {
    const favorites = shallow(<Favorites />);

    test('Render de págona de favoritos', () => {
        expect(favorites.length).toEqual(1);
    });

    test('Favoritos debe contener a navbar', () => {
        expect(favorites.find('Navbar')).toHaveLength(1);
    });

    test('Favoritos debe contener 1 título', () => {
        expect(favorites.find('h1')).toHaveLength(1);
    });
});