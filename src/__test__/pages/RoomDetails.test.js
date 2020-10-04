import React from 'react';
import { shallow } from 'enzyme';
import RoomDetails from '../../pages/RoomDetails';

describe('<RoomDetails />', () => {
    const roomDetails = shallow(<RoomDetails />);

    test('Render de página Room Details', () => {
        expect(roomDetails.length).toEqual(1);
    });

    // test('Room Details debe contener a navbar', () => {
    //     expect(roomDetails.find('LogoHeader')).toHaveLength(1);
    // });

    // test('Room Detailsdebe contener el Carousel', () => {
    //     expect(roomDetails.find('Carousel')).toHaveLength(1);
    // });

    // test('Room Details debe contener 1 footer', () => {
    //     expect(roomDetails.find('Footer')).toHaveLength(1);
    // });
});