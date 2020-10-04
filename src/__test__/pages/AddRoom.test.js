import React from 'react';
import { shallow } from 'enzyme';
import AddRoom from '../../pages/AddRoom';

describe('<CreateAcountSelect />', () => {
    const addRoom = shallow(<AddRoom />);

    test('Render de Add Room', () => {
        expect(addRoom.length).toEqual(1);
    });

    test('Add Room debe contener a navbar', () => {
        expect(addRoom.find('Navbar')).toHaveLength(1);
    });

    test('Selección de cuenta debe contener 1 form', () => {
        expect(addRoom.find('form')).toHaveLength(1);
    });
});