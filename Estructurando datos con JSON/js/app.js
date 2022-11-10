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