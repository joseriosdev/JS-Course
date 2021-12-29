/*
Recursion is when a function calls itself
It has a base case that allows the end of the calls
In real life, you would not use this, but is good for lateral thinking
Creates a stack of function calls waiting to be resolved

Read about it:
https://www.freecodecamp.org/news/understanding-recursion-in-programming/

have look:
https://ahseeit.com//king-include/uploads/2021/03/155361005_132963632042690_2732852907229981115_n-2593006392.jpg

For the code sample, I'll be doing a countdown timer from a bomb
*/

function bombTimer(n) {
	if (n !== 0) {
		console.log(n);
		bombTimer(n - 1);
	} else {
		return console.log('KA BOOM!!!');
	}
}
bombTimer(5);
