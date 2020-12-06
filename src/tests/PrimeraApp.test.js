import { shallow } from 'enzyme/build';
import '@testing-library/jest-dom';
import React from 'react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
    // test("Debe de mostrar el msj 'Hola, soy Goku'", () => {
    //     const saludo = 'Hola, soy Goku';

    //     const { getByText } = render(<PrimeraApp saludo={saludo} />);

    //     expect(getByText(saludo)).toBeInTheDocument();
    // });

    test('Debe de mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola, Soy Goku';

        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el subtítulo enviado por props', () => {
        const saludo = 'Hola, Soy Goku';
        const subtitulo = 'Soy un subtítulo';

        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo} />);

        const textoParrafo = wrapper.find('p').text();
        console.log(textoParrafo);

        expect(textoParrafo).toBe(subtitulo);
    });
});
