/*
Functions are chunks of code that will do something for you
this is helpful because avoids repeating the same lines of code for certain functionality in your app
let's see them
*/


// Creating a function with the name 'sayHello' than will console log 'Hello!'
function sayHello() {
	console.log('Hello!');
}
// Calling and executing prev function
sayHello(); // 'Hello'


// Use parameters or arguments between the ()
// will allow you customize your function a bit more
function sayHi(name, momentOfTheDay) {
	console.log('Hi ' + name + ', good ' + momentOfTheDay + '!');
}
// Execute the function passing the parameters
sayHi('Marta', 'morning'); // 'Hi Marta, good morning!'


// You can also set default parameters
function sayHola(name = 'Erick', momentOfTheDay = 'afternoon') {
	console.log(`Hola ${name}, good ${momentOfTheDay}!`);
}
// Execute the function without the parameters
sayHola(); // 'Hola Erick, good afternoon!'



// Functions allows you to return a value:
function onePlusTwo() {
	var one = 1;
	var two = 2;
	var returnValue = one + two;
	return returnValue;
}
// Using prev function
var three = onePlusTwo(); // 3


// Yeap, you can also add arguments or parameters to it
function sum(a , b) {
	return a + b;
}
console.log(sum(5, 20)); // 25




/*
So far we've seen that you need to do 2 basic steps to work with a Function
	1. Create the Function
	2. Call the Function, execute the Function
well... you can avoid the second step with an IIFE
stands for:
	Immediately Invoked Function Expression
here's an example
*/
(function() {
	console.log('I am an IIFE with the default argument of ' + param);
})(param = 100)




// You can also declare a variable with a function
var greeting = function(fullName = 'John Doe') {
	var greet = `Hello ${fullName} :)`;
	console.log(greet);
	return greet;
};
// Let's combine everything!
var greetingDaniel = greeting('Daniel Willis');
// will do the console log and also will assign 'Hello Daniel Willis :)' to the var greetingDaniel
// Take your time to understand everything that is going on



// JS has changed over the years, the major version that did a lot of changes is known as ES6
// just know that there is an additional way of declaring a Function (Arrow functions)
// here's the syntax
var greeting2 = (fullName = 'John Doe') => {
	var greet = `Hello ${fullName} :)`;
	console.log(greet);
	return greet;
};
var greetingAnonymus = greeting2();

// If the arrow function only has one parameter and returns something inmediatly, you can write:
var myArrowFuncion = singleParameter => `Let's return a string with the ${singleParameter}` // in JS the ";" is optional
// This is the same as:
function myRegularFunction(oneArgument) {
	return `Let's return a string with the ${oneArgument}`;
}

// IMPORTANT NOTE:
// Use the "return" keyword to stop a function in any time, for example:
function stopper() {
	console.log('Some function here'); // this will be printed
	return; // this return will stop everything, useful when you learn to use "If"
	console.log('Some other function'); // this won't be printed
}


// Have you wondered if can you pass parameters to a function wihtout params?
function noArgumentsOrParameters() {
	console.log('!¡');
}
// What do you think about this?
noArgumentsOrParameters('Text', 5, null); // is this possible?

// Well it is!
// but, where can I see those arguments?
// JS covers that for you. You need to call a 'secret array variable' (arguments)
// just like this
function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3

  console.log(arguments);
  // expected output: Array (5)
}

func1(1, 2, 3, 4, null);