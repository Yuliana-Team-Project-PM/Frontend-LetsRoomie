import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '../../components/Carousel';

describe('<Carousel />', () => {
    const carousel = shallow(<Carousel />);

    test('Render del componente Carousel', () => {
        expect(carousel.length).toEqual(1);
    });
});