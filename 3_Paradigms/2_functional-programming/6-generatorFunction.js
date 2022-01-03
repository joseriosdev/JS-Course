/*
Generators Functions are functions that can be paused and resumed.
Each time that is paused, can 'yield' a value (similar to a return).
Commonly used while writting a library.
*/

function* g1() {
	yield 1;
  	yield 2;
  	yield 3;
  	yield 4;
}

// In order to use the generator, assign it to a variable

var iterator = g1();

console.log(iterator.next()); // returns an object literal {value: 2, done: false}
console.log(iterator.next().value) // to get the value returned by the yield (3)

// you can iterate generators
for (var value of iterator) {
	console.log(value);
}

// use case: have an ID's generator

function* idGenerator() {
	var id = 1;

	while (true) {
		yield id++;
	}
}

var idGenerator = idGenerator();

console.log(idGenerator.next().value); // 1
console.log(idGenerator.next().value); // 2
console.log(idGenerator.next().value); // 3
console.log(idGenerator.next().value); // 4
console.log(idGenerator.next().value); // 5
// ...