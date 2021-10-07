// Switch statement takes a single variable and checks for a ESPECTED VALUE
// Example, you have the text variable: ACTION, and can only be 'run' or 'walk'
// well, you create a code when ACTION is 'run' and another behaviour when is 'walk'
// Switch will help you to switch between code block according to the value inside your variable, in this case, ACITON var

// Let's have a look with an example
var language = 'português';

switch(language) {
	case 'español':
		console.log('¡Hola amigo!');
		break;
	case 'deutsch':
		console.log('Hallo Freund!');
		break;
	case 'português':
		console.log('Oi cara!'); // this will be loged
		break;
}
// What's break? -> is a way to tell JS that is the end of the executed code


// Alright, and what about a totally different language?
// you can use default, and for our example, let's use the international language for greeting
switch(language) {
	case 'español':
		console.log('¡Hola amigo!');
		break;
	case 'deutsch':
		console.log('Hallo Freund!');
		break;
	case 'português':
		console.log('Oi cara!');
		break;
	default:
		console.log('Hello friend!');  // this will be loged and no need to put break, since is the default
}
// THAT'S ALL YOU NEED TO KNOW


// CODE SAMPLE
var meatTypes = ['pork', 'fish', 'cow', 'chicken'];
var randomNumber = getRandomNumber(0, meatTypes.length);
var meat = meatTypes[randomNumber];

var randomNumber = (min, max) => Math.floor( Math.random() * (max-min) + max );

switch(meat) {
	case 'pork':
		alert(`${meat.toUpperCase()} is a common meat in China`);
		break;
	case 'fish':
		alert(`${meat.toUpperCase()} tends to have a strong odor`);
		break;
	case 'cow':
		alert(`${meat.toUpperCase()} burgers ♥`);
		break;
	case 'chicken':
		alert(`${meat.toUpperCase()} everything tastes like chiken`);
		break;
	default:
		alert('Looks like you want to eat a not common meat');
}


// EXERCISE
// Sandra is a teacher and wants to send an email, accordingly to the student's final note
// write a function sendEmail()
// When cheking the student's note (A, B, C, D, E, F), the app will be able to 'send' the proper email to the student

