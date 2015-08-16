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
	drawOpaqueRectangle(level.aim[0], level.aim[1], level.aim[2], level.aim[3], "red"); 
	for (var i in level.walls) {
		drawOpaqueRectangle(level.walls[i][0], level.walls[i][1], level.walls[i][2], level.walls[i][3], "black"); 
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
	
	miniMap();
}

function miniMap() {
	var scale = 100;
	drawOpaqueRectangle(0, height - 2 * scale, 2 * scale, 2 * scale, "white");
	for (var i in level1.fuel) {
		drawSmallObject(level1.fuel[i], "blue", scale);
	}

	for (var i in level1.walls) {
		drawSmallObject(level1.walls[i], "black", scale);
	}
	drawSmallObject(level1.aim, "red", scale);
}


function drawSmallObject(rect, color, scale) {
	var size = level1.size;
	drawOpaqueRectangle(rect[0] * scale/size + scale, rect[1] * scale/size + height - scale, rect[2] * scale/size, rect[3] * scale/size, color); 
}

function drawObjectC(rect, color) {
	drawOpaqueRectangle(rect[0] - missileX + width/2, rect[1] - missileY + height/2, rect[2], rect[3], color); 
}

function drawMissile() {
	var rad = 20;
	var sine = Math.sin(missileA);
	var cosine = Math.cos(missileA);
	drawCircle(missileX, missileY, rad, "green"); 
	drawCircle(missileX + cosine * rad * 2, missileY + sine * rad * 2, rad, "black"); 
	drawCircle(missileX + cosine * rad * 4, missileY + sine * rad * 4, rad, "black"); 
}

function drawLevel() {
	drawOpaqueRectangle(level.aim[0], level.aim[1], level.aim[2], level.aim[3], "red"); 
	for (var i in level.walls) {
		drawOpaqueRectangle(level.walls[i][0], level.walls[i][1], level.walls[i][2], level.walls[i][3], "black"); 
	}
}

function drawFuel() {
  drawLabel(fuel.toString(), 50, 50);
}

