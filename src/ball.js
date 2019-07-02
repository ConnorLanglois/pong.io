function Ball() {
	Ball.prototype.update = update;
	Ball.prototype.render = render;

	this.r = (clientWidth + clientHeight) / 100;
	this.pos = [];
	this.velX;
	this.velY;

	this.setup = function () {
		this.pos = [clientWidth / 2, clientHeight / 2];
		this.velX = Math.random() >= 0.5 ? 1 : -1;
		this.velY = Math.random() >= 0.5 ? 1 : -1;
	}

	this.setup();

	function update() {
		for (var paddle of paddles) {
			if (this.pos[0] + paddle.player * this.r == paddle.pos[0] && this.pos[1] + this.r >= paddle.pos[1] && this.pos[1] - this.r <= paddle.pos[1] + paddle.height) {
				this.velX = -this.velX;
			}
		}

		if (this.pos[1] - this.r <= 0 || this.pos[1] + this.r >= clientHeight) {
			this.velY = -this.velY;
		} else if (this.pos[0] - this.r <= 0 || this.pos[0] + this.r >= clientWidth) {
			this.setup();
		}

		this.pos[0] += this.velX;
		this.pos[1] += this.velY;
	}

	function render() {
		ctx.beginPath();
		ctx.arc(this.pos[0], this.pos[1], this.r, 0, 2 * Math.PI);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}
