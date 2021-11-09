"use strict";
console.log("Hello World");
var x;
var y;
var z;
var a = [];
var b = [];
var s = [];
var str;
var obj = {};
var c = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var d = [1, 2, 3];
var e;
d = 12;
e = 10;
var f;
var g;
function abc() {
    console.log(typeof a, typeof b, Array.isArray(c), typeof NaN, typeof null);
}
abc();
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function reverse(s) {
    return s.split("").reverse().join("");
}
console.log(random(10, 20));
//# sourceMappingURL=app.js.map