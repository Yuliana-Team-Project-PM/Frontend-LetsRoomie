// import React from 'react';
// import { mount, shallow } from 'enzyme';

// import useRoomCardinfo from '../../hooks/useRoomCardinfo';
// import { MemoryRouter } from 'react-router-dom';

// describe('Fetch API', () => {
//     beforeEach(() => {
//         fetch.resetMocks();
//     });

//     test('Llamar una API y retornar datos', () => {
//         fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    
//         useRoomCardinfo('https://google.com')
//             .then((response) => {
//                 expect(response.data).toEqual('12345')
//             });
//     });
// });

// describe('testing hooks', () => {
    
//     beforeEach(() => {
//         fetch.resetMocks();
//     });

//     // const useRoomCardinfo = shallow(<useRoomCardinfo />);
    
//     test('renders', () => {
//         fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

//         useRoomCardinfo('https://google.com')
//             .then((response) => {
//                 expect((response.data).toEqual('12345'))
//             })
//     });
// })