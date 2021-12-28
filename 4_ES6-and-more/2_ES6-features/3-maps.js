/*
MAPS holds key-value pairs similar to object literals
but the way you access them is different, use the methods GET and SET
for that. Maps also have a property called 'size' that shows you the length.
Oh! and maps remembers the insertion order
*/

const myMap = new Map();
myMap.set('name', 'Jane');
myMap.set('alive', true);
myMap.set('age', 58);
console.log(myMap.size); // 3
console.log(myMap.get('age')); // 58

// iterating a map
for (let [key, value] of myMap) {
	console.log(key + ' : ' + value);
}

// Other maps methods...
// HAS: ask if the map has certain key
console.log(myMap.has('Name')); // false
console.log(myMap.has('name')); // true

// DELETE: delete the requested key
console.log(myMap.delete('age'));

// CLEAR: deletes all the keys in the map
console.log(myMap.clear());

/*
Map has also Iteration Methods that are beyond this course scope
but, by watching these videos you can understand what is this about

+ https://www.youtube.com/watch?v=Lo70ypUOHNk
+ https://www.youtube.com/watch?v=c5x7z02Idfo
+ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#iteration_methods

Here's a summary: the Symbol Primitive Type has an iterator property. By using this,
you can force an object to be capable of use the for..of loop
*/