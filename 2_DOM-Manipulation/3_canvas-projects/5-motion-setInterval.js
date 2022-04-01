/*
Here, I am creating a ball that bounce all around the canvas
*/
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var ballX = 150;
var ballY = 10;
var ballSpeedX = 5;
var ballSpeedY = 10;
var ballSize = 12;
var ballColor = 'steelblue';

window.onload = moveBall;

function moveBall() {
	var _FPS = 30;

	setInterval(() => {
		ballX += ballSpeedX;
		ballY += ballSpeedY;
		drawRect(0,0, canvas.width,canvas.height, 'silver');
		drawCircle(ballX, ballY, ballSize, ballColor);
		
		if (ballX >= canvas.width || ballX <= 0) {
			ballSpeedX = -ballSpeedX;
		}
		if (ballY >= canvas.height || ballY <= 0) {
			ballSpeedY = -ballSpeedY;
		}
	}, 1000/_FPS);
}

function drawRect(x,y, width,height, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x,y, width,height);
}

function drawCircle(x,y, size, color) {
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.arc(x,y, size, 0, Math.PI*2);
	ctx.fill();
}