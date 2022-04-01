// canvas setup
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

// this will draw a line from point 0,0 to 300,150
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(300, 150);
ctx.stroke();

// another line but with 3 new properties, have a look
ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.lineWidth = 10;
ctx.lineCap = 'round';
// above properties will be remembered for future strokes
ctx.moveTo(canvas.width/2, canvas.height/2);
ctx.lineTo(canvas.width, canvas.height);
ctx.stroke();

// you can do a complex forms by using several times the lineTo after moveTo
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(20, 100);
ctx.lineTo(70, 100);
ctx.stroke();