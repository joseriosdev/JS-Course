// BREAK & CONTINUE
/*
These are reserved keywords that are useful when using loops

- Continue: this will jump to the next loop cycle
- Break: will finish for good the loop

For Example: Let's print the odd numbers from 0 to 20
*/

for (var i = 0; i <= 20; i++) {
	if (i % 2 === 0)
		continue;
	else
		console.log(i);
}

// now found the impostor number from next array
var impostor = [2, 3, 4, 1, 6, '0', 4, 1, 3, 4];

for (var element of impostor) {
	if (typeof element === 'string') {
		console.log(`The impostor is the string "${element}"`);
		break;
	}
}

// ----------------- EXERCISE
/*
you got next array [1,4,'9',2,4,null,0,4,8,true]
using any for, do a program than can sum all the numbers of the given array
*/

var arr = [1,4,'9',2,4,null,0,4,8,true];
var result = 0;
for (var i = 0; i < arr.length; i++) {
	if (typeof arr[i] === 'number')
		result += arr[i];
	else
		continue;
}
console.log(result);