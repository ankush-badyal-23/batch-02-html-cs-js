import { Application, Sprite, AnimatedSprite } from "pixi.js";
import { Loader } from "./Loader";
const app = new Application({
  width: 1280,
  height: 720,
  antialias: true,
  backgroundColor: 0x1099bb,
});
document.body.appendChild(app.view);

const loader = new Loader();
let isShiftDown = false;
let animFrame: string;
let loop: boolean;
let isPlaying: boolean = false;
loader.start((l, r) => {
  console.log("resources ", r);
  const bg = new Sprite(Loader.getTextureFromAtlas("spooky", "BG.png"));
  app.stage.addChild(bg);
  bg.anchor.set(0.5);
  bg.x = app.screen.width / 2;
  bg.y = app.screen.height / 2;

  const dino = new AnimatedSprite(
    Loader.getTexturesFromAtlas("dino", animFrames.idle)
  );
  dino.anchor.set(0.5, 1);
  dino.x = app.screen.width / 2;
  dino.y = app.screen.height;
  playDinoAnim("Idle");
  app.stage.addChild(dino);

  window.addEventListener("keydown", (e) => {
    console.log(e.key);
    switch (e.key) {
      case "ArrowUp":
        animFrame = "Jump";
        loop = false;
        break;
      case "ArrowDown":
        animFrame = "Dead";
        loop = false;
        break;
      case "ArrowLeft":
        dino.x -= 10;
        dino.scale.x = -1;
        animFrame = isShiftDown ? "Run" : "Walk";
        loop = true;
        break;
      case "ArrowRight":
        dino.x += 10;
        dino.scale.x = 1;
        animFrame = isShiftDown ? "Run" : "Walk";
        loop = true;
        break;
      case "Shift":
        isShiftDown = true;
      default:
        animFrame = "Idle";
        loop = true;
        break;
    }
    isPlaying = false;
    playDinoAnim(animFrame, loop);
  });
  window.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "Shift":
        isShiftDown = false;
      case "ArrowUp":
      case "ArrowLeft":
      case "ArrowRight":
      case "ArrowDown":
        animFrame = "Idle";
        break;
    }
    isPlaying = false;
    playDinoAnim(animFrame);
  });

  function playDinoAnim(
    frame: string,
    loop: boolean = true,
    animSpeed: number = 0.25
  ) {
    if (!isPlaying) {
      isPlaying = true;
      dino.textures = Loader.getTexturesFromAtlasByName("dino", frame);
      dino.loop = loop;
      dino.animationSpeed = animSpeed;
      dino.onComplete = () => {
        isPlaying = false;
      };
      dino.play();
    }
  }
});

const animFrames = {
  idle: [
    "Idle (1).png",
    "Idle (2).png",
    "Idle (3).png",
    "Idle (4).png",
    "Idle (5).png",
    "Idle (6).png",
    "Idle (7).png",
    "Idle (8).png",
    "Idle (9).png",
    "Idle (10).png",
  ],
  run: [
    "Run (1).png",
    "Run (2).png",
    "Run (3).png",
    "Run (4).png",
    "Run (5).png",
    "Run (6).png",
    "Run (7).png",
    "Run (8).png",
  ],
};
