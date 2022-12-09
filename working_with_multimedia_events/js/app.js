"use strict"

const video = document.querySelector('.bostonVideo');

video.addEventListener('play', function(){
    console.log('El video se ha iniciado');
})

video.addEventListener('seeking', function(){
    console.log("Se está buscando un frame en el video");
})

video.addEventListener('ended', function(){
    console.log("El video terminó");
})

video.addEventListener('pause', function(){
    console.log('Video Pausado');
})