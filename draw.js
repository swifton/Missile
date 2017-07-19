function draw() {
  drawMissile();
  drawLevel();
  drawFuel();
  drawMiniMap();
};

function drawMissile() {
  var rad = 20;
  var sin = Math.sin(missileA);
  var cos = Math.cos(missileA);
  draw_filled_circle(width/2, height/2, rad, "green"); 
  draw_filled_circle(width/2 + cos * rad * 2, height/2 + sin * rad * 2, rad, "black"); 
  draw_filled_circle(width/2 + cos * rad * 4, height/2 + sin * rad * 4, rad, "black"); 
}

function drawLevel() {
  for (var i in level1.fuel) {
    drawObject(level1.fuel[i], "blue");
  }

  for (var i in level1.walls) {
    drawObject(level1.walls[i], "black");
  }
  drawObject(level1.aim, "red");
}

function drawMiniMap() {
  var scale = 100;
  draw_opaque_rectangle(0, height - 2 * scale, 2 * scale, 2 * scale, "white");
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
  draw_opaque_rectangle(rect[0] * scale/size + scale, rect[1] * scale/size + height - scale, rect[2] * scale/size, rect[3] * scale/size, color); 
}

function drawObject(rect, color) {
  draw_opaque_rectangle(rect[0] - missileX + width/2, rect[1] - missileY + height/2, rect[2], rect[3], color); 
}

function drawFuel() {
  draw_label(fuel.toString(), 50, 50);
}

