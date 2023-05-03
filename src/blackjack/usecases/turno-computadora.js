import { pedirCarta, valorCarta, crearCarta } from "./";

// turno de la computadora
/**
 * 
 * @param {Number} puntosMinimos que la cpu necesita para ganar
 * @param {HTMLElement} puntosHTML elementos html para mostrar puntos
 * @param {HTMLElement} divCartasComputadora elementos html para mostrar cartas
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck ) => {
    if( !puntosMinimos )
        throw new Error('puntosMinimos son necesarios');
    
    if( !HTMLElement )
        throw new Error('puntosHTML es necesario');
    
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        crearCarta( divCartasComputadora, carta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}