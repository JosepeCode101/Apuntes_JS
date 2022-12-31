"use strict"
// 0, 1, 1, 2, 3, 5, 8, 13, 
const fibonacci = n => {

    if (n < 2){
        console.log(n)
        return n
    } 
    return fibonacci (n - 2) + fibonacci(n - 1)
}

console.time('fibo');
fibonacci(6);