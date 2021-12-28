/*
This ES6 feature allows you to UNPACK values from arrays, or properties from objects, into distinct variables
*/

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

/*
Wait, what? those ... what it really mean?
that's a 'new' operator called Spread Operator
*/
const numbers = [1, 2, 3];

console.log(sum(...numbers));
/*
This operator allows an iterable object like arrays or strings to be
expanded or unpacked in places where is expected and iterable object
for example functions or when assigning an array
*/
let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore = [...numberStore, newNumber];

let str = 'let';
console.log('let'.includes(str)); // true
console.log('lket'.includes(str)); // false

console.log('lion eats well'.includes(str)); // false
console.log('lion eats well'.includes(...str)); // true

console.log('variable'.includes(str)); // false
console.log('variable'.includes(...str)); // true