import { Container } from "@pixi/display";
import { Symbol } from "./Symbol";
import reelConfig from "../../config/reelsConfig.json";
import gsap from "gsap";

export class Reel extends Container {
  private _symbols: Symbol[] = [];
  private _reelSet: string[] = [];
  private _initialY: number;
  private _currentStopPos: number = 0;
  constructor(public readonly id: number, public readonly rows: number) {
    super();
    this.name = `Reel ${id}`;
    this._reelSet = reelConfig.reelSet[id];
    this._create();
  }

  public spin(): void {
    this._initialY = this.y;
    gsap.to(this, {
      y: `-=${reelConfig.symbolHeight / 3}`,
      duration: 0.25,
      ease: "power4.Out",
      yoyo: true,
      yoyoEase: "power4.In",
      repeat: 1,
      onComplete: () => {
        console.log("bounce complete");
        this.moveReel();
      },
    });
  }

  protected moveReel(): void {
    gsap.to(this, {
      y: `+=${reelConfig.symbolHeight}`,
      duration: 0.01,
      ease: "none",
      repeat: -1,
      delay: 0,
      onStart: () => {
        console.log("move reel");
        this._symbols.forEach((symbol) => symbol.blur(true));
      },
      onUpdate: () => {
        this.nextSymbolId();
        this._symbols.forEach((symbol, i) => {
          symbol.textureName = this.getSymbolIdForPos(i);
        });
      },
    });
  }

  public stop(): void {
    gsap.killTweensOf(this);
    gsap.fromTo(
      this,
      { y: this._initialY },
      {
        y: "+=45",
        duration: 0.25,
        ease: "power4.In",
        yoyo: true,
        yoyoEase: "power1.Out",
        repeat: 1,
        onStart: () => {
          this._symbols.forEach((symbol) => symbol.blur(false));
        },
      }
    );
  }

  protected get topSymbolId(): number | string {
    return this._reelSet[this._currentStopPos];
  }

  protected nextSymbolId(): number {
    this._currentStopPos++;
    if (this._currentStopPos >= this._reelSet.length - (this.rows + 4)) {
      this._currentStopPos = 0;
    }
    return Number(this._reelSet[this._currentStopPos]);
  }

  protected getSymbolIdForPos(pos: number): number {
    let symbolId: string;
    if (this._currentStopPos + pos < this._reelSet.length) {
      symbolId = this._reelSet[this._currentStopPos + pos];
    } else {
      symbolId =
        this._reelSet[this._currentStopPos + pos - this._reelSet.length];
    }
    return Number(symbolId);
  }

  private _create(): void {
    for (let r = 0; r < this.rows + 4; r++) {
      this._currentStopPos = Math.floor(this._reelSet.length * Math.random());
      const row = new Symbol(r, this.topSymbolId);
      row.y = r * reelConfig.symbolHeight;
      this.addChild(row);
      this._symbols.push(row);
    }
  }
}
