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
var x = 3;
console.log(typeof x);
debugger; 
var calvoNombre = prompt('¿Como te llamas?');
var calvoEdad = prompt('¿Que edad tienes?');
console.log(isNaN(calvoEdad));
try {
    parseInt(calvoEdad);
    
} catch (error) {
    
}
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
saludar1(calvoNombre, calvoEdad);

/*if (isNaN(calvoEdad) && typeof (calvoNombre === 'number')){
    alert('No has introducido un nombre, ni una edad adecuadas, PILLÍN');
    var calvoNombre = prompt('¿Como te llamas?');
    var calvoEdad = prompt('No me trolees e introduce una edad');
}else if (isNaN(calvoEdad)){
    
}*/

//var mensaje = saludar1("JosepeCode", 25);



//console.log(mensaje);

// CREANDO BUFFERS (NODE.js REQUIRED∫)
/*let buffer = Buffer.alloc(1);

console.log(buffer);*/





// PARÁMETROS DE TIPO REST Y DE TIPO SPREAD

/*function cocinar (ingrediente1, ingrediente2, ingrediente3) {

    console.log('1: ', ingrediente1);
    console.log("2: ", ingrediente2);
    console.log("3: ", ingrediente3);

}*/

//var ingredientesBase = ["Pollo", "Tomate"];

//cocinar(...ingredientesBase, "Arroz");

//FUNCIONES ANÓNIMAS
//no funciona con el método use strict

/*(
    function() {
        var mensaje = "Hola calvo";
        console.log(mensaje);
    }
)()*/

/*var saludar = function(adjetivo) {
    var mensaje = "Hola calvo de " + adjetivo;

    return mensaje;
}*/

// CALLBACKS
// Partimos de una función para calcular
/*function calcular (datoA, datoB, sumarCBB, restarCBB) {
    var suma = datoA + datoB;
    var resta = datoA - datoB;

    sumarCBB(suma);
    restarCBB(resta);
}

calcular(2, 3, function (resultado) {
    console.log('suma ', resultado)
}, function(resultado){
    console.log('resta ', resultadov)
});*/

//var saludar = nombre => "Hola " + nombre;

//console.log(saludar('Carlos')); 

//let nombre = prompt("Dime tu nombre");
//alert(nombre);

//var mensaje = "Hola, Javier. Este es un mensaje de bienvenida.";

//var nombre = mensaje.substring(6, 6);
//alert(nombre);

//var sumar = cantidad => cantidad+10;
//console.log(sumar(10));

/*var generar = (datoA, datoB) => {
    var datoC = 5;
    return datoA+datoB+datoC;
}
console.log(generar(10,15));

const boton = document.querySelector('.boton');

boton.addEventListener('click', function() {
    console.log(this);
})

boton.addEventListener('click', () => {
    console.log(this);
    this.location = "http://www.google.com";
})
*/