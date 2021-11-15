import { gsap } from "gsap";
import { Point } from "./ts/utils/point";
window.onload = function () {
  const canvas = <HTMLCanvasElement>document.getElementById("my-canvas");
  const context = canvas.getContext("2d");

  const carPosition = new Point(10, 10);
  const car = new Image();
  car.onload = function () {
    gsap.to(carPosition, {
      duration: 2,
      x: 350,
      //   y: 100,
      ease: "sine.out",
      repeat: 6,
      yoyo: true,
      yoyoEase: "cric.out",
      onUpdate: function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(car, carPosition.x, carPosition.y, 48, 18.86);
      },
      onComplete: function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(car, carPosition.x, carPosition.y, 72, 28);
      }
    });
  };
  car.src = "./assets/R.png";

  const circle = <HTMLDivElement>document.getElementById("crawl");
  gsap.fromTo(circle, { top: 30, left:0}, {top:610, left:100, duration:10, ease:"bounce.out"});
};
