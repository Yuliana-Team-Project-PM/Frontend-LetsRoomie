import React from 'react';
import { shallow } from 'enzyme';
import VerticalBanner from '../../components/VerticalBanner';

describe('<VerticalBanner />', () => {
    const verticalBanner = shallow(<VerticalBanner />);

    test('Render del componente Vertical Banner', () => {
        expect(verticalBanner.length).toEqual(1);
    });

    test('Vertical Banner contiene 1 imagen', () => {
        expect(verticalBanner.find('img')).toHaveLength(1);
    });
});