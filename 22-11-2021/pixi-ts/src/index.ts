import { Application, Sprite, Rectangle } from "pixi.js";
import { Alien } from "./Alien";
const app = new Application({
  width: 1280,
  height: 720,
});
document.body.appendChild(app.view);

const aliens: Alien[] = [];

const totalDudes = 20;

app.loader
  .add("bunny", "https://pixijs.io/examples/examples/assets/bunny.png")
  .add("egghead", "https://pixijs.io/examples/examples/assets/eggHead.png")
  .add(
    "monsters",
    "https://pixijs.io/examples/examples/assets/spritesheet/monsters.png"
  )
  .load((l, r) => {
    for (let i = 0; i < totalDudes; i++) {
      const dude = new Alien(r["monsters"].texture);
      dude.anchor.set(0.5);
      dude.scale.set(0.8 + Math.random() * 0.3);

      dude.x = Math.random() * app.screen.width;
      dude.y = Math.random() * app.screen.height;

      dude.tint = Math.random() * 0xffffff;

      dude.direction = Math.random() * Math.PI * 2;
      dude.turningSpeed = Math.random() - 0.8;
      dude.speed = 2 + Math.random() * 2;

      aliens.push(dude);
      app.stage.addChild(dude);
    }
    const dudeBoundsPadding = 100;

    const dudeBounds = new Rectangle(
      -dudeBoundsPadding,
      -dudeBoundsPadding,
      app.screen.width + dudeBoundsPadding * 2,
      app.screen.height + dudeBoundsPadding * 2
    );

    app.ticker.add(() => {
      // iterate through the dudes and update their position
      for (let i = 0; i < aliens.length; i++) {
        const dude = aliens[i];
        dude.updatePosition();

        // wrap the dudes by testing their bounds...
        dude.checkCollisionBounds(dudeBounds);
      }
    });
  });
