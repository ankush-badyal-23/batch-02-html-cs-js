interface IAnimal {
    name: string;
    age: number;
    color: string;
    isMammal: boolean;
    isWild: boolean;
    isEndangered: boolean;
    isExtinct: boolean;
    isExtinctInTheWild: boolean;
    walk: () => void;
    toString: () => string;
    eat: () => void;
}
interface IBird extends IAnimal {
    fly: () => void;
}
interface ICanine extends IAnimal {
    run: () => void;
}
interface IDog extends ICanine {
    bark: () => void;
}
interface IPig extends IAnimal {
    snort: () => void;
}
interface IDuck extends IBird {
    quack: () => void;
    swim: () => void;
}
declare class Animal implements IAnimal {
    name: string;
    age: number;
    color: string;
    isMammal: boolean;
    isWild: boolean;
    isEndangered: boolean;
    isExtinct: boolean;
    isExtinctInTheWild: boolean;
    constructor(name: string, age: number, color: string, isMammal: boolean, isWild: boolean, isEndangered: boolean, isExtinct: boolean, isExtinctInTheWild: boolean);
    walk(): void;
    toString(): string;
    eat(): void;
}
declare class Duck implements IDuck {
    name: string;
    age: number;
    color: string;
    isMammal: boolean;
    isWild: boolean;
    isEndangered: boolean;
    isExtinct: boolean;
    isExtinctInTheWild: boolean;
    constructor(name: string, age: number, color: string, isMammal: boolean, isWild: boolean, isEndangered: boolean, isExtinct: boolean, isExtinctInTheWild: boolean);
    quack(): void;
    swim(): void;
    toString(): string;
    eat(): void;
    walk(): void;
    fly(): void;
}
declare class Dog extends Animal implements IDog {
    name: string;
    age: number;
    color: string;
    isMammal: boolean;
    isWild: boolean;
    isEndangered: boolean;
    isExtinct: boolean;
    isExtinctInTheWild: boolean;
    constructor(name: string, age: number, color: string, isMammal: boolean, isWild: boolean, isEndangered: boolean, isExtinct: boolean, isExtinctInTheWild: boolean);
    run(): void;
    bark(): void;
}
