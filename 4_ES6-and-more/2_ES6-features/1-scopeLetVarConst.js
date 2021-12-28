// ES6 brought 'let' and 'const' keywords
// those can replace the use of 'var'
// but first, let's comprenhend the use and why were created

// CONST
// const will freeze the variable, meaning that once assigned, cannot be re-assigned
const MY_VAR = 6; // is suggested to use all capital letters when declaring a const, this helps when reading code
MY_VAR = 8; // just by doing this, will throw an error
// const do not freeze the change of obj properties
const OBJ_SAMPLE = {
  text: 'sample text',
  number: 45,
  bool: true,
  other: [null, undefined, 0]
}
OBJ_SAMPLE.text = 'I just changed it';
// If you want to freeze an obj, use:
Object.freeze(OBJ_SAMPLE);


// use let instead of var, the scope of var works like this:
// Function scope vs block scope

var myVar = 1;
function myFunc() {
  var myVar = 2;
  console.log(myVar); 
}
myFunc();
console.log(myVar);
// prints: 2 1

var myVar = 1;
if (true) {
  var myVar = 2;
  console.log(myVar);
}
console.log(myVar);
// prints: 2 2

// BUT... change the word var for let and this happens:
let myLet = 1;
function myFunc() {
  let myLet = 2;
  console.log(myLet); 
}
myFunc();
console.log(myLet);
// prints: 2 1

let myLet = 1;
if (true) {
  let myLet = 2;
  console.log(myLet);
}
console.log(myLet);
// prints: 2 1

/*
In summary, javaSCRIPT respects in both cases the function scope of the variable
but when you use var does not respects the block scope, using let does it instead
better safe than sorry, use let please.
*/

