function leftKeyDown() {if (!gamePaused) {direction = -1;}}
function rightKeyDown() {if (!gamePaused) {direction = 1;}}
function leftKeyUp() {direction = 0;}
function rightKeyUp() {direction = 0;}
function spaceDown() {pauseGame();}

