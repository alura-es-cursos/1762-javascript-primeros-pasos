console.log(`Trabajando con Listas`);

const Bogota = "Bogotá";
const Lima = "Lima";
const Santiago = "Santiago";
const BuenosAires = "Buenos Aires";

//console.log(Bogota,Lima,Santiago,BuenosAires);

//const ciudadesDisponibles = ['Bogotá','Lima','Santiago','Buenos Aires'];
const ciudadesDisponibles = new Array();

ciudadesDisponibles.push('Bogotá');
ciudadesDisponibles.push('Caracas');
ciudadesDisponibles.push('Lima');
console.log(ciudadesDisponibles);

const ciudadesMasVendidas = [];

ciudadesMasVendidas.push('São Paulo');
ciudadesMasVendidas.push('Buenos Aires');

console.log(ciudadesMasVendidas);

console.log(ciudadesDisponibles[2]);
console.log(ciudadesMasVendidas[0]);

const cantidadCiudades = ciudadesDisponibles.length;
console.log(`Tenemos ${cantidadCiudades} ciudades disponibles`);

ciudadesDisponibles.splice(1);
console.log(ciudadesDisponibles);