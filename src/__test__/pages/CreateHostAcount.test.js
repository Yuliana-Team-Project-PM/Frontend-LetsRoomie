import React from 'react';
import { shallow } from 'enzyme';
import CreateHostAccount from '../../pages/CreateHostAccount';

describe('<CreateHostAccount />', () => {
    const createHostAccount = shallow(<CreateHostAccount />);

    test('Render de Create Guest Account', () => {
        expect(createHostAccount.length).toEqual(1);
    });

    test('Add Room debe contener a navbar', () => {
        expect(createHostAccount.find('LogoHeader')).toHaveLength(1);
    });

    test('Crear cuenta guest debe contener 1 form', () => {
        expect(createHostAccount.find('form')).toHaveLength(1);
    });
});