"use strict"

// 1 - Elaborar un formulario html
// 1.1 - Asignar ids para capturar los datos que se recogen del formulario
// 2 - Elaborar una función recursiva que verifique que todos los campos 
//     del formulario están correctamente introducidos
// 3 - Crear una función para generar un txt (modelo correo electrónico) a 
//     través de streams y los datos introducidos en el formulario
// 3.1 - 
// 4 - Elaborar un botón (div) para finalizar el proceso
// 4.1 - Que ejecute la funcion recursiva 
// 4.2 - Que ejecute la funcion de emitir el txt






// probando código antiguo

/*

const fs = require('fs');
const readline = require('readline');D

let i = readline.createInterface(process.stdin, process.stdout);

i.question('Cual es tu nombre?', (nombre)=>{

    fs.writeFileSync(`./${nombre}.txt`, `Esto dijo  ${nombre}`);
    process.stdout.write('Que quieres decir? \n');

    i.on('line', (dicho)=>{
        if(dicho.trim() == 'salir'){
            i.close();
        }else{
            fs.appendFileSync(`./${nombre}.txt`, dicho.trim() + '\n');
        }
    });

});

*/