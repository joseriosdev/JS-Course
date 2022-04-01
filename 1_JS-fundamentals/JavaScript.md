# JavaScript as programming language
All the folders inside "1_JS-fundamentals" aim to everyone who wants to learn JS as a programming language, those are the fundamentals. However, JS runs in the browser, and just by doing so, will have certain unique properties.

> Notice that JS can be ran in the browser thanks to [V8 engine](https://v8.dev/) created by Google.

## JS is easy to learn
What this really means is that is a high level language, the higher it gets the easiest is for us humans to understand it, this is like that because JS does not have a typing rule to follow, for that exists [TypeScript](https://www.typescriptlang.org/) nonetheless the rules in JS may change in the future.

# JS in the browser
JS in the browser allows you to catch html elements and do CRUDs with them (Create, Read, Update & Delete). By catching any of these elements you can also modify its properties, for example:

```javascript
var myElement = document.getElementById('unique-id-in-html-element');

myElement.onload = function() {
	console.log('This line is executed once my element has been fully loaded on page');
}

myElement.onmouseover = function() {
	console.log('This is executed whenever the mouse is over "myElement"');
}

myElement.style.backgroundColor = 'red';
```