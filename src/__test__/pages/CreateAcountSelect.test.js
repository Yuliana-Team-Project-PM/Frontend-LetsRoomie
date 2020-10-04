import React from 'react';
import { shallow } from 'enzyme';
import CreateAcountSelect from '../../pages/CreateAcountSelect';

describe('<CreateAcountSelect />', () => {
    const createAcountSelect = shallow(<CreateAcountSelect />);

    test('Render de Selección de cuenta', () => {
        expect(createAcountSelect.length).toEqual(1);
    });

    test('Home debe contener a navbar', () => {
        expect(createAcountSelect.find('LogoHeader')).toHaveLength(1);
    });

    test('Selección de cuenta debe contener 3 links', () => {
        expect(createAcountSelect.find('Link')).toHaveLength(3);
    });
});