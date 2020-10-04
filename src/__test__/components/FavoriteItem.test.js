import React from 'react';
import { shallow } from 'enzyme';
import FavoriteItem from '../../components/FavoriteItem';

describe('<FavoriteItem />', () => {
    const favoriteItem = shallow(<FavoriteItem />);

    test('Render del componente FavoriteItem', () => {
        expect(favoriteItem.length).toEqual(1);
    });

    test('Favorite item tiene que tener 1 imagen', () => {
        expect(favoriteItem.find('img')).toHaveLength(1);
    })

    test('Favorite item tiene que tener 1 titulo', () => {
        expect(favoriteItem.find('h2').exists()).toBe(true);
    })
});