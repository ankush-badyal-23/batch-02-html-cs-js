console.log("Hello World");
let x: number;
let y: boolean;
let z: string;
let a: Array<number> = [];
let b: number[] = [];
let s: string[] = [];
let str: Array<string>;
const obj: { [key: string]: string | number } = {};
let c: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let d: any = [1, 2, 3]; // it is js's default data type
let e: unknown;
d = 12;
e = 10;

let f: never;
let g: void;

function abc(): void {
  console.log(typeof a, typeof b, Array.isArray(c), typeof NaN, typeof null);
}

abc();
