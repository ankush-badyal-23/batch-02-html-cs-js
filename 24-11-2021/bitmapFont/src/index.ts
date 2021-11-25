import { Application, BitmapText, Text, Graphics } from "pixi.js";
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
  const bmFont = new BitmapText("Hello World! With Bitmap Fonts", {
    fontName: "Desyrel",
    fontSize: 164,
    align: "center",
  });
  bmFont.anchor.set(0.5);
  bmFont.x = app.screen.width / 2;
  bmFont.y = app.screen.height / 2;
  app.stage.addChild(bmFont);
  
  // use https://github.com/soimy/msdf-bmfont-xml to generate the msdff fonts
  const msdf = new BitmapText("Hello World! With MSDF Fonts", {
    fontName: "NotoSans-Black",
    fontSize: 184,
    align: "center",
    tint: 0xff00ff,
  });
  msdf.anchor.set(0.5);
  msdf.x = app.screen.width / 2;
  msdf.y = app.screen.height / 2 + 100;
  app.stage.addChild(msdf);

  const g = new Graphics();
  g.lineStyle(2, 0xffffff, 1);
  g.beginFill(0xffffff, 1);
  g.drawRect(-50, -50, 100, 100);
  g.endFill();
  g.x = app.screen.width / 2;
  g.y = app.screen.height / 2 + 200;
  app.stage.addChild(g);
  app.stage.interactive = true;
  app.stage.on("pointerdown", (e: any) => {
    app.stage.on("pointermove", mouseMove);
    bmFont.mask = g;
    msdf.mask = g;
    mouseMove(e);
  });

  app.stage.on("pointerup", () => {
    app.stage.off("pointermove", mouseMove);
    bmFont.mask = null;
    msdf.mask = null;
    g.x = app.screen.width / 2;
    g.y = app.screen.height / 2 + 200;
  });

  function mouseMove(e: any) {
    g.x = e.data.global.x;
    g.y = e.data.global.y;
  }
});
