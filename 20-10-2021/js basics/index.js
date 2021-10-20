console.log("Hello World!!");
console.info("this is console info");
console.warn("this is console warn");
console.error("this is console error");
console.trace("this is console trace");

// single
/* multiline and also used for jsdoc*/

var x; // is undefined // this is a function scoped variable
let y; // is undefined // this is a block scoped variable
const z = 10; // this is also block scoped variable

//z = 15;
function ab() {
  if (true) {
    let a = "something";
    var b = "anything";
    c = 'nothing';
  }
}

ab();
console.log(window.c, x, y);

visible = true

visble = false;

console.log(window.visble);

/* # Data type
#undefined
#number 0.1, 1e-10 => Number
#string  "", '', `` => String
#boolean true and anything which is not one of these is true => !(false, 0, "", null, undfined)
 => Boolean
null 
object 
Symbol
NaN -> Not a Number => 'a'*1, any mathematically operation with undefined or null
BigInt
*/

/**
 * Arthematic:
 * +, -, *, /, %
 * 
 * Assignment:
 * =, +=, -=, *=, /=
 * a += b = > a = a + b; 
 * a -= b = > a = a - b;
 * 
 * comparison:
 *  ==, ===, !=, !==, <, > , <=, >=
 * 
 * Logical:
 * &&(and), ||(or) , !(not)
 * 
 * ++, --, -, ! , .
 * 
 * ?:;
 * var x = a==10?0:a; => let x; if(a==10){ x = 0} else {x= a};
 */

/* Control Flow Statements 
# condition
if(true) {
    statement;
} else {
    statement;
}

if(true) {
    statement;
} else if(true) {
    statement;
} else {
    statement;
}

switch(val) {
    case 1:
        statement;
        break;
    case 'a':
        statement;
        break;
    case 'string':
        statement;
        break;
    default;
}
# loops
let x = true;
while(x) {
    statement;
    x = false;
}

x= true;
do {
    statement;
    x = false;
} while(x);


*/

for(let i = 0; i < 10; i++) {
    console.log(`${i+1} X 7 = ${(1+i) * 7}`);
}