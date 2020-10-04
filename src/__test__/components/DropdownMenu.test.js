import React from 'react';
import { shallow } from 'enzyme';
import DropdownMenu from '../../components/DropdownMenu';

describe('<DropdownMenu />', () => {
    const dropdownMenu = shallow(<DropdownMenu />);

    test('Render del componente DropdownMenu', () => {
        expect(dropdownMenu.length).toEqual(1);
    });
});