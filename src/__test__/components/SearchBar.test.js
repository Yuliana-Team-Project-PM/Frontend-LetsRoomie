import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../../components/SearchBar';

describe('<SearchBar />', () => {
    const searchBar = shallow(<SearchBar />);

    test('Render del componente Search Bar', () => {
        expect(searchBar.length).toEqual(1);
    });

    test('Búsqueda tiene un input', () => {
        expect(searchBar.find('input')).toHaveLength(1);
    });
});