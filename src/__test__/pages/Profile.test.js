import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../../pages/Profile';

describe('<Profile />', () => {
    const profile = shallow(<Profile />);

    test('Render de profile', () => {
        expect(profile.length).toEqual(1);
    });
});