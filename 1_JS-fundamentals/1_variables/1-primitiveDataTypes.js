// PRIMITIVE DATA TYPES IN JS
/*
Each language has it's own data primitives, meaning a basic form of information
that can be easily accessible throught the use of the programming language
*/
// https://codeburst.io/javascript-essentials-types-data-structures-3ac039f9877b
// https://developer.mozilla.org/en-US/docs/Glossary/Primitive

// <<<<<<<< Number >>>>>>>>
var val = 2;
var val2 = new Number('10');

console.log(val);
console.log(typeof val);
console.log(val2);
console.log(typeof val2);


// <<<<<<<< String >>>>>>>>
var val = 'text';
var val2 = new String('Texto');

console.log(val);
console.log(typeof val);
console.log(val2);
console.log(typeof val2);


// <<<<<<<< Boolean >>>>>>>>
var val = true;
var val2 = new Boolean(false);

console.log(val);
console.log(typeof val);
console.log(val2);
console.log(typeof val2);


// <<<<<<<< Undefined >>>>>>>>
var val = undefined;
var val2;

console.log(val);
console.log(typeof val);
console.log(val2);
console.log(typeof val2);


// <<<<<<<< Null >>>>>>>>
var val = null;

console.log(val);
console.log(typeof val);
console.log(val == null);


// <<<<<<<< Symbol >>>>>>>>
// This primitive might be confusing at the beginning, it's ok and happens all the time
var val = Symbol;
var val2 = Symbol();
var val3 = Symbol('hi');

console.log(val);
console.log(typeof val);
console.log(val2);
console.log(typeof val2);
console.log(val3);
console.log(typeof val3);


// <<<<<<<< BigInt >>>>>>>>
// Another confusing data type, don't worry about it, first 5 are the most used
var val = 1n;
var val2 = BigInt(1);
var val3 = BigInt("0x1fffffffffffff");

console.log(val);
console.log(typeof val);
console.log(val2);
console.log(typeof val2);
console.log(val3);
console.log(typeof val3);