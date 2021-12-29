# Imperative Programming
The majority of programming language are imperative, it means that you provide a step by step instruction and that's what should do. That's exactly what we've been doing all over the priors folders in this course, so you're already familiar with it.

For example, here's the code of a program that gives you the area of a circle given the ratio

```javascript
const ratio = parseFloat(prompt('Ratio please:'));

function findCircleRatio(r = 1) {
	const two = 2;
	let area = Math.PI * Math.pow(r, two);
	alert('The area of the circle is: ' + area.toFixed(2));
	return area;
}

findCircleRatio(ratio);
```