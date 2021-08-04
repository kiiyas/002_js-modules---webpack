//одним импортом импортируйте Game, GameSavingData и 
//функции readGameSaving, writeGameSaving (переименуйте в loadGame и saveGame)

import Game, {GameSavingData, readGameSaving as loadGame,  writeGameSaving as saveGame} from './game.js';


//console.log('app worked');

const game = new Game();
game.start();