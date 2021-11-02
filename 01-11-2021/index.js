import { Ball } from "./Ball.js";
import { Brick } from "./Brick.js";
import { Lives } from "./Lives.js";
import { Paddle } from "./Paddle.js";
import { Score } from "./Score.js";
const canvas = document.querySelector("#my-canvas");
const context = canvas.getContext("2d");

const CENTER_X = canvas.width / 2;
const CENTER_Y = canvas.height / 2;
const PADDLE_START_X = CENTER_X - 50;
let gameActive = false;
window.addEventListener("load", () => {
  focus();

  let paddle = new Paddle(context, {
    x: PADDLE_START_X,
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
  let score = new Score(context, {
    x: canvas.width - 20,
    y: 20,
    fill: "black",
    align: "right",
    baseline: "top",
  });
  let lives = new Lives(context, {
    x: 20,
    y: 20,
    lives: 3,
    fill: "black",
    align: "left",
    baseline: "top",
  });
  const bricks = [];
  bricksCollection.forEach((brickCol) => {
    for (let i = 0; i < brickCol.count; i++) {
      let brick = new Brick(context, {
        x: brickCol.x + i * (brickCol.options.width + brickCol.padding),
        y: brickCol.y,
        ...brickCol.options,
      });
      bricks.push(brick);
    }
  });
  gameActive = true;
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

  function reset() {
    console.log("reset game here");
    paddle.x = PADDLE_START_X;
    ball.x = CENTER_X;
    ball.y = paddle.y - ball.radius;
    ball.alive = true;
    ball.active = false;
  }

  function gameLoop(delta) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    //update here
    if (gameActive) {
      if (ball.alive) {
        paddle.update(delta);
        ball.update();
        if (!ball.active && ball.alive) {
          ball.x = paddle.x + paddle.width / 2;
        }
        if (ball.active && ball.alive) {
          if (paddle.hitTest(ball)) {
            ball.bounceUp();
            console.log("ball hit paddle");
          }
        }
        if (!ball.alive && lives.lives) {
          lives.reduce();
          setTimeout(reset, 100);
        }
        bricks.forEach((b) => {
          if (b.alive && b.hitTest(ball)) {
            b.alive = false;
            ball.rebound();
            score.update(b.score);
          }
        });
      }
      let aliveBricks = bricks.filter((b) => b.alive);
      if (aliveBricks.length === 0) {
        ball.active = false;
        ball.alive = false;
        paddle.active = false;
        lives.bonus();
        console.log("level.cleared");
        context.textAlign = 'center';
        context.fillStyle = 'blue';
        context.fillText('Game Finished !!', CENTER_X, CENTER_Y);
        return;
      }

      if (lives.lives === 0) {
        console.log("game.over");
        gameActive = false;
        context.textAlign = 'center';
        context.fillStyle = 'crimson';
        context.fillText('Game Over !!', CENTER_X, CENTER_Y);
        return;
      }

      //draw here
      paddle.draw();
      ball.draw();
      score.draw();
      lives.draw();
      bricks.forEach((b) => b.draw());
      requestAnimationFrame(gameLoop);
    }
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
      score: 20,
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
      score: 30,
      fill: "blue",
    },
    padding: 20,
    count: 10,
  },
  {
    x: 250,
    y: CENTER_Y - 150,
    options: {
      width: 50,
      height: 20,
      score: 50,
      fill: "yellow",
    },
    padding: 20,
    count: 8,
  },
  {
    x: 300,
    y: CENTER_Y - 200,
    options: {
      width: 50,
      height: 20,
      score: 100,
      fill: "cyan",
    },
    padding: 20,
    count: 6,
  },
];
