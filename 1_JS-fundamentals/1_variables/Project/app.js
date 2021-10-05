/*
THE PROJECT

* Write a program that takes the user info (firstName, lastName, age and planet) and saves it inside an Object Literal
* Greet the user full name
* Then tell the user what his age will be in +10 years
* Ask (true or false) if the user can fly by his own and if had met groot
	- If both are true, then his civilization is interplanetary
* Populate an extra field saying if the user is interplanetary and alert the answer
* Console log the created user

* Once previous requirements are met, re-factor it so it saves two users in an array

!!!!Can't use if else¡¡¡¡¡
*/

var users = [];
var user1 = {};
var user2 = {};
var extraYears = 10;

// Collect User1 info and push it into Array
alert('Hi User1, let me greet you properly');
user1.firstName = prompt('First Name:');
user1.lastName = prompt('Last Name:');
user1.age = parseInt(prompt('Age:'));
user1.planet = prompt('Planet Name:');

alert(`Hello ${user1.firstName} ${user1.lastName}. You're the User1!`);
alert('Your age after ' +extraYears+ ' years will be ' + ( Math.floor(user1.age + extraYears) ));

var canFly1 = prompt('TRUE or FALSE! \n Can you fly by yourself?');
canFly1 = Boolean(canFly1[0].toLowerCase() !== 'f');
var metGroot1 = prompt('TRUE or FALSE! \n Have you met Groot?');
metGroot1 = Boolean(metGroot1[0].toLowerCase() !== 'f');

user1.interplanetary = (canFly1 && metGroot1);
alert(`I can see that is ${user1.interplanetary.toString().toUpperCase()} that your planet ${user1.planet} is Interplanetary`);

console.log(user1);
users.push(user1);


// Collect User2 info and push it into Array
alert('Hello User2, allow me to greet you properly');
user2.firstName = prompt('First Name:');
user2.lastName = prompt('Last Name:');
user2.age = Number.parseInt(prompt('Age:'));
user2.planet = prompt('Planet Name:');

alert(`Hi ${user2.firstName} ${user2.lastName}. You're the User2!`);
alert('Your age after ' +extraYears+ ' years will be ' + ( Math.floor(user2.age + extraYears) ));

var canFly2 = prompt('TRUE or FALSE! \n Can you fly by yourself?');
canFly2 = Boolean(canFly2[0].toLowerCase() !== 'f');
var metGroot2 = prompt('TRUE or FALSE! \n Have you met Groot?');
metGroot2 = Boolean(metGroot2[0].toLowerCase() !== 'f');

user2.interplanetary = (canFly2 && metGroot2);
alert(`I can see that is ${user2.interplanetary.toString().toUpperCase()} that your planet ${user2.planet} is Interplanetary`);

console.log(user2);
users.push(user2);

// Print users Array
console.log(users);

alert("Well... this is it, bye!");