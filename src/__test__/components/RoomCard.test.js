import React from 'react';
import { shallow } from 'enzyme';
import RoomCard from '../../components/RoomCard';

describe('<RoomCard />', () => {
    const roomCard = shallow(<RoomCard />);

    test('Render del componente Room Card', () => {
        expect(roomCard.length).toEqual(1);
    });

    test('Room Card tiene que tener 2 imagen', () => {
        expect(roomCard.find('img')).toHaveLength(2);
    });
})