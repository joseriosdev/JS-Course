// Declaring a Boolean
var positive = true;
var negative = false;
var newBool = new Boolean(); // default -> false


// Declaring a new Boolean based on logical operators
// NOT !
var not = !negative; // true
not = !positive; // false
// OR ||
var or = negative || positive; // true
or = positive || positive; // true
or = negative || negative; // false
// AND &&
var and = negative && negative; // false
and = positive && negative; // false
and = positive && positive; // true
// EQUAL ==
var equal = negative == positive; // false
equal = positive == positive; // true
equal = negative == negative; // true
// NOT EQUAL !=
var notEqual = negative != positive; // true
notEqual = positive != positive; // false
notEqual = negative != negative; // false


// Understanding the ===
/*
Here's when it comes in handy to know about primitive data types, because the ===
what it actually does is to compare the value of the variables including its data type
*/
var num = 8;
var str = '8';
console.log(num == str); // true
console.log(num === str); // false

// For not equal is: !==