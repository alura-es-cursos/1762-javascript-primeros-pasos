console.log(`Trabajando con condiciones`);

const ciudadesDisponibles = new Array();

ciudadesDisponibles.push('Bogotá');
ciudadesDisponibles.push('Caracas');
ciudadesDisponibles.push('Lima');
ciudadesDisponibles.push('Santiago');

const edadComprador = 15;
const estaAcompanado = true; //Variable booleana: true o false
const tienePasaje = true;
const ciudadDestino = 'Quito';
let posicion = 0;
let destinoDisponible = false;
let puedeComprar = false;
console.log(ciudadesDisponibles);

puedeComprar = (edadComprador >= 18 || estaAcompanado);

// while(posicion < ciudadesDisponibles.length) {
//     if (ciudadesDisponibles[posicion] == ciudadDestino) {
//         destinoDisponible = true;
//         break;
//     } 
//     posicion++;
// }

//Lazo for
for(posicion = 0;posicion < ciudadesDisponibles.length;posicion++) {
    if (ciudadesDisponibles[posicion] == ciudadDestino) {
        destinoDisponible = true;
        break;
    }
}

if (puedeComprar && destinoDisponible) {
    console.log(`Es posible vender el pasaje. La persona puede comprar y el destino está disponible`);
} else if (puedeComprar) {
    console.log(`No es posible vender el pasaje. La persona puede comprar pero el destino no está disponible`);
} else {
    console.log(`No es posible vender el pasaje`);
}

