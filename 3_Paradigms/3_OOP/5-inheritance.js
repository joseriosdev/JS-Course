/*
Inheritance allows a prototype to have the same properties and method than another proto
*/

function Person(name) {
	this.name = name;
}

Person.prototype.greeting = function() {
	console.log(`Hello, my name is ${this.name}`);
}


function Worker(name, work) {
	Person.call(this, name); // here is calling the name from person's constructor
	this.work = work;
}

// the inheritance comes here:
Worker.prototype = Object.create(Person.prototype);

// Now I can create new methods for my class
Worker.prototype.presentation = function() {
	console.log('I love to work as: ' + this.work);
}



var p = new Person('Phil');
var w = new Worker('Jackson','Coach');

p.greeting();
w.greeting();
w.presentation();
