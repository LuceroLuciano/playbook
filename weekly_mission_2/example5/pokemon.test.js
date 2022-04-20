// Prueba de unidad para la clase Pokemon
import Pokemon from "./pokemon";

test('1) Create a new object pokemon', () => {
    const myPokemon = new Pokemon('Pikachu')
    expect(myPokemon.name).toBe('Pikachusssssss'); //  Corrige esta prueba
});