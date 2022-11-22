"use strict"

// USANDO EL OPERADOR THIS

const boton = document.querySelector('.boton');

//boton.addEventListener('click', function(){
   
    //Testear que se recibe el click
    //console.log('BOTON PULSADO');
    
    // Si ponemos el operador this nos trae la etiqueta del boton
    //console.log(this)
    
    // Para extraer siki el texto del boton
    //console.log(this.innerHTML);


//})

boton.addEventListener('click', () => {
    console.log(this);
    this.location = "https://iota.org";
})