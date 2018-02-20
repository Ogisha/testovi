/*

Write a function that accepts two arrays as arguments - each of which is a sorted, strictly ascending array 
of integers (assume the arguments are correct, ie. no need to validate them), and returns a new strictly ascending 
array of integers which contains all values from both of the input arrays.

*/

let sort = (n1, n2) => {
    let NewArr = n1.concat(n2);
    return Array.from(new Set(NewArr.sort((a, b) => {return a-b})));
}

//  Prednosti:
//  -  optimalno JS rjesenje gdje je funkcionalnost jezgrovita s redukovanim redefinisanjem varijable
//  -  manje koda
//  -  po ES6 standardu
