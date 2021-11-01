import { Ball } from "./Ball.js";
import { Brick } from "./Brick.js";
import { Paddle } from "./Paddle.js";
const canvas = document.querySelector("#my-canvas");
const context = canvas.getContext("2d");

const CENTER_X = canvas.width / 2;
const CENTER_Y = canvas.height / 2;
window.addEventListener("load", () => {
  focus();

  let paddle = new Paddle(context, {
    x: CENTER_X - 50,
    y: canvas.height - 50,
    width: 100,
    height: 20,
    fill: "goldenrod",
    speed: 10,
    bounds: {
      left: 0,
      right: canvas.width - 100,
    },
  });
  let ball = new Ball(context, {
    x: CENTER_X,
    y: paddle.y - 10,
    radius: 10,
    fill: "blue",
    speed: 5,
    bounds: {
      top: 0,
      left: 0,
      right: canvas.width - 10,
      bottom: canvas.height,
    },
  });
  const bricks = [];
  bricksCollection.forEach((brickCol) => {
    for (let i = 0; i < brickCol.count; i++) {
      let brick = new Brick(context, {
        x: brickCol.x + (i * (brickCol.options.width + brickCol.padding)),
        y: brickCol.y,
        ...brickCol.options,
      });
      bricks.push(brick);
    }
  });

  window.addEventListener("keydown", onKeyEvent);
  window.addEventListener("keyup", onKeyEvent);

  function onKeyEvent(ke) {
    switch (ke.type) {
      case "keydown":
        switch (ke.code) {
          case "ArrowLeft":
            paddle.move(-1);
            break;
          case "ArrowRight":
            paddle.move(1);
            break;
        }

        break;
      case "keyup":
        switch (ke.code) {
          case "ArrowLeft":
          case "ArrowRight":
            paddle.move(0);
            break;
          case "ArrowUp":
            ball.move();
            break;
        }
        break;
    }
  }

  function gameLoop(delta) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    //update here
    paddle.update(delta);
    ball.update();
    if (!ball.active && ball.alive) {
      ball.x = paddle.x + paddle.width / 2;
    }
    if (ball.active && ball.alive) {
      if (paddle.hitTest(ball)) {
        ball.bounce();
        console.log("ball hit paddle");
      }
    }
    //draw here
    paddle.draw();
    ball.draw();
    bricks.forEach((b) => b.draw());
    requestAnimationFrame(gameLoop);
  }
  gameLoop(0);
});

const bricksCollection = [
  {
    x: 100,
    y: CENTER_Y,
    options: {
      width: 50,
      height: 20,
      score: 10,
      fill: "red",
    },
    padding: 20,
    count: 14,
  },
  {
    x: 150,
    y: CENTER_Y - 50,
    options: {
      width: 50,
      height: 20,
      score: 10,
      fill: "green",
    },
    padding: 20,
    count: 12,
  },
  {
    x: 200,
    y: CENTER_Y - 100,
    options: {
      width: 50,
      height: 20,
      score: 10,
      fill: "blue",
    },
    padding: 20,
    count: 10,
  },
];
