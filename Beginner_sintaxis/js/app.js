"use strict"
// Aprendiendo a usar JS

// D A T O S   S T R I N G 

var bebida = "agua";
var edad = 34;
// Para convertir la edad a una cadena de texto utilizamos el método String
var edadtxt = String(edad);



// D A T O S   B O O L E A N O S

// Se puede asignar un valor directamente a la variable booleana
var activo = false;
// O bien se puede evaluar el estado para determinar el valor
var estado = Boolean(10 > 9);



// D A T O S   D E   F E C H A
var fecha = new Date();
// Metodos que se pueden utilizar con fechas
// new Date() ---> Generar una nueva fecha
// get.Day()  ---> Nos dará el día de la semana que te encuentras lunes = 1 / Domingo = 7
// get.Date() ---> Nos dará el día del mes en el que nos encontramos 20, en el caso de hoy 20 de Mayo
// set.Date() ---> Para cambiar el día del mes con el que quieres trabajar (Ejemplo, crear un evento de calendario)



// D A T O S    S Í M B O L O S 
// Los simbolos son datos unicos que se generan para hacer un control de la aplicación
var simbolo1 = Symbol();
var simbolo2 = Symbol();
// Si le preguntamos a la consola si (simbolo1 === simbolo2) esto nos dará un valor de false
// Podemos utilizar el símbolo pra determinar en que ambiente nos encontramos, producción, desarrollo, despliegue...
var ambiente = Symbol('dev');



// O B J E T O S    J S O N
// JavaScript Object Notation
var persona1 = {nombre: 'Josepe', twitter: 'JosepeCode'};
// Convertir este objeto en una cadena de texto
var persona1String = JSON.stringify(persona1);
// Reconvertir la cadena de texto en un objeto JSON
var persona1JSON = JSON.parse(persona1String);


// E L   O P E R A D O R   T E R N A R I O

// Condicion ? TRUE : FALSE
// Ejemplos
var datoA = 10;
var datoB = 20;
var datoC = "10";

var resultado1 = datoA > datoB ? "Se cumple condición" : "NO Se cumple condición";
var resultado2 = (datoA < datoB) && (datoC === datoA) ? "Se cumple condición" : "NO Se cumple condición";
var resultado3 = (datoA < datoB) && (datoC == datoA) ? "Se cumple condición" : "NO Se cumple condición";
// Expected output  -> r1 = false / r2= false / r3= true
console.log(resultado1);
console.log(resultado2);
console.log(resultado3);


// O P E R A D O R   D E   T I P O   D E   D A T O
// "typeoff"

var cadena = "10";
var numero = 10;
var interruptor = false;
var persona = {
    nombre: "El Bichooooo",
    edad: 38,
    seleccion: "Portugal"
}
// Expected output  -> string boolean string number
console.log(typeof cadena);
console.log(typeof interruptor);
console.log(typeof persona.nombre);
console.log(typeof persona.edad);

// I F  /  E L S E   E N   J A V A S C R I P T
// Expected output  ->  "activado en else"
if(datoA === datoC) {
    console.log("Activado en if");
} else if (datoA > datoB) {
    console.log("Activado en else if")
}
else {
    // Puedes anidar IF/ELSE dentro de otros IF/ELSE
    if (datoA == datoC){
        console.log("If anidado");
    }
    console.log("Activado en else");
}

// S W I T C H   E N   J A V A S C R I P T

var evaluador = 0;

switch (evaluador) {
    case 1:
        console.log("Primer estado");
    break;
    case 2:
        console.log("Segundo estado");
    break;
    default:
        console.log("Default state")
    break;
}

