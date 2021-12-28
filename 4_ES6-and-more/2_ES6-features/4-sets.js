/*
SETS are similar to arrays, but the Set object lets you store unique values of any type.
UNIQUE VALUES!
example...
*/

let arr = [9,8,9,1];
console.log(arr); // 9, 8, 9, 1

let mySet = new Set(arr);
console.log(mySet); // 9, 8, 1

//Methods
// Same methods than map object but instead of using get and set, uses add
mySet.add(5);
console.log(mySet); // 9, 8, 1, 5
mySet.add(5);
console.log(mySet); // 9, 8, 1, 5 -> keeps the same 'cause store unique values


for (let item of mySet) {
	console.log(item);
}