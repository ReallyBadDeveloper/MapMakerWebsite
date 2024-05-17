var canvas = document.getElementById('maincanvas');
var margin = 100;
var mouse = {
    x: canvas.width/2,
    y: canvas.height/2,
    down: false
};

canvas.addEventListener('mousemove',(event) => {
    mouse.x = event.clientX - margin/2;
    mouse.y = event.clientY - margin/2;
});

canvas.addEventListener('mousedown',() => {
    mouse.down = true;
});

canvas.addEventListener('mouseup',() => {
    mouse.down = false;
});

setInterval(() => {
    if (canvas.width !== window.innerWidth - margin) {
        canvas.width = window.innerWidth - margin;
    }
    if (canvas.height !== window.innerHeight - margin) {
        canvas.height = window.innerHeight - margin;
    }
},10);

var ctx = canvas.getContext('2d');

var platforms = [];

function draw() {
    var meteor3 = new Image();
    meteor3.src = "meteor3.png";
    meteor3.width = 50;
    meteor3.height = 50;

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#FF0000";

    if (mouse.down) {
        platforms.push({
            type: meteor3,
            width: 50,
            height: 50,
            x: mouse.x,
            y: mouse.y
        });
    }
    for (var i in platforms) {
        ctx.drawImage(platforms[i].type, platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
    }
}

setInterval(draw,10);