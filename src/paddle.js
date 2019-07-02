function Paddle(player, keyUp, keyDown) {
	Paddle.prototype.update = update;
	Paddle.prototype.render = render;

	this.player = player;
	this.keyUp = keyUp;
	this.keyDown = keyDown;

	this.width = clientWidth / 100;
	this.height = clientHeight / 2;
	this.pos = [clientWidth / 2 * (this.player + 1) - this.player * 10 - (this.player == 1) * this.width, clientHeight / 2 - this.height / 2];
	this.velY = 0;

	function update() {
		if (keyMap[this.keyUp] && keyMap[this.keyDown]) {
			this.velY = 0;
		} else if (keyMap[this.keyUp]) {
			this.velY = -1;
		} else if (keyMap[this.keyDown]) {
			this.velY = 1;
		} else {
			this.velY = 0;
		}

		this.pos[1] = Math.max(0, Math.min(this.pos[1] + this.velY, clientHeight - this.height));
	}

	function render() {
		ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
	}
}
