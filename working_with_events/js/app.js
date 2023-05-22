"use strict"

// Trabajando con eventos

// Mouse Events

// Asociar elementos del html con el JS para trabar con ellos
const boton = document.querySelector('.boton');

// Escucha de eventos que van a ir sucediendo con el 
// click
boton.addEventListener('click', function(){
    console.log("The button has been clicked");
    //while (true) {
    //console.log("V A    T Í O")
    //}
})

//mouseover
boton.addEventListener('mouseover', function(){
    console.log("The mouse is over the button");
})

// mouseout
boton.addEventListener('mouseout', function(){
    console.log("The mouse is out the button");
})

// Keyboard events 
// Keydown
window.addEventListener("keydown", function(event){
    console.log('The key was DOWN pressed');
})
// Keypress
window.addEventListener("keypress", function(event){
    console.log('The key was pressed');
})
// KeyUp
window.addEventListener("keyup", function(event){
    console.log('The key is up');
    console.log(String.fromCharCode(event.keyCode));
})

// Evento de Carga, Escuchar cuando se ha cargado el documento para ejecutar una acción 

window.addEventListener('load', function(){
    console.log('Se ha cargado el documento');
})