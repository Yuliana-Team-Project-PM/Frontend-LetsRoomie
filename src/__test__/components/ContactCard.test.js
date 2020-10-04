import React from 'react';
import { shallow } from 'enzyme';
import ContactCard from '../../components/ContactCard';

describe('<ContactCard />', () => {
    const contactCard = shallow(<ContactCard />);

    test('Render del componente DropdownMenu', () => {
        expect(contactCard.length).toEqual(1);
    });
});