import { Perrson } from "./Person.js";

export class Student extends Perrson {
    constructor(name, age) {
        super(name, age);
        this.school = arguments[2];
    }
    isInSchool() {
        return !! this.school;
    }
}