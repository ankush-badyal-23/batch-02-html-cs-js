console.log('index.ts');

type TPremitive = string | number | boolean | undefined | null;

type TPerson = {
    fName: string;
    mNane?: string;
    lName?: string;
    age: number;
    address: TAddress;
};
 
type TTeacher = TPerson & {
    subject: string;
    classesAssigned: string[];
}

type TStudent = TPerson & {
    rollNo: number;
    marks: number;
    stream?: string;
};

type TAddress = {
    city: string;
    state: string;
    country: string;
    lane: string;
    area: string;
    pinCode: number;
};

let x:TPremitive = 'hello';
x = 10;
x = true;
x = undefined;
x = null;


let divyam:TStudent = {
    fName: 'Divyam',
    lName: 'Sethi',
    age: 20,
    rollNo: 1,
    marks: 100,
    stream: 'BE',
    address: {
        city: 'Pune',
        state: 'Maharashtra',
        country: 'India',
        lane: 'Kothrud',
        area: 'Kothrud',
        pinCode: 411014
    }
};

console.log(divyam );