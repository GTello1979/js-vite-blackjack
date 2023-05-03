
// Esta función me permite tomar una carta
/**
 * 
 * @param {Array<String>} deck 
 * @returns {String} retorna la carta seleccionada y modifica el deck eliminado la carta
 */
export const pedirCarta = ( deck ) => {
    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    
    const carta = deck.pop();
    return carta;
}
