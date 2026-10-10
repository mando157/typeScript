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
{

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
}

//^ >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// * Object Oriented Programming (OOP)
{

    /* 
    ?    class
    ?    object
    ?    Access Specifier
            * private
            * public
            * protected
    ?   Encapsulation
            * Getters
            * Setters
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

    //^ >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    /* 
    ?   Static Methods & Static Property -> belongs to the class itself , not to any instance of the class ( (className).static )
    
    */

    class MathUtility {
        //^ static property
        static PI: number = 3.14;

        //^ static method
        static calcCircleArea(radius: number): number {
            return this.PI * radius * radius;
        }
    }

    console.log(MathUtility.PI);
    console.log(MathUtility.calcCircleArea(15));

    //* Static Factory Method -> this class has a private constructor that make an obj automatic by an inner method in this class

    class Account {

        private constructor(private name: string, private age: number, private role: string) { }

        static createUser(name: string, age: number): Account {
            return new Account(name, age, "User");
        }

        static createAdmin(name: string, age: number): Account {
            return new Account(name, age, "Admin");
        }

        public getDetails(): string {
            return `Name : ${this.name} , Age : ${this.age} , Role : ${this.role}`;
        }
    }

    const firstAccount = Account.createAdmin("mando", 21);

    console.log(firstAccount.getDetails());

    class test {
        userName: string = "mohamed";
        static PI: number = 3.14;

        static sayHello() {
            //! console.log(this.userName); -> Error bec. Static Method cannot Access non-static (properties || Methods)
        }
    }
    let test1 = new test();

    //! obj.PI -> Error bec. Static Properties cannot be Access by Object , Access by Class Only test.PI


    //^ >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    /* 
    ?   Inheritance
        * (Derived / Sub / Child) Class[Child]
        * (Base / Sup / Parent) Class[Parent]
    
        ^ Access Specifier      Parent      Parent-Obj      Child       Child-Obj
                *Private          ok            no            no            no
    
                *Protected        ok            no            ok            no
    
                *Public           ok            ok            ok            ok
    
    ? MultiInheritance -> Human Inherit Child Inherit Parent 
    */

    class Parent {
        private id: number = NaN;

        private name: string;
        private age: number;

        public constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        public print(): void {
            console.log("Hello from Parent");
        }
    }
    class Child extends Parent {
        // * Child Objects Cannot Access private (properties || Methods) But can access public
        public gender: string;

        public constructor(name: string, age: number, gender: string) {
            super(name, age); // ? -> to get the Properties from extends Class

            this.gender = gender;
        }

        public print() {

            super.print(); // ? -> to get the Method from extends Class

            console.log("Hello From Child");
        };

    }

    const child = new Child("ahmed", 21, "male");

    //! child.id -> Error
    //* child.print() -> True 

    class Human extends Child {

    }

    //^ >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    /* 
    
    ?   Polymorphism
        * Overriding 
        ! Overloading <Not Supported in TS>
    
    */

    class testParent {
        public name: string = "";
        public age: number = NaN;

        public print(): void {
            console.log("Parent");
        }
    }

    class testChild extends testParent {
        public print(): void {
            console.log("Child");
        }
    }

    let objC: testParent = new testChild();

    objC.print();

    //^ >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    /*
    
    ?   Abstract Class is a class
        * that created to be inherit only 
        * contain Abstract Methods (Without Implementation) and regular Methods (With Implementation)
    */

    abstract class Form {
        public name: string = "";
        public age: number = 0;

        abstract printGender(): void;
    }

    class secForm extends Form {
        public printGender(): void {
            console.log("gender");
        };
    }

    let secFormObj: secForm = new secForm();

    secFormObj.printGender();

    //^ >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    /*
    
    ?   Interface Class is a class
        * is an abstract class that define the shape of an object or class
        * only contain Abstract methods
    */

    interface mainHuman {
        eat(): void;
        play(): void;
    }

    class MainHuman implements mainHuman {
        public eat(): void {
            console.log("eating");
        }

        public play(): void {
            console.log("playing");
        }
    }
}

//^ >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// * Generic & Keyof Operator & (Export , Import) & Decorators
interface lengthwise {
    length: number;
}

function longWithLength<T extends lengthwise>(value: T): void {
    console.log(value.length);
}

longWithLength("Mando");

type Laptop = {
    brand: string;
    price: number;
}

class Store<T> {
    private _products: T[] = [];

    public add(newProduct: T): void {
        this._products.push(newProduct);
    }

    public printProducts(): void {
        this._products.forEach(function (product) {
            console.log(product);
        });
    }
}

class Stock1 extends Store<Laptop> {

}

let storObj: Stock1 = new Stock1();

storObj.add({
    brand: "Hp",
    price: 20000,
});

storObj.add({
    brand: "dell",
    price: 30000,
});

storObj.printProducts();


class Stock2<K> extends Store<K> {

}
let storObj2: Stock2<Laptop> = new Stock2<Laptop>();


storObj2.add({
    brand: "Hp ProBook",
    price: 40000,
});

storObj2.add({
    brand: "dell 7600",
    price: 50000,
});

storObj2.printProducts();


// * Defining a Constructor

type Empty_constructor = new () => {};
type Sec_Empty_constructor = { new(): {} };
type Generic_Empty_constructor<T> = new () => T;

//  * Creating A Generic Function

function creatingClass<T>(MyClass: Generic_Empty_constructor<T>): T {
    return new MyClass();
}

// * Defining Class 
class Car {
    constructor(){
        console.log("car");
    }
}

const myCar : Car = creatingClass(Car);
console.log(myCar);