// LOOPS!
// In this section we're going to see a 'while' loop and 'do while' loop
// Loops cycles for a repetitive action
/*
Real Life Example:

Let's think about the algorithm for eating a burger once you're sitting
	1- Grab the burger
	2- Bite the burger
	3- swallow
	4- Bite the burger
	5- swallow
	6- Bite the burger
	7- swallow
	8- Bite the burger
	9- swallow
	10- Be thankful for the food
*/

// As you can see, we got steps 2-9 been repetitive, in this case, we can use a loop and simply ask if the burger is finished

// Let's do a simple 'while'
while(true /*Put a any logical expression here*/) {
	console.log('I am eating 1 potato');
}
// above code is a hazard, but is OK if you test it on the browser, so you know why
// but wait! when this should stop then?
// Let's supose that when a person has ate 10 potatos is full, so we need to add count var
var count = 1;
while(count <= 10) { // while count is less of equal to ten, do:
	console.log(`I am eating ${count} potato`);
	count++; // this will increment count + 1
}

// So the trick is to always has a logial expression that evaluated is true at first but then,
// change the value to false when we want to stop the loop
// That's all you need to know for a 'while' loop
//-------------------------------------------------------------


// This idea is the same for a 'do while' loop, it only changes the order, the logical statement goes at last
do {
	console.log('I am eating 1 burger');
} while(true) // remember, this is a HAZARD, the app will crash if the loop never stops

// the same idea but the boolean goes last
var counter = 1;
do {
	console.log(`I am eating ${count} burger`);
	counter++;
} while(counter < 5)

// here's an image that hope you can remember -> https://i.redd.it/6wksqjmmyw321.jpg


// SAMPLE CODE
// let's re-do the 'algorithm for eating a burger' but wit code
var bitesAmount = parseInt(prompt('How many bites to eat a burger?'));

// remember the IIFE?
(function(bites) {
	console.log('Let\'s eat a burger!');
	console.log('I took the burger');
	var count = 1;

	while(bites > 0) {
		console.log(`I'm eating ${count} bites of Burger`);
		console.log('swallowing...')
		bites--;
		count++;
	} 

	console.log('Finish!');
})(bitesAmount)



// EXERCIES!
/*
using WHILE...
write an app that prints a single multiplication tables from 1 to 10
each line formatted as follow:
	5 x 1 = 5
	5 x 2 = 10
	5 x 3 = 15
	5 x 4 = 20
	5 x 5 = 25
	5 x 6 = 30
	5 x 7 = 35
	5 x 8 = 40
	5 x 9 = 45
	5 x 10 = 50
(the app should be able to do it with any number passed)

using DO WHILE...
Do the same as above, but changing the aritmetic operation for sum
*/