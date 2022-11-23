"use strict"

// probando código antiguo

const fs = require('fs');
const readline = require('readline');

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