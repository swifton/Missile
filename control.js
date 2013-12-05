

function doKeyDown(e) {
//	if (gamePaused == true) {return;}
	var i = e.keyCode;
	//console.log(i);
	if (i == 37) {  // left
		direction = -1;
	}
	if (i == 39) {  // right
		direction = 1;
	}
	if (i == 38) {  // up
	}
	if (i == 40) {  // down
	} 
	if (i == 32) {  // space
		pauseGame();
	}
	if (i == 27) { // escape
		pauseGame();
	}
}

function doKeyUp(e) {
//	if (gamePaused == true) {return;}
	var i = e.keyCode;
	//console.log(i);
	if (i == 37){  // left
		if(direction == -1) direction = 0;
	}
	if (i == 39){  // right
		if(direction == 1) direction = 0;
	}
	if (i == 38){  // up
	}
	if (i == 40){  // down
	}
	if (i == 32){  // space
	}
}
