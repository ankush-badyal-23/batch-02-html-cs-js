import { Point } from "../utils/Point";

export abstract class DisplayObject {
    private _x: number;
    public get x(): number {
        return this._x;
    }
    public set x(value: number) {
        this._x = value;
    }
    private _y: number;
    public get y(): number {
        return this._y;
    }
    public set y(value: number) {
        this._y = value;
    }
    private _scale: Point;
    public get scale(): Point {
        return this._scale;
    }
    public set scale(value: Point) {
        this._scale = value;
    }
    private _width: number;
    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }
    private _height: number;
    public get height(): number {
        return this._height;
    }
    public set height(value: number) {
        this._height = value;
    }
    private _strokeColor: string;
    public get strokeColor(): string {
        return this._strokeColor;
    }
    public set strokeColor(value: string) {
        this._strokeColor = value;
    }
    private _strokeWidth: number;
    public get strokeWidth(): number {
        return this._strokeWidth;
    }
    public set strokeWidth(value: number) {
        this._strokeWidth = value;
    }
    constructor(protected ctx: CanvasRenderingContext2D) {
        this.scale = new Point(1, 1);
    }
    public abstract update(delta?:number): void;
    public abstract draw():void;
}