"use strict";
class Person {
    constructor(fName, mName, lName, age, address) {
        this.fName = fName;
        this.mName = mName;
        this.lName = lName;
        this.age = age;
        this.address = address;
    }
}
let jdSmithAddress = {
    city: 'Bangalore',
    state: 'Karnataka',
    country: 'India',
    lane: 'Koramangala',
    area: 'Koramangala',
    pinCode: 560034
};
let p = new Person('John', 'Doe', 'Smith', 30, jdSmithAddress);
console.log(p);
//# sourceMappingURL=index.js.map