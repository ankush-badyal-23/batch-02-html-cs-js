import { Application, Container, ParticleContainer, Graphics } from "pixi.js";
import { Loader } from "./Loader";
import { Emitter } from "./Emitter";
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

  const container = new ParticleContainer(10000, {
    scale: true,
    position: true,
    rotation: true,
    uvs: true,
    alpha: true,
  });
  container.x = app.screen.width / 2;
  container.y = app.screen.height;
  console.log(container);
  app.stage.addChild(container);
  const emitter = new Emitter(container, {
    behaviors: [
      {
        type: "alpha",
        config: {
          alpha: {
            list: [
              {
                time: 0,
                value: 1,
              },
              {
                time: 0.4,
                value: 0.25,
              },
              {
                time: 0.6,
                value: 0.25,
              },
              {
                time: 1,
                value: 0.9,
              },
            ],
          },
        },
      },
      {
        type: "moveAcceleration",
        config: {
          accel: {
            x: 0,
            y: 2000,
          },
          minStart: 600,
          maxStart: 1000,
          rotate: false,
        },
      },
      {
        type: "moveSpeed",
        config: {
          speed: {
            list: [
              {
                value: 500,
                time: 0,
              },
              {
                value: 200,
                time: 0.7,
              },
              {
                value: 200,
                time: 1,
              },
            ],
            isStepped: false,
          },
          minMult: 1,
        },
      },
      {
        type: "scaleStatic",
        config: {
          min: 0.5,
          max: 0.5,
        },
      },

      {
        type: "rotation",
        config: {
          accel: 0,
          minSpeed: 50,
          maxSpeed: 70,
          minStart: 265,
          maxStart: 275,
        },
      },
      {
        type: "animatedRandom",
        config: {
          anims: [
            {
              framerate: 20,
              loop: true,
              textures: [
                "gold_1.png",
                "gold_2.png",
                "gold_3.png",
                "gold_4.png",
                "gold_5.png",
                "gold_6.png",
              ],
            },
            {
              framerate: 10,
              loop: true,
              textures: [
                "gold_6.png",
                "gold_5.png",
                "gold_4.png",
                "gold_3.png",
                "gold_2.png",
                "gold_1.png",
              ],
            },
          ],
        },
      },
      {
        type: "spawnShape",
        config: {
          type: "torus",
          data: {
            x: 0,
            y: 0,
            radius: 20,
            innerRadius: 10,
            affectRotation: false,
          },
        },
      },
    ],
  });
  emitter.emit = false;
  // emitter.updateOwnerPos(window.innerWidth / 2, window.innerHeight / 2);
  app.ticker.add((delta) => {
    emitter.update(delta * 0.01);
  });
  window.onclick = () => {
    emitter.emit = emitter.emit ? false : true;
  };
});
