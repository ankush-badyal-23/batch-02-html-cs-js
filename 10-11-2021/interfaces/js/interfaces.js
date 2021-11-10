"use strict";
class Animal {
    constructor(name, age, color, isMammal, isWild, isEndangered, isExtinct, isExtinctInTheWild) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.isMammal = isMammal;
        this.isWild = isWild;
        this.isEndangered = isEndangered;
        this.isExtinct = isExtinct;
        this.isExtinctInTheWild = isExtinctInTheWild;
    }
    walk() {
        console.log("Walk");
    }
    toString() {
        return `${this.name} is a ${this.age} year old ${this.color} Animal`;
    }
    eat() {
        console.log("Eat");
    }
}
class Duck {
    constructor(name, age, color, isMammal, isWild, isEndangered, isExtinct, isExtinctInTheWild) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.isMammal = isMammal;
        this.isWild = isWild;
        this.isEndangered = isEndangered;
        this.isExtinct = isExtinct;
        this.isExtinctInTheWild = isExtinctInTheWild;
    }
    quack() {
        console.log("Quack");
    }
    swim() {
        console.log("Swim");
    }
    toString() {
        return `${this.name} is a ${this.age} year old ${this.color} duck`;
    }
    eat() {
        console.log("Eat");
    }
    walk() {
        console.log("Walk");
    }
    fly() {
        console.log("Fly");
    }
}
class Dog extends Animal {
    constructor(name, age, color, isMammal, isWild, isEndangered, isExtinct, isExtinctInTheWild) {
        super(name, age, color, isMammal, isWild, isEndangered, isExtinct, isExtinctInTheWild);
        this.name = name;
        this.age = age;
        this.color = color;
        this.isMammal = isMammal;
        this.isWild = isWild;
        this.isEndangered = isEndangered;
        this.isExtinct = isExtinct;
        this.isExtinctInTheWild = isExtinctInTheWild;
    }
    run() {
        console.log("Run");
    }
    bark() {
        console.log("Bark");
    }
}
//# sourceMappingURL=interfaces.js.map