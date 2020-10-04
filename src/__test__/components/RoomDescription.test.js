import React from 'react';
import { shallow } from 'enzyme';
import RoomDescription from '../../components/RoomDescription';

describe('<RoomDescription />', () => {
    const roomDescription = shallow(<RoomDescription />);

    test('Render del componente RoomDescription', () => {
        expect(roomDescription.length).toEqual(1);
    });

    test('RoomDescription tiene que tener 1 titulo', () => {
        expect(roomDescription.find('h2')).toHaveLength(1);
    })
});