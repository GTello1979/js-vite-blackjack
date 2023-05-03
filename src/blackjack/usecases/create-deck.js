import _ from 'underscore';

// Esta función crea un nuevo deck, exportación directa con export
// - import { crearDeck } from ...

// JSDoc - indicar información de función y ser visualizada desde la implementación
/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCartas 
 * @param {Array<String>} tiposEspeciales 
 * @returns {Array<String>} retorna un nuevo deck de cartas (array<string>)
 */
export const crearDeck = ( tiposDeCartas, tiposEspeciales ) => {
    if( !tiposDeCartas || tiposDeCartas.length === 0 ) 
        throw new Error('tipoDeCarta es obligatorio, como arreglo de string');
    
    if( !tiposEspeciales || tiposEspeciales.length === 0 ) 
        throw new Error('tipoEspeciales es obligatorio, como arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    
    return _.shuffle( deck );
}
