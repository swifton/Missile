realtime = true;

function reset() {
  missileX = 0;
  missileY = 0;
  missileA = Math.PI/2;
  speed = 6;
  aSpeed = 10/180;
  direction = 0;
  fuel = 2001;

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

function step() {
  resize_canvas();
  clear_canvas();
  move();
  fuel -= 1;
  check();
  draw();
}

function check() {
  for (var i = 0; i < level1.walls.length; i++) {
    if (collision(level1.walls[i], [missileX, missileY])) {
      reset(); 
      pause_game();
      return;
    } 
  }
  if (collision(level1.aim, [missileX, missileY])) {
    newLevel();
    reset();
    pause_game();
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

var timeLapse = 1;
var width = 1570;
var height = 800;

var gamePaused = true;

reset();

var level1 = new level();
console.log("This is where the goal is");
console.log(level1.aim);
