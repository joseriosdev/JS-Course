// Callbacks is when a function receives as a parameter another function
// Take a look to 2 pre-build Functions in JS that takes a callback
// when passing a callback, the function will be anonymus

setTimeout(function(){
	console.log('I\'m loggin this message after 2 seconds');
}, 2000);

setInterval(() => {
	console.log('I\'m loggin this message every 3.5 seconds');
}, 3500);