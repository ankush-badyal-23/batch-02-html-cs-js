declare type TPremitive = string | number | boolean | undefined | null;
declare type TPerson = {
    fName: string;
    mNane?: string;
    lName?: string;
    age: number;
    address: TAddress;
};
declare type TTeacher = TPerson & {
    subject: string;
    classesAssigned: string[];
};
declare type TStudent = TPerson & {
    rollNo: number;
    marks: number;
    stream?: string;
};
declare type TAddress = {
    city: string;
    state: string;
    country: string;
    lane: string;
    area: string;
    pinCode: number;
};
declare let x: TPremitive;
declare let divyam: TStudent;
