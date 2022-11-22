"use strict"

// Funciones en JS

// FUNCION SIMPLE
//debugger;
function saludar() {
    var saludo = "Hello World desde una Función";
    //console.log(saludo);

    return saludo;

}

saludar();

// FUNCIÓN CON PARAMETROS

function saludar1 (nombre, edad) {

    console.log('Hola: ', nombre);
    console.log('Edad: ', edad );

    var resultado = "El Calvo: " + nombre + " tiene unos " + edad + " años";

    return resultado;

}
//var calvoNombre = prompt('¿Como te llamas?');
//var calvoEdad = prompt('¿Que edad tienes?');
//var mensaje1 = saludar1(calvoNombre, calvoEdad);
var mensaje2 = saludar1("JosepeCode", 26);
//console.log(mensaje1);
console.log(mensaje2);

// -------------------------------------------------------------------------------------------------------------
//var x = 3;
//console.log(typeof x);
//debugger; 
//var calvoNombre = prompt('¿Como te llamas?');
//var calvoEdad = prompt('¿Que edad tienes?');
//console.log(isNaN(calvoEdad));
// Hacer funciones regresivas para capturar bien el dato
// Pidiendo datos de manera robusta
//var calvoTipo = typeof calvoNombre;
//console.log(calvoTipo);
/*while (isNaN(calvoEdad) || typeof calvoNombre === "number") {
    alert('No se han introducido valores correctos');
    if ((typeof calvoNombre) === 'number'){
        calvoNombre = prompt('No seas trol e introduce un nombre');
    }else if (isNaN(calvoEdad)){
        calvoEdad = prompt('No seas trol e introduce un valor de edad Real');
    }
}*/


/*if (isNaN(calvoEdad) && typeof (calvoNombre === 'number')){
    alert('No has introducido un nombre, ni una edad adecuadas, PILLÍN');
    var calvoNombre = prompt('¿Como te llamas?');
    var calvoEdad = prompt('No me trolees e introduce una edad');
}else if (isNaN(calvoEdad)){
    
}*/

//----------------------------------------------------------------------------------------------------------------

// FUNCIÓN CON PARÁMETROS INICIALIZADOS
function contar (cantidad=100){
    return console.log('Total: ', cantidad);
}
contar(500);
contar();


// PARÁMETROS DE TIPO REST Y DE TIPO SPREAD
// El parametro REST se declara con la función con los ...
function cocinar (ingrediente1, ingrediente2, ingrediente3, ...otros) {

    console.log('1: ', ingrediente1);
    console.log("2: ", ingrediente2);
    console.log("3: ", ingrediente3);
    console.log('otros: ', otros);

}

var ingredientesBase = ["Pollo", "Tomate"];
// El parametro SPREAD se declara CON LA INVOCACIÓN de la función
cocinar(...ingredientesBase, "Arroz", "Agua", "Platano", "Clara de huevo");


//FUNCIONES ANÓNIMAS
//no funciona con el método use strict
var saludar = function(adjetivo) {
    var mensaje = "Hola calvo de " + adjetivo;

    return mensaje;
}
// Para poder utilizar este método debes eliminar el 'use strict'
/*(
    function() {
        var mensaje = "Hola calvo";
        console.log(mensaje);
    }
)()*/

// CALLBACKS
// Partimos de una función para calcular
function calcular (datoA, datoB, sumarCBB, restarCBB) {
    var suma = datoA + datoB;
    var resta = datoA - datoB;

    sumarCBB(suma);
    restarCBB(resta);
}
// Al invocar la función calcular estamos pasando dos parámetros y dos funciones como parametros
calcular(2, 3, function (resultado) {
    console.log('suma ', resultado)
}, function(resultado){
    console.log('resta ', resultado)
});

// ARROW FUNCTIONS 

var saludar = nombre => "Hola " + nombre;
console.log(saludar('Carlos')); 

var sumar = cantidad => cantidad+10;
console.log(sumar(10));

var calcular2 = (datoA, datoB) => datoA + datoB;
console.log(calcular2(2, 5));

var geneCal = (datoA, datoB) => {
    var datoC = 5;
    return datoA+datoB+datoC;
}
console.log(geneCal(2, 3));


var validacion = () => {
    return "VALIDACIÓN CORRECTA"
}
console.log(validacion());

// CREANDO BUFFERS (NODE.js REQUIRED∫)
let buffer = Buffer.alloc(1);

console.log(buffer);






//let nombre = prompt("Dime tu nombre");
//alert(nombre);

//var mensaje = "Hola, Javier. Este es un mensaje de bienvenida.";

//var nombre = mensaje.substring(6, 6);
//alert(nombre);

/*const boton = document.querySelector('.boton');

boton.addEventListener('click', function() {
    console.log(this);
})

boton.addEventListener('click', () => {
    console.log(this);
    this.location = "http://www.google.com";
})
*/