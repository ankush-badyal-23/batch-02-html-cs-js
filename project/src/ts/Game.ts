import { Application } from "pixi.js";
import assets from "../config/assets.json";
import { load } from "./utils/Preloader";
export class Game extends Application {
    public load(): void {
        console.log("Game started");
        load(assets, ()=>{

        });
    }   
}