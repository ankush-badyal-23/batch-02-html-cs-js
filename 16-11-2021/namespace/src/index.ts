///<reference path="Point.ts"/>

const a = new ingenuity.Point(1, 2);
const b = new ingenuity.Point(3, 4);

console.log(a.toString());
console.log(b.toString());

console.log(a.getDistance(b));

console.log(b.getDistance(a));
