const keyUp = [87, 38];
const keyDown = [83, 40];

var ctx;
var clientWidth = 500;
var clientHeight = 300;

var ball = new Ball();
var paddles = [new Paddle(-1, keyUp[0], keyDown[0]), new Paddle(1, keyUp[1], keyDown[1])];

var keyMap = {};

var onKeyDown = onKeyUp = function (e) {
	keyMap[e.keyCode] = e.type == 'keydown';
}

main();

function main() {
	init();

	setInterval(run, 1000 / 60);
}

function init() {
	var canvas = document.createElement('canvas');

	canvas.id = 'canvas';
    canvas.tabIndex = '1';
    canvas.width = clientWidth;
    canvas.height = clientHeight;
    canvas.style = 'border:1px solid #000000';

    ctx = canvas.getContext('2d');

    document.body.appendChild(canvas);

    document.getElementById('canvas').addEventListener('keydown', onKeyDown);
	document.getElementById('canvas').addEventListener('keyup', onKeyUp);
}

function run() {
	update();
	render();
}

function update() {
	ball.update();

	for (var paddle of paddles) {
		paddle.update();
	}
}

function render() {
	ctx.clearRect(0, 0, clientWidth, clientHeight);

	ball.render();

	for (var paddle of paddles) {
		paddle.render();
	}
}
