import { Container } from "@pixi/display";
import { Symbol } from "./Symbol";
import reelConfig from "../../config/reelsConfig.json";

export class Reel extends Container {
    private symbols: Symbol[] = [];
    private reelSet: string[] = [];
    constructor(public readonly id: number, public readonly rows: number) {
        super();
        this.name = `Reel ${id}`;
        this.reelSet = reelConfig.reelSet[id];
        this._create();
    }

    private _create(): void {
        for(let r = 0; r < this.rows + 4; r++) {
            const row = new Symbol(r,  reelConfig.symbolsSet[Number(this.reelSet[r])]);
            row.y = r * reelConfig.symbolHeight;
            this.addChild(row);
            this.symbols.push(row);
        }
    }
}