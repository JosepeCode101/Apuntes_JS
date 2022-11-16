// Aprendiendo a usar JS

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
