"use strict"

var nombre = 'Sergio';
console.log(nombre);

var nombre2 = 'Abde';
console.log(nombre2);

function saludo() {
    //Reasignación interna del valor de la variable usando let o var
    let nombre2 = 'Abdos';
    console.log(nombre2);
    //Reasignación del valor de la variable
    nombre = 'Josepe';
    console.log(nombre);
}

saludo();

// Con la palabra reservada "const" podemos declarar una variable constante

const pi = 3.1416; 
// Cualquier intento de modificar la variable constante pi nos dará un error
