"use strict"


// Temporizadores

// SET INTERVAL  (setInterval)
// Con esto ejecutaremos infinitamente una instrucción cada determinado tiempo
// Si establezco 3s cada 3s sucede x hasta que yo lo detenga


// SET TIME OUT  (setTimeout)
// Ejecuta una acción en el momento asignado, y solo lo va a ejecutar una vez

//var temps = setInterval(function() {
  //  setColor();
//}, 1000);

setTimeout(function(){
    setColor()
}, 3000);

function setColor() {
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "#00A79D" : "blue";
}

function stopTemps() {
    clearInterval(temps)
}