import { Application, Container } from "pixi.js";
import assets from "../config/assets.json";
import backgrounds from "../config/background.json";
import baseGameConfig from "../config/baseGame.json";
import { BackgroundScene } from "./Scenes/BackgroundScene";
import { BaseGameScene } from "./Scenes/BaseGameScene";
import { BaseView } from "./Scenes/BaseView";
import { IDisplayConfig } from "./Scenes/IDisplayConfig";
import { load } from "./utils/Preloader";
export class Game {
  private scenes: { [key: string]: BaseView } = {};
  public app: Application;

  constructor(options: any) {
    this.app = new Application(options);
  }

  public get view(): HTMLCanvasElement {
    return this.app.view;
  }

  public get stage(): Container {
    return this.app.stage;
  }

  public start(): void {
    console.log("Game started");
    load(assets, () => {
      this.app.ticker.add(this.update, this);
      const bgScene = new BackgroundScene(
        <IDisplayConfig>(<unknown>backgrounds)
      );
      this.scenes[bgScene.name] = bgScene;
      const baseGame = new BaseGameScene(<IDisplayConfig>(<unknown>baseGameConfig));
      this.scenes[baseGame.name] = baseGame;
      this.stage.addChild(bgScene, baseGame);
      this.resize(); 
    });
  }

  private update():void {
    Object.values(this.scenes).forEach((scene: BaseView) => {
      scene.update();
    });
  }

  public resize(): void {
    let minScale = Math.min(this.app.screen.width/1280, this.app.screen.height/720);
    let maxScale = Math.max(this.app.screen.width/1280, this.app.screen.height/720);
    console.log('scale', minScale, maxScale, this.app.screen.width/2, this.app.screen.height/2);
    Object.values(this.scenes).forEach((scene: BaseView) => {
        scene.resize(this.app.screen.width/2, this.app.screen.height/2, {minScale, maxScale});
    });
  }
}
