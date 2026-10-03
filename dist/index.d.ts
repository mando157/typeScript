declare let x: number;
declare let y: string;
declare let z: boolean;
declare let m: undefined;
declare let n: null;
declare let obj: object;
declare let arr: number[];
declare let arrGeneric: Array<number>;
declare let fun: () => number;
declare function func(): void;
declare let AnyFun: () => void;
declare let unknownFun: () => unknown;
declare let k: unknown;
declare let tuple: [string, number];
declare let union: string | number;
type User = {
    readonly id: number;
    firstName: string;
    lastName?: string;
    isAdmin: boolean;
    getFullName: (firstName: string, lastName: string) => string;
};
declare let user1: User;
interface Iperson {
    name: string;
    age: number;
}
type person = {
    name: string;
    age: number;
};
type employee = {
    salary: number;
};
declare const john: person & employee;
type Directions = "up" | "down" | "left" | "right";
declare function move(direction: Directions): void;
declare var students: object[];
declare function setNewStudent(studentName: string, studentEmail: string, studentPhone?: string): void;
declare class Student {
    name: string;
    age: number;
    gender: string;
    birthday: string;
    level: number;
    GPA: number;
}
declare var mando: Student;
declare class Person {
    private name;
    private age;
    private gender;
    constructor(name: string, age: number, gender: string);
    getName(): string;
    getGender(): string;
    getAge(): number;
    setName(newName: string): void;
    setGender(newGender: string): void;
    setAge(newAge: number): void;
}
declare var ahmed: Person;
//# sourceMappingURL=index.d.ts.map