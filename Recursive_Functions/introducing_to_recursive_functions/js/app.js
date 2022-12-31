"use strict"

// Aprendiendo Funciones Recursivas
// Son funciones que se llaman a si mismas al ejecutarse
// Tiene que estar compuesta por un mínimo de dos elementos 
// 1 - Caso Base      - Nos indica cuando podemos acabar con la recursividad
// 2 - Caso Recursivo - Es un caso en el que la funcion se llama a si misma.

// EJEMPLOS

//Calcular el factorial dentro de una variable y pasar el resultado por consola

// Factorial de un numero. 3! = 3 x 2 x 1 = 6 // 1! = 1 // 4! = 4 x 3 x 2 x 1 = 24
// El caso base es el 1, siempre acabamos multiplicando por 1
// y en el resto de casos la función será recursiva 
// Watch cr7 with debugger 

var cr7=1;
//debugger;
const factorial = n => {
    //debugger;
    if (n <= 1){
        //console.log(n);
        cr7 *= n;
        return console.log(cr7);
        
    } 
    
    //console.log(n);
    cr7 *= n;
    return n * factorial(n-1);
}

factorial(5);


//Calcular la serie fibonacci hasta un numero N usando una función recursiva