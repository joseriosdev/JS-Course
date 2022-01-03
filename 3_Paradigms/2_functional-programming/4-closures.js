// RECALL...
function giveNumber() {
	return 100;
}
var oneHundred = giveNumber();
console.log(oneHundred); // 100
console.log(giveNumber()); // 100
console.log(giveNumber); // prints the function

/*
Let's talk about scope in JS, here you can have access (or not) to certaing variables within the scope
of the function:
*/

var name = 'John'; // global scope
function printName() {
	console.log(name);
}

printName(); // John
name = 'Jane';
printName(); // Jane


// Consider the following code:

function printLast() {
	var last = 'Doe'; // function scope
	console.log(name +' '+ last);
}
console.log(last); // would I have access to 'last' var here? ->> nope
// but this will work
printLast(); // here I've access to both global and function scope


/*
According to MDN definition:
Closures are functions that refer to independent (free) variables
In other words, the function defined in the closure ‘remembers’ the environment in which it was created

I see them as functions that knows their current state, that's because closures cares a lot 'bout their scope

The basic look of a closure is that is a fuction that returns a fuction:
*/

function myClosureFunction() {
	function closure() {
		console.log('I am learning  about closures!');
	}
	return closure; // doesn't have the () at the end because I'm just pointing to it, not calling it
}

var newFunc = myClosureFunction();
console.log(newFunc); // this will print the exactly function, just like it was wrote
console.log(newFunc()); // I am learning  about closures!
console.log(myClosureFunction()); // this will print the exactly function, just like it was wrote
console.log(myClosureFunction()()); // I am learning  about closures!

// Now, let's combine the closure look to what we just talked about scope:

function outerFunction(outerVariable) {
	var anotherOuterVar = ' outer';
	return function innerFunction(innerVariable) {
		var anotherInnerVar = ' inner';
		console.log('Outer Variable: ' + outerVariable + anotherOuterVar);
		console.log('Inner Variable: ' + innerVariable + anotherInnerVar);
	}
}

var func = outerFunction('outside');
func('inside');
/*
Closures remembers the outer variables so you can use it in the innerFunction
so it remembers the state of the function...
*/

//-------- Another example
function accumulator() {
	var count = 0; // this variable will be the 'state'
	return function() {
		count++;
		return count;
	}
}

var acc1 = accumulator();
console.log(acc1()); // 1
console.log(acc1()); // 2
console.log(acc1()); // 3

var acc2 = accumulator();
console.log(acc2()); // 1
console.log(acc2()); // 2


/*
Those were the basics of closures
This is a larger topic, to know deeper, see:
https://www.freecodecamp.org/news/lets-learn-javascript-closures-66feb44f6a44/
https://www.youtube.com/watch?v=3a0I8ICR1Vg
*/