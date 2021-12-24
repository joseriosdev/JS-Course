// An IF statement will be executed when is TRUE, for example:
if(true) {
	console.log('Hello World!'); // this is executed
}

if(false) {
	console.log('¡Hola Mundo!'); // This is not going to be executed
}

// Because the if statement evaluates what is inside the (), this mean that you can put whatever logical operator you want
if(true && 0 === 0) { // true
	console.log('Olá Mundo!');
}

// Recall the truthy and falsy values in JS, those are helful
if('' !== false) { // true
	console.log('Ciao Mondo!');
}
//---------------------------------------------------------------


// Use ELSE after an if statement to do something if the statement is false...
if(false && true) {
	console.log('I am NOT going to be executed');
} else {
	console.log('I am going to be executed');
}
//---------------------------------------------------------------


// Use ELSE IF to keep evaluating another posible case, for example
var note = 'C';

if(note === 'A') {
	console.log('That is the best note!');
} else if(note === 'B') {
	console.log('That is an OK note');
}else if(note === 'C') {
	console.log('You should improve');
}else if(note === 'D') {
	console.log('You better start studying hard right now');
} else {
	console.log('There are available tutors for you');
}
//---------------------------------------------------------------


// Use TERNARY to assign a variable, here's an example first with If Else
var isFurry = true;
var isTheBestFriendOfMan = true;
var myPetIs = '';

if(isFurry && isTheBestFriendOfMan) {
	myPetIs = 'A Dog';
} else {
	myPetIs = 'Hum! I don\'t know';
}
console.log(myPetIs); // A Dog

// With a ternary:
myPetIs = isFurry && isTheBestFriendOfMan ? 'A Cat' : 'Maybe a dog?';
console.log(myPetIs); // A cat

// As you can see, the first part is the statement,
// after the ? is what the variable will have if true,
// and after the : is what the variable will have if false
// After ? -> true
// After : -> false (else)
//---------------------------------------------------------------


// EXERCISE
/*
Write an app that finds the age range of a person, according to the next info:
	- if age is below 0, is not valid
	- if age is above 0 and less or equal than 5 -> baby
	- age above 5 and less or equal 13 -> kid
	- age above 13 and less or equal 19 -> teenager
	- age above 20 and less or equal 33 -> young adult
	- age above 33 and less of equal 60 -> adult
	- age above 60 and less or equal 120 -> old
	- age above 120 -> superhuman
*/

var age = Number.parseInt(prompt('What is your age?'));

if (age < 0)
	alert('That is not a real age');
else if (age <= 5)
	alert('BABY!');
else if (age <= 13)
	alert('KID!');
else if (age <= 19)
	alert('TEENAGER!');
else if (age <= 33)
	alert('YOUNG ADULT!');
else if (age <= 60)
	alert('ADULT');
else if (age <= 120)
	alert('OLD!');
else
	alert('SUPERHUMAN!!');