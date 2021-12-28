// Introducing the nullish operator: "??"
var foo = null ?? 'default string';
console.log(foo); // default string

/*
Evaluates if the first value is null, then if it is, assigns the righter value to the variable
leftExpr ?? rightExpr
*/
var nullValue = null;
var valA = nullValue ?? "default for A";
console.log(valA); // "default for A"

// ASSIGN A DEFAULT VALUE
var foo;

//  foo is never assigned any value so it is still undefined
var someDummyText = foo || 'Hello!';

/*
As you can see the || OR is also used to assign values, not only for
logical comparisons, thereby next code is possible
*/
(null || undefined) ?? "foo"; // returns "foo"
(null || 2) ?? "foo"; // returns 2