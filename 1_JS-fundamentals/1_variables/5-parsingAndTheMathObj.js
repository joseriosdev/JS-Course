// Usually, while managing user input will came as a String, sometimes we want numbers instead
// Parsing is the concept on which we can change the data type of a variable
// for example, use the global .toString to change almost anything to a literal String
var val = 20;
val = ['Text', 55, false];
val = true;
val = { young:true };

console.log(val.toString());

// Use isNaN to check if "is Not a Number"
console.log(isNaN(5)); // false
console.log(isNaN('5')); // true

// Parse string to Integer Number
var x = parseInt('5');
// Parse string to Decimal Number
var y = parseFloat('5.6');
console.log(x + y); // 10.6

// Use typeof to get the data type
console.log(typeof null); // Object
console.log(typeof 7); // Number
console.log(typeof 'javascript'); // String
console.log(typeof true); // Boolean
console.log(typeof undefined); // undefined
console.log(typeof []); // Object

// Don't know the value of a variable? Use valueOf()
console.log(val.valueOf());


// --------- To parse to Boolean let's understand the next info: (copy and paste to console)
// Falsy values -> something that evaluated will be FALSE, for instance
Boolean(0);
Boolean('');
Boolean(null);
Boolean(undefined);
Boolean(NaN);
Boolean(false);
Boolean(!true);

// Truthy values -> something that evaluated will be TRUE, for instance
Boolean(1);
Boolean('some text');
Boolean([]);
Boolean({});
Boolean(true);
Boolean(!false);

// I know, could be confusing but remember, just give to you some time for learning the basics
// https://www.freecodecamp.org/news/falsy-values-in-javascript/



// >>>>>>>>>>>> THE MATH OBJ <<<<<<<<<<<<<<
// Helps dealing with number, let's see some examples
// Rounding decimal to a integer
Math.round(5.6); // 6
Math.round(5.4); // 5
Math.round(5.5); // 6
Math.floor(9.99); // 9
Math.ceil(9.01); // 10

// Doing maths
Math.abs(-2); // 2
Math.pow(2,3); // 8
Math.sqrt(25); // 5

// And a lot more!
Math.random() // return a random number between 0.00 to 1.00
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math