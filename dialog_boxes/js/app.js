"use strict"

const video = document.querySelector('.bostonVideo');

/*video.addEventListener("ended", function(){
    let resultado = confirm("¿Deseas ver el video nuevamente?");

    if (resultado) {
        video.play();
    }else {
        window.location = "https://safemoon.com/";
    }

});*/ 

video.addEventListener("ended", function() {
    let email = prompt("Escribe tu coreeo para ver este video en bucle como un enfermo", "data@gmail.com");

    if (email==null || email=="") {
        console.log("Sin datos");
        let email = prompt("Escribe tu coreeo para ver este video en bucle como un enfermo", "data@gmail.com")
    } else {
        console.log(email);
    }
    
});