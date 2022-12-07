"use strict"

// Mouse Events

// Asociar elementos del html con el JS para trabar con ellos
const boton = document.querySelector('.boton');

// Escucha de eventos que van a ir sucediendo con el 
// click
boton.addEventListener('click', function(){
    console.log("The button has been clicked")
})

//mouseover
boton.addEventListener('mouseover', function(){
    console.log("The mouse is over the button");
})

// mouseout
boton.addEventListener('mouseout', function(){
    console.log("The mouse is out the button");
})