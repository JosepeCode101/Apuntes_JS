"use strict"

// Aprendiendo Funciones Recursivas
// Son funciones que se llaman a si mismas al ejecutarse
// Tiene que estar compuesta por un mínimo de dos elementos 
// 1 - Caso Base      - Nos indica cuando podemos acabar con la recursividad
// 2 - Caso Recursivo - Es un caso en el que la funcion se llama a si misma.

// EJEMPLO
// Factorial de un numero. 3! = 3 x 2 x 1 = 6 // 1! = 1 // 4! = 4 x 3 x 2 x 1 = 24

//Calcular el factorial dentro de una variable y pasar el resultado por consola


// debugger;
const factorial = n => {
    if (n <= 1){
        //console.log(n);
        cr7 *= n;
        return cr7;
        
    } 
    console.log(n);
    cr7 *= n;
    return n * factorial(n-1);
}

factorial(5);
