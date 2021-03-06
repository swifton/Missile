function level() {
  size = 4000;
  this.size = size;
//  this.aim = [1500, 350, 50, 50];
//  this.walls = [[200, 0, 100, 500], [400, 400, 100, 500], [600, 0, 100, 500]];
//  this.walls = [[400, 0, 500, 300], [400, 500, 500, 300], [900, 0, 700, 100], [900, 700, 700, 100], [1100, 300, 200, 200]];
  this.walls = [[-size, -size, 2 * size, 10], [-size, -size, 10, 2 * size], [-size, size, 2 * size, 10], [size, -size, 10, 2 * size]];
  this.fuel = [];


  this.generate = generate;
  function generate() {
    this.randomGenerator();
//    this.mazeGenerator();
  }

  this.mazeGenerator = mazeGenerator;
  function mazeGenerator() {
/*    var x, y, h;
    var density = 1/5;
    var wid = 300;
    var dim = Math.floor(2 * size / wid);
    this.aim = [getRandomInt(-size, size), getRandomInt(-size, size), 50, 50];
    for (var l = 0; l < dim * dim;) {
      m = l + getRandomInt(1, Math.floor(dim * density));
      h = getRandomInt(1, Math.floor(dim * density));
      l = m + h;
      x = Math.floor(m / dim);
      y = m - x * dim;
      this.mazeWall(x, y, h, dim, wid);
    }
    
    for (var l = 0; l < dim * dim;) {
      m = l + getRandomInt(1, Math.floor(dim * density));
      h = getRandomInt(1, Math.floor(dim * density));
      l = m + h;
      x = Math.floor(m / dim);
      y = m - x * dim;
      this.vWall(x, y, h, dim, wid);
    }*/
  }

/*
  this.mazeWall = mazeWall;
  function mazeWall(x, y, h, dim, wid) {
      if (y + h > dim) {
        wall1 = [(x - dim / 2) * wid, (y - dim / 2) * wid, 10, (dim - y) * wid];
        wall2 = [(x + 1 - dim / 2) * wid, (-dim / 2) * wid, 10, (y + h - dim) * wid];
        this.pushWall(wall1, this.aim);
        this.pushWall(wall2, this.aim);
      }
      else {
        wall = [(x - dim / 2) * wid, (y - dim / 2) * wid, 10, h * wid];
        this.pushWall(wall, this.aim);
      }
  }

  this.vWall = vWall;
  function vWall(x, y, h, dim, wid) {
      if (x + h > dim) {
        wall1 = [(x - dim / 2) * wid, (y - dim / 2) * wid, (dim - x) * wid, 10];
        wall2 = [(- dim / 2) * wid, (y + 1 -dim / 2) * wid, (x + h - dim) * wid, 10];
        this.pushWall(wall1, this.aim);
        this.pushWall(wall2, this.aim);
      }
      else {
        wall = [(x - dim / 2) * wid, (y - dim / 2) * wid, h * wid, 10];
        this.pushWall(wall, this.aim);
      }
  }
*/
  this.pushWall = pushWall;
  function pushWall(wall, aim) {
    if (!rectIntersect(wall, [-200, -300, 400, 400]) && !rectIntersect(wall, aim)) {
      this.walls.push(wall);
    }
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
      this.pushWall(wall, this.aim);
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
