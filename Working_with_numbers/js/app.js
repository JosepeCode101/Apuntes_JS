"use strict"

//-----------------------------------------------------------
// Valor positivo mas largo posible que puede manejar JS 
console.log("MAX_VALUE: ", Number.MAX_VALUE);

// Valor negativo mas largo posible que puede manejar JS 
console.log("MIN_VALUE: ", Number.MIN_VALUE);

// Objeto infinito negativo
console.log("NEGATIVE_INFINITY: ", Number.NEGATIVE_INFINITY);

// Objeto infinito positivo
console.log("POSITIVE_INFINITY: ", Number.POSITIVE_INFINITY);

// NAN
console.log("NaN: ", Number.NaN);
//-----------------------------------------------------------
// Parsing y evaluación de variables¡

var ejemplo = "19.33";

console.log('Number: ', typeof ejemplo, " Tras método Number pasa a : ", typeof Number(ejemplo));

console.log('parseInt: ', parseInt(ejemplo))

console.log('parseFloat: ', parseFloat(ejemplo));
// Evaluar si No es un Número, como Si es un número, es false
console.log('isNAN: ', isNaN(ejemplo));
// Evaluar si el valor es un entero
console.log('isInteger: ', Number.isInteger(ejemplo));

//--------------------------------------------------------------------

var notac = 3.6;

console.log("NOTACIÓN EXPONENCIAL: ", notac.toExponential(4));

console.log("NUMERO DE DECIMALES TRABAJADOS: ", notac.toFixed(3));

console.log("NUMERO DE PRECISIÓN/REDONDEO: ", notac.toPrecision(4));

console.log("STRING: ", notac.toString());

