import React from 'react';
import { shallow } from 'enzyme';
import CreateGuestAccount from '../../pages/CreateGuestAccount';

describe('<CreateGuestAccount />', () => {
    const createGuestAccount = shallow(<CreateGuestAccount />);

    test('Render de Create Guest Account', () => {
        expect(createGuestAccount.length).toEqual(1);
    });

    test('Add Room debe contener a navbar', () => {
        expect(createGuestAccount.find('LogoHeader')).toHaveLength(1);
    });

    test('Crear cuenta guest debe contener 1 form', () => {
        expect(createGuestAccount.find('form')).toHaveLength(1);
    });
});