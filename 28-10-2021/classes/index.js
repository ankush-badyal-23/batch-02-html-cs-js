class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.toString = () => {
            return `Person [${this.name}, ${this.age}]`;
        }
    }
    isAdult() {
        return this.age >= 18;
    }
}

Person.species = 'Human';

const p = new Person('ankush', 41);
console.log(p);

class Student extends Person {
    constructor(name, age) {
        super(name, age);
        this.school = arguments[2];
    }
}

const r = new Student('Ramesh', 15, 'DPS Noida');
// Object.freeze(r);
Object.defineProperty(r, 'age', {
    writable:false
});
Object.defineProperty(r, 'toString', {
    writable:false,
    enumerable:false
});
r.age = 34
console.log( Object.getOwnPropertyDescriptors(r));

