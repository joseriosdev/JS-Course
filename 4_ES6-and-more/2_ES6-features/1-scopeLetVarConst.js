// ES6 brought 'let' and 'const' keywords
// those can replace the use of 'var'
// but first, let's comprenhend the use and why were created

// CONST
// const will freeze the variable, meaning that once assigned, cannot be re-assigned
const MY_VAR = 6; // is suggested to use all capital letters when declaring a const, this helps when reading code
MY_VAR = 8; // just by doing this, will throw an error

// LET is


// Function scope vs block scope

var myVar = 1;
function myFunc() {
  var myVar = 2;
  console.log(myVar); 
}
myFunc();
console.log(myVar);


var myVar = 1;
if (true) {
  var myVar = 2;
  console.log(myVar);
}
console.log(myVar);
