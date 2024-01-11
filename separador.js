const readlineSync = require('readline-sync');
const Table = require('cli-table3');

function separarLineaDeTresCeldas(){
    //se ingresa un texto, al ser 3 celdas se separa por tabs 
    var rawInput = readlineSync.question("ingresa linea\n");
    var rawArr = rawInput.split("\t");

    //validación de que se hayan obtenido 3 items
    if (rawArr.length == 3){
        var systemInput = rawArr[0];
        var systemArr = systemInput.split("::");
        var assistantInput = rawArr[2];
        var assistantArr = assistantInput.split("::");
    }else{
        console.log("Verifica tu input, deben ser 3 celdas contiguas\n--------------------------------------");
        return
    }

    
    // Crear una nueva tabla
    const entitiesTable = new Table();
    
    // Encabezados de columna
    entitiesTable.push(['system', 'assistant']);
    
    // Determinar la longitud máxima de los dos arrays
    const maxLength = Math.max(systemArr.length, assistantArr.length);
    
    // Llenar la tabla con datos de ambos arrays
    for (let i = 0; i < maxLength; i++) {
        const value1 = systemArr[i] !== undefined ? systemArr[i] : 'undefined';
        const value2 = assistantArr[i] !== undefined ? assistantArr[i] : 'undefined';
    
        entitiesTable.push([value1, value2]);
    };
    
    // Imprimir la tabla
    console.log(entitiesTable.toString());

    //otra tabla para el input del usuario
    const userInputTable = new Table();
    userInputTable.push(['user input']);
    userInputTable.push([rawArr[1]]);
    console.log(userInputTable.toString());
};

while (true){
 separarLineaDeTresCeldas();
 console.log("\n")
}