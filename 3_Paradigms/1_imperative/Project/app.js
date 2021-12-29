/*
Do an app that converts fahrenheit to celsius and the other way around

- if user type 'f' it means will convert from fahrenheit units to celsius -> (°F - 32) * 5/9 = °C
- if user type 'c' it means will convert from celsius units to fahrenheit -> (°C * 9/5) + 32 = °F
- catch the wrong typing, display a message and end the program
- use of bootstrap is not mandatory
*/

var str = `
	Type "f" to convert from Fahrenheits to Celsius
	Type "c" to convert from Celsius to Fahrenheits
`;
var temp = prompt(str).toLowerCase();
var result = 0;

if (temp === 'f')
	getCelsius();
else if (temp === 'c')
	getFahrenheit();
else
	alert('Neither "f" nor "c". Ending the program...');

function getCelsius() {
	var f = parseFloat(prompt('Fahrenheits please'));
	if (isNaN(f)) {
		alert('Not a Number, bye!');
	} else {
		var C = (f - 32) * 5/9;
		alert('Celsius: ' + C);
	}
}

function getFahrenheit() {
	var c = parseFloat(prompt('Celsius please'));
	if (isNaN(c)) {
		alert('Not a Number, bye!');
	} else {
		var F = (c * 9/5) + 32;
		alert('Fahrenheits: ' + F);
	}
}