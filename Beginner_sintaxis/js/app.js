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

