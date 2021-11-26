import { Container } from "pixi.js";
import { config } from "./config";
import { Wheel } from "./Wheel";
import { DEG_TO_RAD } from "@pixi/math";
import { Graphics } from "@pixi/graphics";
import { BlurFilter } from "@pixi/filter-blur";
import { Text } from "@pixi/text";
import { gsap } from "gsap";
export class Game extends Container {
  private wheel: Wheel;
  private sliceDegree: number;
  public create() {
    this.sliceDegree = 360 / config.slices;
    this.wheel = new Wheel(
      config.radius,
      this.sliceDegree,
      config.sliceColors,
      config.prizes
    );
    this.addChild(this.wheel);

    const pin = new Graphics();
    pin.beginFill(0x9faebd);
    pin.moveTo(0, 0);
    pin.lineTo(-15, -30);
    pin.lineTo(15, -30);
    pin.lineTo(0, 0);
    pin.endFill();
    pin.closePath();
    pin.pivot.set(0, -25);
    pin.y = -config.radius;
    this.addChild(pin);
  }

  public spin() {
    const random = Math.floor(Math.random() * config.slices);
    const stopAngle =
      DEG_TO_RAD * (random * this.sliceDegree - this.sliceDegree / 2);
    const blur = new BlurFilter(10, 10);
    this.wheel.filters = [blur];
    gsap.to(blur, {
      blur: 0,
      duration: config.duration,
      ease: "power4.inOut",
    });
    gsap.fromTo(
      this.wheel,
      { rotation: DEG_TO_RAD * 3600 },
      {
        duration: config.duration,
        rotation: stopAngle,
        ease: "cric.out",
        onComplete: () => {
          const winAnnouncement = new Text(`You won ${config.prizes[random]}`, {
            fontFamily: "Orange Juice",
            fontSize: 60,
            fill: 0xffffff,
            align: "center",
          });
          winAnnouncement.pivot.set(
            winAnnouncement.width / 2,
            winAnnouncement.height / 2
          );
          setTimeout(() => {
            gsap.to(this.children, {
              duration: 0.5,
              alpha: 0,
              onComplete: () => {
                this.addChild(winAnnouncement);
              },
            });
          }, 2000);
        },
      }
    );
  }
}
