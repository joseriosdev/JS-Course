var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

// draw a square 100px * 100px black by default
ctx.fillRect(100,100, 0,0);

// this draw a centered square with variables
var color = 'steelblue';
var width = 100;
var height = 100;
var x = canvas.width/2 - width/2;
var y = canvas.height/2 - height/2;

ctx.fillStyle = color;
ctx.fillRect(x,y, width,height);

// in order to draw a circle you use the .arc function
// play with the parameters so you can understand better what's going on
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();

// a filled circle
var size = 10;
color = 'firebrick';
x = canvas.width/2;
y = canvas.height/2;

ctx.beginPath();
ctx.arc(x,y, size, 0, Math.PI*2);
ctx.fillStyle = color;
ctx.fill();

// NOTE: Every shape drawn, it's a layer, so you can draw shapes of top of others, just like layers