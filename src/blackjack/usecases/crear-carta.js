
/**
 * 
 * @param {HTMLElement} divCarta elementos html para mostrar cartas
 * @param {String} carta elemento para poder mostrar carta
 */
export const crearCarta = ( divCarta, carta ) => {
    if( !divCarta )
        throw new Error('divCartaComputadora es necesario');
    
    if( !carta )
        throw new Error('carta es necesario');

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCarta.append( imgCarta );
}