var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var canvasImg = new Image();
var imgURL = 'https://static.wikia.nocookie.net/nba/images/a/a8/Raptors.png/revision/latest/scale-to-width-down/500?cb=20150305114540&path-prefix=es';
var positionX = 0;
var positionY = 0;

canvasImg.src = imgURL;
ctx.drawImage(canvasImg, positionX, positionY);

// The above code, even though is well written, won't work the 100% of the time, because takes
// real time for the image to be loaded, that's why you better use the .onload property which is a function
canvasImg.onload = function() {
	ctx.drawImage(canvasImg, positionX, positionY);
}