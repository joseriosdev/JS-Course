# JS Modules
> This section doesn't have a project, I'll be explaining modules in this .md file and show an example

Modules allows you to split your code in an ordered way, making easy to scale or refactor. There is a simple flow to follow.
1. Have code to export
2. Import the code into your main JavaScript file

What you can export is...
## Exporting
Export anything! from variables, to functions to even classes! You can use:
* Default export
* Standard export

In this code sample we can export the default variable of `fullAge`
```javascript
// 📂file.js
const fullAge = 18;
function User(name, age) {
	this.name = name
	this.age = age;
}

function alertFullAge() {
	alert('The full age is 18');
}
export default fullAge;
```
Or export the class as default; the variable, and the function separately:
```javascript
export default User;
export { fullAge, alertFullAge }
```
Or use the common inline export:
```javascript
export const fullAge = 18;
export default function User(name, age) {
	this.name = name
	this.age = age;
}

export function alertFullAge() {
	alert('The full age is 18');
}
```

> **Important note** - to practice modules, you need to run a local server

We're almost done, there's something more that is necessary to write but this time in the HTML file:
```html
<script type="module" defer src="./app.js" ></script>
```
## Importing
Straight forward
```javascript
// 📂main.js
import User from './file.js';
```
With an alias
```javascript
import u from './file.js';
```
Importing the other stuff
```javascript
import u, {fullAge, alertFullAge} from './file.js';
```
Use the `as` keyword to add an alias
```javascript
import u, {fullAge as fa, alertFullAge as af} from './file.js';
```

> That's all folks, here's the [full documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules 'modules')