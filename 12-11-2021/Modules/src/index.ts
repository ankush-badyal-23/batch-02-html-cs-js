import './css/main.css';
import {Game} from './ts/Game';
addEventListener('load', () => {
    const game = new Game();
    game.start();
});