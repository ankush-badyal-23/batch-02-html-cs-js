import { Student } from "./Student.js";
import { randomInRange } from "./utils.js";


const a = new Student('Ankush', 41, 'LHPS');
console.log('Student ', a);

console.log('Random between 15 and 30', randomInRange(15, 30));