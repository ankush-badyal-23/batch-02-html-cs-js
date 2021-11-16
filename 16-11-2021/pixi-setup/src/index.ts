import { Application, Graphics, Text } from "pixi.js";
window.addEventListener("load", () => {
  const app = new Application({
    width: 800,
    height: 600,
    antialias: true,
    resolution: 2,
    view: document.getElementById("my-canvas") as HTMLCanvasElement,
    backgroundColor: 0xa0a0a0,
  });

  const g = new Graphics();
  app.stage.addChild(g);
  g.beginFill(0xff0000);
  g.drawRect(0, 0, 100, 100);
  g.endFill();

  g.beginFill(0x00ff00);
  g.drawCircle(150, 50, 50);
  g.endFill();

  g.beginFill(0x0000ff);
  g.drawEllipse(300, 50, 50, 25);
  g.endFill();

  g.lineStyle(2, 0xffff00, 1);
  g.moveTo(0, 0);
  g.lineTo(400, 100);
  g.lineTo(0, 200);
  g.lineTo(0, 0);
  g.closePath();

  g.lineStyle(0);
  g.beginFill(0xffffff, 0.25);
  g.drawRoundedRect(450, 50, 100, 100, 15);
  g.endFill();

  const gl = new Graphics();
  app.stage.addChild(gl);
  gl.lineStyle(10, 0xff00ff, 1);
  gl.moveTo(0, 0);
  gl.lineTo(800, 600);
  gl.lineTo(0, 600);
  gl.lineTo(0, 0);
  gl.closePath();

  gl.lineStyle(0);
  gl.beginFill(0xffffff, 0.5);
  gl.drawPolygon([0, 0, 400, 300, 200, 350, 50, 0]);
  gl.endFill();

  gl.pivot.set(app.screen.width / 2, app.screen.width / 2);
  gl.position.set(400, 300);
  app.ticker.add((delta) => {
    gl.rotation += Math.PI / 200 * delta;
  });


  const text = new Text("Hello Pixi!");
  text.x = app.screen.width / 2;
  text.y = app.screen.height / 2;
  text.anchor.set(0.5);
  text.style.fill = 0xff0000;
  text.style.fontSize = 64;
  app.stage.addChild(text);
});
