import { Application, Container } from "pixi.js";
import assets from "../config/assets.json";
import backgrounds from "../config/background.json";
import { BackgroundScene } from "./Scenes/BackgroundScene";
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
      const bgScene = new BackgroundScene(
        <IDisplayConfig>(<unknown>backgrounds)
      );
      this.scenes[bgScene.name] = bgScene;
      this.stage.addChild(bgScene);
      this.resize();
    });
  }

  public resize(): void {
    Object.values(this.scenes).forEach((scene: BaseView) => {
        let scale = Math.min(1280/this.app.view.width, 720/this.app.view.height);
        scene.resize(this.app.screen.width/2, this.app.screen.height/2, scale);
    });
  }
}
