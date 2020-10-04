import React from 'react';
import { shallow } from 'enzyme';
import Hero from '../../components/Hero';
import { MemoryRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';


describe('<Hero />', () => {
    const hero = shallow(<Hero />);
    // const hero = mount(
    //     <MemoryRouter>
    //         <Hero />
    //     </MemoryRouter>
    // );

    test('Render de componente Hero', () => {
        expect(hero.length).toEqual(1);
    });

    test('Hero contiene un Link', () => {
        expect(hero.find('Link')).toHaveLength(1);
    });

    test('Hero contiene un botón', () => {
        expect(hero.find('button')).toHaveLength(1);
    });

    test('Hero, título correcto', () => {
        expect(hero.find('h1').text()).toEqual('Te ayudamos a encontrar tu espacio ideal con el ROOMIE correcto.');
    });

    test('Hero Snapshot', () => {
        const hero = create(
            <MemoryRouter>
                <Hero />
            </MemoryRouter>
        );
        expect(hero.toJSON()).toMatchSnapshot();
    })
})
