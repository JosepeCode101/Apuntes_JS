"use strict"
//console.log('Esto se está ejecutando');
debugger;

function getName() {
    const name = prompt('Inserte un nombre');
    return isNaN(name) ? name : getName();
}

const result = getName();
//console.log(result);

function getAge () {
    const age = prompt('Inserte su edad')
    return !isNaN(age) ? age:getAge();
}

const result2 = getAge();
//console.log(result2);

debugger;
function getNumericPrompt(message) {
    const age = prompt(message);
    return !isNaN(age) ?  age : getNumericPrompt(message);
}
  
function getStringPrompt(message) {
    const name = prompt(message);
    return isNaN(name) ?  name : getStringPrompt(message);
}

function getPerson() {
    const name = result;
    const age = result2;
    const saludoP = {nombre: name, edad: age};
   return saludoP;
}
console.log(getPerson())
//const {name, age} = getPerson();
//console.log('Esto se está ejecutando');
//console.log(age)
//alert('Hola', $,{name}  ,'con', $,{age}  ,'años');