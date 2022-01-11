/*
These three methods from the object function do essentially the same:

Helps to determine what value will 'this' going to be, when talking about the methods

.call() and .apply() we're talking about the same function behavior, the only difference is the parameters:
*/

function Person(fullName) {
	this.fullName = fullName;
}

function Creator(fullName, creationList) {
	Person.call(this, fullName);
	this.creationList = creationList;
}

function Consumer(fullName, consumerList) {
	Person.apply(this, [fullName]);
	this.creationList = consumerList;
}


/*
While .bind() also define the new value for 'this', does it in a closure manner,
returns a function that can be executed later on
*/

var module = {
	x: 42,
	getX: function() {
		return this.x;
	}
};

var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42