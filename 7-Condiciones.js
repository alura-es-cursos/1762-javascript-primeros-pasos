console.log(`Trabajando con condiciones`);

const ciudadesDisponibles = new Array();

ciudadesDisponibles.push('Bogotá');
ciudadesDisponibles.push('Caracas');
ciudadesDisponibles.push('Lima');

const edadComprador = 15;
const estaAcompanado = true; //Variable booleana: true o false
const tienePasaje = true;

if (edadComprador >= 18 || estaAcompanado) {
    //Aqui se ejecuta el código si la edad del comprador es mayor a 18
    //Es decir es mayor de Edad
    console.log(`Es posible vender pasajes`);
    console.log(`Ciudades disponibles para viaje`);
    console.log(ciudadesDisponibles);
} else {
    console.log(`El comprador NO es mayor de edad y NO está acompañado`);
    console.log(`No es posible ofrecer viajes`);
}

//Proceso de embarque
console.log(`Proceso de embarque: \n \n`);
//       A       Y            B     (C  O   D)
if (tienePasaje && (edadComprador >= 18 || estaAcompanado)) {
    console.log(`Comprador con pasaje. Feliz viaje`);
} else {
    console.log(`Comprador sin pasaje. No es posible hacer el embarque`);
}

/*
console.log('Mayor o igual');
console.log(edadComprador >= 18);
console.log('Mayor');
console.log(edadComprador > 18);
console.log('Menor o igual');
console.log(edadComprador <= 18);
console.log('Menor');
console.log(edadComprador < 18);
console.log('Igual a');
console.log(edadComprador == 18);
console.log('Diferente de');
console.log(edadComprador != 18);
*/