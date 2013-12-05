var c = document.getElementById('c');
var ctx = c.getContext('2d');
var timeLapse = 1;
var width = 1570;
var height = 800;
	
c.width = width;
c.height = height;

window.addEventListener( "keydown", doKeyDown, true);
window.addEventListener( "keyup", doKeyUp, true);

GameLoop();
gLoop = clearTimeout(gLoop);
var gamePaused = true;
