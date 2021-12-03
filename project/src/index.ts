import "./css/main.css";
import { Game } from "./ts/Game";

window.addEventListener("load", () => {
    const gameDiv:HTMLDivElement = document.getElementById("game") as HTMLDivElement;
    const game = new Game({
        backgroundColor: 0x000000,
        resizeTo: gameDiv,
        sharedLoader: true,
        sharedTicker: true,
    });
    gameDiv.appendChild(game.view);
    game.start();
    //#DEBUG
    (<any>window)["app"] = game.app;
    (<any>window)["stage"] = game.stage;
    //#ENDDEBUG
    
    window.addEventListener("resize", () => {
       game.resize();
    });
  });
