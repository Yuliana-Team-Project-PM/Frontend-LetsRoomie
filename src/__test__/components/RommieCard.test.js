import React from 'react';
import { shallow } from 'enzyme';
import RoomieCard from '../../components/RoomieCard';

describe('<RoomieCard />', () => {
    const roomieCard = shallow(<RoomieCard />);

    test('Render del componente Roomie Card', () => {
        expect(roomieCard.length).toEqual(1);
    });

    test('Roomie card tiene que tener 1 imagen', () => {
        expect(roomieCard.find('img')).toHaveLength(1);
    })

    test('Roomie card tiene que tener 3 sections', () => {
        expect(roomieCard.find('section')).toHaveLength(3);
    })
});