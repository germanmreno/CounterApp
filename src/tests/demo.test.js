describe('Pruebas en el archivo demo.test.js', () => {
    test('Deben ser iguales los string', () => {
        //1. Inicialización
        const msj = 'Hola Mundo';

        //2. Estímulo
        const msj2 = 'Hola Mundo';

        //3. Observar el comportamiento
        expect(msj).toBe(msj2);
    });
});
