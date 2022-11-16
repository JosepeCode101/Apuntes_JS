"use strict"

// Creando Objetos JSON JavaScript Object Notation

// Un objeto
var calvo = {nombre: 'Josepe', twitter: 'JosepeCode.smr'};


// Array de objetos, se le puede asignar un objeto creado anteriormente 
var personas = [
    {nombre: 'Arnau', twitter: 'marmota'},
    {nombre: 'Carlos', twitter: 'SuperPilotoCaza'},
    {nombre: 'Abel', twitter: 'Hater'},
    calvo
]

//Convertir los datos a String para enviarlos o almacenarlos
var personaJSON = JSON.stringify(calvo);

//Reconvertit el String a objeto JSON
var nuevaPersona = JSON.parse(personaJSON);


// Probando cositas de operadores aritmeticos

// Comprobando como funciona el modulo o resto
var datoA = 25;
var datoB = 2;
var resto = datoA % datoB;
var divisionNormal = datoA / datoB;

console.log('El resto de dividir ' + datoA + ' entre ' + datoB + ' tiene como resultado: ' + resto);
console.log(divisionNormal);
