"use strict"

// C I C L O   F O R 
// Ciclo definido


var objetivo = 10;

for (let contador = 0; contador < objetivo; contador++){
    console.log(contador + "steps for the loop");
    //debugger;
}




// C I C L O   W H I L E
// Ciclo indefinido


var librosA = 6;

while(librosA > 0) {

    librosA--;
    console.log('Libro vendido | QUEDAN ' + librosA + ' LIBROS');
    //debugger;

}


// C I C L O   D O   W H I L E
// Ciclo indefinido

var librosB = 6;

do{
    librosB--;
    console.log('Libro vendido | QUEDAN ' + librosB + ' LIBROS');
    if (librosB <= 2){
        console.log('ESTOC BAJO, REPONER');
    }
}while(librosB > 0)

// Otro ejemplo de ciclos
//debugger;
var i;
var pares = 0;

for (i = 1; i <= 20; i++) {
    if (i % 2 == 0){
        pares++;
        console.log('numero par ' + i)
    }
    //debugger;

}
console.log('Del 0 al 20 existen ' + pares + ' numeros pares')