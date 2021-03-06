import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
    const footer = mount(
        <MemoryRouter>
            <Footer />
        </MemoryRouter>
    );
    
    test('Render del componente Footer', () => {
        expect(footer.length).toEqual(1);
    });

    test('Footer tiene que tener 1 Link', () => {
        expect(footer.find('Link')).toHaveLength(1);
    })

    test('Footer tiene que tener 5 anchors', () => {
        expect(footer.find('a')).toHaveLength(5);
    })

    test('Footer Snapshot', () => {
        const footer = create(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );
        expect(footer.toJSON()).toMatchSnapshot();
    })
});