declare type TAddress = {
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
declare class Person implements IPerson {
    fName: string;
    mName: string;
    lName: string;
    age: number;
    address: TAddress;
    constructor(fName: string, mName: string, lName: string, age: number, address: TAddress);
}
declare let jdSmithAddress: TAddress;
declare let p: Person;
