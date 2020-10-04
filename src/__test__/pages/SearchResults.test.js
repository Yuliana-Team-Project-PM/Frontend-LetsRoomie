import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from '../../pages/SearchResults';

describe('<SearchResults />', () => {
    const searchResults = shallow(<SearchResults />);

    test('Render de Search Results', () => {
        expect(searchResults.length).toEqual(1);
    });

    test('Search Results debe contener a navbar', () => {
        expect(searchResults.find('Navbar')).toHaveLength(1);
    });

    test('Search Results debe contener 1 título', () => {
        expect(searchResults.find('h2')).toHaveLength(1);
    });

    test('Search Results debe contener 1 footer', () => {
        expect(searchResults.find('Footer')).toHaveLength(1);
    });
});