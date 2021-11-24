import { Application, Sprite, Text, Graphics } from "pixi.js";
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
  const sun1 = new Sprite(r.solar.texture);
  sun1.anchor.set(0.5);
  sun1.x = app.screen.width / 2;
  sun1.y = app.screen.height / 2;
  app.stage.addChild(sun1);

  const sun2 = new Sprite(r.solar.texture);
  sun2.anchor.set(0.5);
  sun2.scale.set(1.05);
  sun2.x = app.screen.width / 2;
  sun2.y = app.screen.height / 2;
  app.stage.addChild(sun2);

  const g = new Graphics();
  g.lineStyle(2, 0xffffff, 1);
  g.beginFill(0xffffff, 1);
  g.drawCircle(0, 0, 100);
  g.endFill();
  app.stage.addChild(g);  
  sun2.mask = g;
  app.stage.interactive = true;
  app.stage.on('pointermove', (e) => {
    g.x = e.data.global.x;
    g.y = e.data.global.y;
  });
});
