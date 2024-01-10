const readlineSync = require('readline-sync');
const Table = require('cli-table3');

var rawInput = readlineSync.question("ingresa linea\n");
var rawArr = rawInput.split("\t");
var systemInput = rawArr[0];
var systemArr = systemInput.split("::");
var assistantInput = rawArr[2];
var assistantArr = assistantInput.split("::");

// Crear una nueva tabla
const table = new Table();

// Encabezados de columna
table.push(['system', 'assistant']);

// Determinar la longitud máxima de los dos arrays
const maxLength = Math.max(systemArr.length, assistantArr.length);

// Llenar la tabla con datos de ambos arrays
for (let i = 0; i < maxLength; i++) {
    const value1 = systemArr[i] !== undefined ? systemArr[i] : 'undefined';
    const value2 = assistantArr[i] !== undefined ? assistantArr[i] : 'undefined';

    table.push([value1, value2]);
}

// Imprimir la tabla
console.log(table.toString());
console.log("\n"+rawArr[1]);