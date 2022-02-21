// First, select and element
var form = document.querySelector('.form');

/* An event has 2 must have parameters, the event name and a callback function
(what will happen after the event is fired) */

// Add an event
form.addEventListener('submit', function(eventObj) {
	eventObj.preventDefault();
	console.log(eventObj);
});

// as you know, can be an anonymus function or a regular function reference

form.addEventListener('click', myCallback);

function myCallback(evt) {
	console.log('clicked');
	console.log(evt);
}

// Check out event.md to know more about the EventObject