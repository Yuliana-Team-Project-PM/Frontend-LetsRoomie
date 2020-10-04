import React from 'react';
import { shallow } from 'enzyme';
import FavoriteButton from '../../components/FavoriteButton';

describe('<FavoriteButton />', () => {
    const favoriteButton = shallow(<FavoriteButton />);

    test('Render del componente botón de favoritos', () => {
        expect(favoriteButton.length).toEqual(1);
    });

    test('Favorite button tiene que tener 1 Link', () => {
        expect(favoriteButton.find('Link')).toHaveLength(1);
    })
});