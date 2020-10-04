import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../pages/Login';

describe('<Login />', () => {
    const login = shallow(<Login />);

    test('Render de login', () => {
        expect(login.length).toEqual(1);
    });

    // test('Favoritos debe contener a navbar', () => {
    //     expect(login.find('LogoHeader')).toHaveLength(1);
    // });

    // test('Favoritos debe contener 1 título', () => {
    //     expect(login.find('h1')).toHaveLength(1);
    // });
});