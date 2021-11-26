import { Application, BitmapText, Text, Graphics } from "pixi.js";
import { Loader } from "./Loader";
import { Game } from "./Game";
import { Spine } from "pixi-spine";
const app = new Application({
  width: 1200,
  height: 720,
  view: document.getElementById("my-canvas") as HTMLCanvasElement,
  backgroundColor: 0x202020,
  antialias: true,
});
const loader = new Loader();
loader.start((l, r) => {
  console.log(r);
  const goblin = new Spine(r.goblins.spineData);
  goblin.x = app.screen.width / 4;
  goblin.y = app.screen.height;
  // goblin.scale.set(0.5);
  app.stage.addChild(goblin);
  goblin.state.setAnimation(0, "walk", true);
  goblin.skeleton.setSkinByName("goblin");
  goblin.interactive = true;
  goblin.on("pointerdown", () => {
    if(goblin.skeleton.skin.name === "goblin"){
      goblin.skeleton.setSkinByName("goblingirl");
    } else {
      goblin.skeleton.setSkinByName("goblin");
    }
  });
  const animation = new Spine(r.hero.spineData);
  animation.x = app.screen.width / 2;
  animation.y = app.screen.height;
  animation.state.setAnimation(0, "idle", true);
  app.stage.addChild(animation);
  let curretAnim = "idle";
  let prevAnim = "idle";
  let loop: boolean;
  window.onkeydown = (e) => {
    if (e.code === "ArrowUp") {
      curretAnim = "jump";
      loop = false;
    }
    if (e.code === "ArrowDown") {
      curretAnim = "crouch";
      loop = true;
    }
    if (e.code === "ArrowRight") {
      animation.scale.x = 1;
      curretAnim = "run";
      loop = true;
    }
    if (e.code === "ArrowLeft") {
      animation.scale.x = -1;
      curretAnim = "walk";
      loop = true;
    }
    if (e.code === "Space") {
      curretAnim = "attack";
      loop = false;
    }
    console.log(curretAnim, prevAnim);
    if (curretAnim !== prevAnim) {
      animation.state.setAnimation(0, curretAnim, loop);
      prevAnim = curretAnim;
    }
  };
  window.onkeyup = (e) => {
    if (
      ["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft", "Space"].includes(
        e.code
      )
    ) {
      curretAnim = "idle";
      prevAnim = curretAnim;
      console.log('keyup', curretAnim);
      animation.state.setAnimation(0, curretAnim, true);
    }
  };
});
