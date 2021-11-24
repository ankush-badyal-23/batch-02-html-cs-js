import { Application, Sprite, Rectangle, NineSlicePlane } from "pixi.js";
import { Loader } from "./Loader";
const app = new Application({
  width: 1200,
  height: 720,
  view: document.getElementById("my-canvas") as HTMLCanvasElement,
  backgroundColor: 0x1099bb,
});
const loader = new Loader();
loader.start((l, r) => {
  console.log("resources ", r);
  const btn = new Sprite(
    Loader.getTextureFromSpritesheet(
      "buttons",
      new Rectangle(546, 657, 188, 195)
    )
  );
  btn.x = 10;
  btn.y = 10;
  app.stage.addChild(btn);
  const btn1 = new Sprite(
    Loader.getTextureFromSpritesheet(
      "buttons",
      new Rectangle(546, 657, 188, 195)
    )
  );
  btn1.x = 250;
  btn1.y = 100;
  btn1.width = 450;
  app.stage.addChild(btn1);
  const btn2 = new NineSlicePlane(
    Loader.getTextureFromSpritesheet(
      "buttons",
      new Rectangle(546, 657, 188, 195)
    ),
    80,
    80,
    80,
    45
  );
  btn2.x = 250;
  btn2.y = 300;
  btn2.width = 450;
  btn2.height = 250;
  app.stage.addChild(btn2);
});
