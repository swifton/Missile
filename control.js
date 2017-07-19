function left_key_down() {if (!game_paused) {direction = -1;}}
function right_key_down() {if (!game_paused) {direction = 1;}}
function left_key_up() {direction = 0;}
function right_key_up() {direction = 0;}
function space_down() {pause_game();}

