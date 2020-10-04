import React from 'react';
import { shallow } from 'enzyme';
import LogoHeader from '../../components/LogoHeader';


describe('<LogoHeader />', () => {
    const logoHeader = shallow(<LogoHeader />);

    test('Render de componente Logo Header', () => {
        expect(logoHeader.length).toEqual(1);
    });

    test('Logo header contiene una imagen', () => {
        expect(logoHeader.find('img').exists()).toBe(true);
    });

    test('Logo header contiene 1 link', () => {
        expect(logoHeader.find('Link')).toHaveLength(1);
    });
});