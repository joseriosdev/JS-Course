
// <<<<<<< Use of Aritmetic operations and mod >>>>>>>>
var sum = 5 + 6;
var rest = 2 - 9;
var multiplication = 1 * 10;
var division = 50 / 5;
var mod = 11 % 5;

// Understanding the priority for previous operations
var priority = 5 + 6 * 2;
var priority1 = 5 + 6 * 8 + 9 - 6 - 3 / 2 * 0 + 13;
var priority2 = (5 + 6 * 8 + 9) - (6 - 3) / (2 * 0 + 13);

// .toFixed() method
var decimal = 3.5555555;
console.log(decimal.toFixed(2)); // 3.55
console.log(5.4534.toFixed(1)); // 5.4


// <<<<<<< Use of concatenation with Strings >>>>>>>>
var str1 = 'Hello';
var str2 = "World";
var str3 = str1 + " " + str2 + '.';
console.log(str1 + str2);
console.log(str3);

// Escaping caracthers
var newLine = 'This sentence has \n a \'new\' line';
console.log(newLine);

// Template literals
var one = 1;
var myTemplateLiteral = `${str3} is the ${one}st line.`;
console.log(myTemplateLiteral);

// Accessing string caracthers through index
var myString = '#Never stop learning';
var hash = myString[0];
var stop = myString[7] + myString[8] + myString[9] + myString[10];
console.log(hash);
console.log(stop);
console.log(myString[5]);

// .length property
var val = myString.length;
console.log(myString.length);
console.log(val * 2);

// .toUpperCase() and .toLowerCase() methods
var lower = 'Look mom! I\'m coding!';
console.log(lower.toUpperCase());
console.log('SUPERB TEXT!'.toLowerCase());

// .trim() to remove extra whiteSpace
var s = '    hi    there      ';
console.log(s.trim()); // 'hi    there'