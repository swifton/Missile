function level() {
	size = 4000;
	this.size = size;
//	this.aim = [1500, 350, 50, 50];
//	this.walls = [[200, 0, 100, 500], [400, 400, 100, 500], [600, 0, 100, 500]];
//	this.walls = [[400, 0, 500, 300], [400, 500, 500, 300], [900, 0, 700, 100], [900, 700, 700, 100], [1100, 300, 200, 200]];
	this.walls = [[-size, -size, 2 * size, 10], [-size, -size, 10, 2 * size], [-size, size, 2 * size, 10], [size, -size, 10, 2 * size]];
	this.fuel = [];


	this.generate = generate;
	function generate() {
		this.randomGenerator();
	}

	this.mazeGenerator = mazeGenerator;
	function mazeGenerator() {

	}

	this.randomGenerator = randomGenerator;
	function randomGenerator() {
		var x, y, w, h;
		var density = 0;
		this.aim = [getRandomInt(-size, size), getRandomInt(-size, size), 50, 50];
		for (var i = 0; i < 500; i++) {
			x = getRandomInt(-size, size);
			y = getRandomInt(-size, size);
			w = getRandomInt(1, 20);
			h = getRandomInt(1, 20);
			wall = [x, y, w * 10, h * 10];
			if (!rectIntersect(wall, [-200, -200, 400, 400]) && !rectIntersect(wall, this.aim)) {
				this.walls.push(wall);
			}
		}
		
		for (var i = 0; i < 60; i++) {
			x = getRandomInt(-size, size);
			y = getRandomInt(-size, size);
			this.fuel.push([x, y, 100, 100]);
		}
	}

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	this.generate();
}
