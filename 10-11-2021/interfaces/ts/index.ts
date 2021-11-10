type TAddress = {
  city: string;
  state: string;
  country: string;
  lane: string;
  area: string;
  pinCode: number;
};

interface IPerson {
  fName: string;
  mName?: string;
  lName?: string;
  age: number;
  address: TAddress;
}

class Person implements IPerson {
  constructor(
    public fName: string,
    public mName: string,
    public lName: string,
    public age: number,
    public address: TAddress
  ) {}
}

let jdSmithAddress: TAddress = {
  city: "Bangalore",
  state: "Karnataka",
  country: "India",
  lane: "Koramangala",
  area: "Koramangala",
  pinCode: 560034,
};

let p: Person = new Person("John", "Doe", "Smith", 30, jdSmithAddress);
console.log(p);
