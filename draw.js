function clear(cnv) {
	cc = cnv.getContext('2d');
	cc.fillStyle = '#d0e7f9';
	cc.clearRect(0, 0, cnv.width, cnv.height);
	cc.beginPath();
	cc.rect(0, 0, cnv.width, cnv.height);
	cc.closePath();
	cc.fill();
}

function draw() {
//	drawMissile();
//	drawLevel();

	drawMissileC();
	drawLevelC();
	drawFuel();
};

function drawMissile() {
	var rad = 20;
	var sin = Math.sin(missileA);
	var cos = Math.cos(missileA);
	drawCircle(missileX, missileY, rad, "green"); 
	drawCircle(missileX + cos * rad * 2, missileY + sin * rad * 2, rad, "black"); 
	drawCircle(missileX + cos * rad * 4, missileY + sin * rad * 4, rad, "black"); 
}

function drawLevel() {
	drawRectangle(level.aim[0], level.aim[1], level.aim[2], level.aim[3], "red"); 
	for (var i in level.walls) {
		drawRectangle(level.walls[i][0], level.walls[i][1], level.walls[i][2], level.walls[i][3], "black"); 
	}
	// draw fuel
}

function drawMissileC() {
	var rad = 20;
	var sin = Math.sin(missileA);
	var cos = Math.cos(missileA);
	drawCircle(width/2, height/2, rad, "green"); 
	drawCircle(width/2 + cos * rad * 2, height/2 + sin * rad * 2, rad, "black"); 
	drawCircle(width/2 + cos * rad * 4, height/2 + sin * rad * 4, rad, "black"); 
}

function drawLevelC() {
	for (var i in level1.fuel) {
		drawObjectC(level1.fuel[i], "blue");
	}

	for (var i in level1.walls) {
		drawObjectC(level1.walls[i], "black");
	}
	drawObjectC(level1.aim, "red");
}

function drawObjectC(rect, color) {
	drawRectangle(rect[0] - missileX + width/2, rect[1] - missileY + height/2, rect[2], rect[3], color); 
}

function drawMissile() {
	var rad = 20;
	var sin = Math.sin(missileA);
	var cos = Math.cos(missileA);
	drawCircle(missileX, missileY, rad, "green"); 
	drawCircle(missileX + cos * rad * 2, missileY + sin * rad * 2, rad, "black"); 
	drawCircle(missileX + cos * rad * 4, missileY + sin * rad * 4, rad, "black"); 
}

function drawLevel() {
	drawRectangle(level.aim[0], level.aim[1], level.aim[2], level.aim[3], "red"); 
	for (var i in level.walls) {
		drawRectangle(level.walls[i][0], level.walls[i][1], level.walls[i][2], level.walls[i][3], "black"); 
	}
}

function drawCircle(x, y, r, color) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2 * Math.PI, false);
	ctx.fillStyle = color;
	ctx.fill();
}

function drawRectangle(x1, y1, dx, dy, color) {
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.fillRect(x1, y1, dx, dy);
	ctx.fill();
}

function drawFuel() {
	ctx.fillStyle = "#000000";
	ctx.font = 'bold 20px sans-serif';
	ctx.textBaseline = "bottom";
	ctx.fillText(fuel.toString(), 50, 50);
}

