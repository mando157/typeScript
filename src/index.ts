/*
DataTypes :
    * Primitive (Value type)
        ? number
        ? string
        ? boolean
        ? undefined
        ? null
    * Non-Primitive (reference type)
        ? object
        ? function
        ? array

    TypeScript:
        * return 
            ? void
            ? any
            ? unknown -> alert me for a future error
            ? Array<number> -> Generic (array of numbers)
            ? tuple
            ? union
            ? alias
            ? interface
*/

// * Type
let x: number = 5;
let y: string = "y";
let z: boolean = true; // ! true or false 
let m: undefined = undefined;
let n: null = null;

// * Object
let obj: object = {

};

// * Array
let arr: number[] = [10, 20, 50];
let arrGeneric: Array<number> = [10, 20, 50];

// * function
let fun: () => number = function () {
    return 5;
}

//^ >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// * Void
function func() {
    console.log("func");
}

// * Any
let AnyFun: () => void = function () {
    return;
}

// * unknown
let unknownFun: () => unknown = function () {
    return;
}

let k: unknown;

k = 24.34578754;
k = "k";

if (typeof k == "string") {
    console.log(k.toUpperCase);
} else if (typeof k == "number") {
    console.log(k.toFixed(2));
}

// * Tuple
let tuple: [string, number] = ["mohamed", 21]; // ! must be in order

// * union
let union: string | number;
union = 45; //* true
union = "union"; //* true
// union = true; // ! false

// * Alias
type User = {
    readonly id: number; //! unique value
    firstName: string;
    lastName?: string; //! (?) Made it Optional
    isAdmin: boolean;
    getFullName: (firstName: string, lastName: string) => string;
}

let user1: User = {
    id: 1,
    firstName: "mando",
    lastName: "hassan",
    isAdmin: true,
    getFullName: (firstName: string, lastName: string) => `${firstName} ${lastName}`,
}

//^ >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// * Interface
interface Iperson {
    name: string;
    age: number;
}

type person = {
    name: string;
    age: number;
}

type employee = {
    salary: number;
}

const john: person & employee = {
    name: "john",
    age: 22,
    salary: 7000,
}

// * Literal

type Directions = "up" | "down" | "left" | "right"; //! choices

function move(direction: Directions) {
    console.log(`Moving ${direction}`);
}
move("up");

// * Optional Parameters
var students: object[] = [];

function setNewStudent(
    studentName: string,
    studentEmail: string,
    studentPhone?: string
): void {
    let newStudent = {
        name: studentName,
        email: studentEmail,
        phone: (studentPhone == undefined) ? null : studentPhone,
    };
    students.push(newStudent);
}
setNewStudent("mohamed", "mando.1572005@gmail.com");
console.log(students);

//^ >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// * Object Oriented Programming (OOP)

/* 
?    class
?    object
?    Access Specifier
        * private
        * public
        * protected
?   Encapsulation
        * Geters
        * Seters    
*/

// * Class without constructor
class Student {
    public name: string = "";
    public age: number = NaN;
    public gender: string = "";
    public birthday: string = "";
    public level: number = NaN;
    public GPA: number = NaN;
}
var mando: Student = new Student();

mando.name = "mohamed hassan";
mando.age = 21;
mando.birthday = "15-7-2005";
mando.gender = "Male";
mando.level = 1;
mando.GPA = 4;

// * Class with constructor & Encapsulation

class Person {
    private name: string = "";
    private age: number = NaN;
    private gender: string = "";

    public constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    // ^ Geters
    public getName(): string {
        return this.name;
    }

    public getGender(): string {
        return this.gender;
    }
    public getAge(): number {
        return this.age;
    }

    // ^ Seters
    public setName(newName: string): void {
        this.name = newName;
    }

    public setGender(newGender: string): void {
        this.gender = newGender;
    }

    public setAge(newAge: number): void {
        if (newAge > 0) {
            this.age = newAge;
        } else {
            console.log("Age must me > 0");
        }
    }
}

var ahmed: Person = new Person("ahmed", 35, "male");
ahmed.setAge(18);

