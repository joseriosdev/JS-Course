/*
When talking about motion in canvas, you can do it with "window.requestAnimationFrame(funct)"
or "window.setInterval(funct, time)"
In this case, I took code from the MDN documentation and paste it here, which is using "requestAnimationFrame"
*/

// the earth and moon orbit aroung the sun
var sun = new Image();
var moon = new Image();
var earth = new Image();

function init(){
    sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
    moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
    earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
    window.requestAnimationFrame(draw);
}

function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');

    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0,0,300,300); // clear the canvas

    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'rgba(0,3,255,0.4)';
    ctx.save();
    ctx.translate(150,150);

    // the earth
    var time = new Date();
    ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
    ctx.translate(105,0);
    ctx.fillRect(0,-12,50,24); // shadow
    ctx.drawImage(earth,-12,-12);

    // the moon
    ctx.save();
    ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
    ctx.translate(0,28.5);
    ctx.drawImage(moon,-3.5,-3.5);
    ctx.restore();

    ctx.restore();

    ctx.beginPath();
    ctx.arc(150,150,105,0,Math.PI*2,false); // orbit
    ctx.stroke();

    ctx.drawImage(sun,0,0);

    window.requestAnimationFrame(draw);
}

init();