/*
You will get to see a lot of callbacks in Js, but what are they?
They're simply a function that is passed as an argument or parameter,
we have already been using them, here's a recall
*/
var ar = ['tiger','and','wax','monkey','show'];
console.log(ar.filter(function(word) {
	return word.length > 3;
}));

/*
A callback function is a function that is passed as an argument to another function,
to be “called back” at a later time. A function that accepts other functions as arguments
is called a higher-order function, which contains the logic for when the callback function gets executed.
It’s the combination of these two that allow us to extend our functionality
*/

// creating my own callback function
function createQuote(quote, callback){ 
  var myQuote = "Like I always say, " + quote;
  callback(myQuote);
}

function logQuote(quote){
  console.log(quote);
}

createQuote("eat your vegetables!", logQuote);

// Why do we use callbacks?
// they are often used when dealing with servers call, that's a topic to cover in the async folder