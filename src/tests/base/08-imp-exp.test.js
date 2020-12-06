import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Héroes', () => {
    test('Debe de retonar un héroe por ID', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find((h) => h.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('Debe de retonar un undefined si héroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    test('Debe retornar un arreglo con los héroes de DC', () => {
        const owner = 'DC';
        const heroesDC = getHeroesByOwner(owner);

        expect(heroesDC).toEqual([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC',
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC',
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC',
            },
        ]);
    });

    test('Debe de retornar un arreglo con los héroes de Marvel', () => {
        const owner = 'Marvel';
        const heroesMarvel = getHeroesByOwner(owner);

        expect(heroesMarvel.length).toBe(2);
    });
});
