var canvas = document.getElementById("maincanvas");
var margin = 110;
var mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  globalx: 0,
  globaly: 0,
  down: false,
};

canvas.addEventListener("mousemove", (event) => {
  mouse.x = event.clientX - margin / 2;
  mouse.y = event.clientY - margin / 2;
  mouse.globalx = event.clientX;
  mouse.globaly = event.clientY;
});

canvas.addEventListener("mousedown", () => {
  mouse.down = true;
});

canvas.addEventListener("mouseup", () => {
  mouse.down = false;
});

/* failed context menu :p

function showContextMenu() {
  var contextMenu = document.createElement("div");
  contextMenu.className = "contextmenu";
  contextMenu.style.position = "absolute";
  contextMenu.style.top = mouse.globaly + "px";
  contextMenu.style.left = mouse.globalx + "px";
  contextMenu.innerHTML = "<p>Empty for now...</p>";
  document.body.appendChild(contextMenu);
}

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  mouse.down = false;
  showContextMenu();
  return false;
});

*/

var editor = {
    id: document.getElementById('id'),
    size: document.getElementById('indexsize'),
}

editor.size.addEventListener('change',() => {
    platforms[editor.id.value].width = editor.size.value;
    platforms[editor.id.value].height = editor.size.value;
});

var meteor3 = new Image();
meteor3.src = "meteor3.png";
meteor3.width = 50;
meteor3.height = 50;

canvas.addEventListener("click", () => {
  platforms.push({
    type: meteor3,
    width: 50,
    height: 50,
    x: mouse.x - meteor3.width / 2,
    y: mouse.y - meteor3.height / 2,
  });
});

setInterval(() => {
  if (canvas.width !== window.innerWidth - margin) {
    canvas.width = window.innerWidth - margin;
  }
  if (canvas.height !== window.innerHeight - margin) {
    canvas.height = window.innerHeight - margin;
  }
}, 10);

var ctx = canvas.getContext("2d");

var platforms = [];

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#FF0000";

  for (var i in platforms) {
    ctx.drawImage(
      platforms[i].type,
      platforms[i].x,
      platforms[i].y,
      platforms[i].width,
      platforms[i].height
    );
  }
}

setInterval(draw, 10);
