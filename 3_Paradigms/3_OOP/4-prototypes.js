/*
Almost Everything in JavaScript is prototypes!!

Where other languages that supports OOP uses 'classes', JS uses 'prototypes'.
The main difference between these two:
	* class define type which can be instantiated at runtime
	* prototype is itself an object instance
*/

// run below code...
var number = 0;
console.log(number); // data primitive value
console.log(typeof number); // number

var objNumber = new Number(0);
console.log(objNumber); // instance from the object prototype 'Number'
console.log(typeof objNumber); // object

var arr = [4,7,2];
console.log(arr); // instance from the object prototype 'Array'
console.log(typeof arr); // object

/*
notice the different console logs, the first one is a primitive data type
the second and third are prototype based, meaning that are a direct instance from an object
*/

// Creating object methods and properties vs prototype methods and properties

function Movie(title) {
	this.title = title;
	this.getMovieInfo = function() {
		var r = this.title + ' is a good movie';
		console.log(r);
		return r;
	}
}

var titanic = new Movie('titanic');
console.log(titanic);
titanic.getMovieInfo();

// VS

function Film(title) {
	this.title = title;
}

Film.prototype.getFilmInfo = function() {
	var r = this.title + ' is a good movie';
	console.log(r);
	return r;
}

var terminator = new Film('terminator');
console.log(terminator);
terminator.getFilmInfo();

/*
Both of these classes does the same but in different ways.
The first one creates the method inside the object.
The second, creates the method directly on the prototype.

What's the difference?
*/

//// Use the first approach to define a prototype where you should not instantiate anything, for example 'Maths'
function Maths() {}

Maths.sum = function(a, b) {
	return a + b;
}

Maths.rest = function(a, b) {
	return a - b;
}

console.log(Maths.sum(10, 5)); // 15
console.log(Maths.rest(10, 5)); // 5

// Now should have more sense things like:
console.log(Math.pow(2,3)); // 8

//// Use the second approach to define prototypes that can be instantiated
function Human(name, age) {
	this.name = name;
	this.age = age;
}

var latinGuy = new Human('Josue', 21);
console.log(latinGuy);