import { shallow } from 'enzyme/build';
import '@testing-library/jest-dom';
import React from 'react';
import CounterApp from '../CounterApp';

describe('Pruebas sobre CounterApp', () => {
    const wrapper = shallow(<CounterApp />);

    test('Debe de mostrar <CounterApp /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el valor por defecto de 100', () => {
        const value = 100;

        const wrapper = shallow(<CounterApp value={value} />);

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('100');
    });

    test('Debe incrementar con el botón de +1', () => {
        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('1');
    });

    test('Debe reiniciarse con el botón de Reset', () => {
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('0');
    });

    test('Debe decrecer con el botón de -1', () => {
        const wrapper = shallow(<CounterApp />);

        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('-1');
    });
});
