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

class Animal implements IAnimal {
  public name: string;
  public age: number;
  public color: string;
  public isMammal: boolean;
  public isWild: boolean;
  public isEndangered: boolean;
  public isExtinct: boolean;
  public isExtinctInTheWild: boolean;
  constructor(
    name: string,
    age: number,
    color: string,
    isMammal: boolean,
    isWild: boolean,
    isEndangered: boolean,
    isExtinct: boolean,
    isExtinctInTheWild: boolean
  ) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.isMammal = isMammal;
    this.isWild = isWild;
    this.isEndangered = isEndangered;
    this.isExtinct = isExtinct;
    this.isExtinctInTheWild = isExtinctInTheWild;
  }
  public walk() {
    console.log("Walk");
  }
  public toString() {
    return `${this.name} is a ${this.age} year old ${this.color} Animal`;
  }
  public eat() {
    console.log("Eat");
  }
}

class Duck implements IDuck {
  constructor(
    public name: string,
    public age: number,
    public color: string,
    public isMammal: boolean,
    public isWild: boolean,
    public isEndangered: boolean,
    public isExtinct: boolean,
    public isExtinctInTheWild: boolean
  ) {}
  public quack() {
    console.log("Quack");
  }

  public swim() {
    console.log("Swim");
  }

  public toString() {
    return `${this.name} is a ${this.age} year old ${this.color} duck`;
  }

  public eat() {
    console.log("Eat");
  }

  public walk() {
    console.log("Walk");
  }

  public fly() {
    console.log("Fly");
  }
}

class Dog extends Animal implements IDog {
  constructor(
    public name: string,
    public age: number,
    public color: string,
    public isMammal: boolean,
    public isWild: boolean,
    public isEndangered: boolean,
    public isExtinct: boolean,
    public isExtinctInTheWild: boolean
  ) {
    super(
      name,
      age,
      color,
      isMammal,
      isWild,
      isEndangered,
      isExtinct,
      isExtinctInTheWild
    );
  }
  public run() {
    console.log("Run");
  }
  public bark() {
    console.log("Bark");
  }
}
