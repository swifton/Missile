var gLoop;
function reset() {
	missileX = 0;
	missileY = 0;
	missileA = Math.PI/2;
	speed = 3;
	aSpeed = 5/180;
	direction = 0;
	fuel = 2000;
}

function move() {
	var sin = Math.sin(missileA);
	var cos = Math.cos(missileA);
	missileX -= speed * cos;
	missileY -= speed * sin; 
	rotate();
}

function rotate() {
	missileA += aSpeed * direction;
}

function GameLoop() {
	clear(c);
	move();
	fuel -= 1;
	gLoop = setTimeout(GameLoop, timeLapse);
	check();
	draw();
}

function check() {
	for (var i in level1.walls) {
		if (collision(level1.walls[i], [missileX, missileY])) {
			reset(); 
			pauseGame();
		} 
	}

	if (collision(level1.aim, [missileX, missileY])) {
		newLevel();
		reset();
		pauseGame();
		alert("You win!");
		return;
	}
	
	for (var i in level1.fuel) {
		if (collision(level1.fuel[i], [missileX, missileY])) {
			fuel += 1000;
			level1.fuel.splice(i, 1);
		} 
	}
	
	if (fuel == 0) {
		reset();
		pauseGame();
	}
}

function collision(rectangle, point) {
	if ((rectangle[0] <= point[0]) && (rectangle[1] <= point[1]) && (rectangle[0] + rectangle[2] >= point[0]) && (rectangle[3] + rectangle[1] >= point[1])) {
		return true;
	}
	return false;
}

function newLevel() {
	level1 = new level();
}


function rectIntersect(rect1, rect2) {
	// Not every possible configuration is considered (cross)
	v1 = rectVertices(rect1);
	v2 = rectVertices(rect2);
	ans = false;
	for (v in v1) {
		ans = ans || collision(rect2, v1[v]);
	} 

	for (v in v2) {
		ans = ans || collision(rect1, v2[v]);
	} 

	return ans;
}

function rectVertices(rect) {
	return [[rect[0], rect[1]], [rect[0] + rect[2], rect[1]], [rect[0], rect[1] + rect[3]], [rect[0] + rect[2], rect[1] + rect[3]]];
}

var missileX;
var missileY;
var missileA;
var fuel;
var speed;
var aSpeed;
var direction;
reset();

var level1 = new level();
