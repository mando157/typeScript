"use strict";
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
    let x = 5;
    let y = "y";
    let z = true; // ! true or false 
    let m = undefined;
    let n = null;
    // * Object
    let obj = {};
    // * Array
    let arr = [10, 20, 50];
    let arrGeneric = [10, 20, 50];
    // * function
    let fun = function () {
        return 5;
    };
    //^ >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // * Void
    function func() {
        console.log("func");
    }
    // * Any
    let AnyFun = function () {
        return;
    };
    // * unknown
    let unknownFun = function () {
        return;
    };
    let k;
    k = 24.34578754;
    k = "k";
    if (typeof k == "string") {
        console.log(k.toUpperCase);
    }
    else if (typeof k == "number") {
        console.log(k.toFixed(2));
    }
    // * Tuple
    let tuple = ["mohamed", 21]; // ! must be in order
    // * union
    let union;
    union = 45; //* true
    union = "union"; //* true
    let user1 = {
        id: 1,
        firstName: "mando",
        lastName: "hassan",
        isAdmin: true,
        getFullName: (firstName, lastName) => `${firstName} ${lastName}`,
    };
    const john = {
        name: "john",
        age: 22,
        salary: 7000,
    };
    function move(direction) {
        console.log(`Moving ${direction}`);
    }
    move("up");
    // * Optional Parameters
    var students = [];
    function setNewStudent(studentName, studentEmail, studentPhone) {
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
        name = "";
        age = NaN;
        gender = "";
        birthday = "";
        level = NaN;
        GPA = NaN;
    }
    var mando = new Student();
    mando.name = "mohamed hassan";
    mando.age = 21;
    mando.birthday = "15-7-2005";
    mando.gender = "Male";
    mando.level = 1;
    mando.GPA = 4;
    // * Class with constructor & Encapsulation
    class Person {
        name = "";
        age = NaN;
        gender = "";
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        // ^ Geters
        getName() {
            return this.name;
        }
        getGender() {
            return this.gender;
        }
        getAge() {
            return this.age;
        }
        // ^ Seters
        setName(newName) {
            this.name = newName;
        }
        setGender(newGender) {
            this.gender = newGender;
        }
        setAge(newAge) {
            if (newAge > 0) {
                this.age = newAge;
            }
            else {
                console.log("Age must me > 0");
            }
        }
    }
    var ahmed = new Person("ahmed", 35, "male");
    ahmed.setAge(18);
    //^ >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    /*
    ?   Static Methods & Static Property -> belongs to the class itself , not to any instance of the class ( (className).static )
    
    */
    class MathUtility {
        //^ static property
        static PI = 3.14;
        //^ static method
        static calcCircleArea(radius) {
            return this.PI * radius * radius;
        }
    }
    console.log(MathUtility.PI);
    console.log(MathUtility.calcCircleArea(15));
    //* Static Factory Method -> this class has a private constructor that make an obj automatic by an inner method in this class
    class Account {
        name;
        age;
        role;
        constructor(name, age, role) {
            this.name = name;
            this.age = age;
            this.role = role;
        }
        static createUser(name, age) {
            return new Account(name, age, "User");
        }
        static createAdmin(name, age) {
            return new Account(name, age, "Admin");
        }
        getDetails() {
            return `Name : ${this.name} , Age : ${this.age} , Role : ${this.role}`;
        }
    }
    const firstAccount = Account.createAdmin("mando", 21);
    console.log(firstAccount.getDetails());
    class test {
        userName = "mohamed";
        static PI = 3.14;
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
        id = NaN;
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        print() {
            console.log("Hello from Parent");
        }
    }
    class Child extends Parent {
        // * Child Objects Cannot Access private (properties || Methods) But can access public
        gender;
        constructor(name, age, gender) {
            super(name, age); // ? -> to get the Properties from extends Class
            this.gender = gender;
        }
        print() {
            super.print(); // ? -> to get the Method from extends Class
            console.log("Hello From Child");
        }
        ;
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
        name = "";
        age = NaN;
        print() {
            console.log("Parent");
        }
    }
    class testChild extends testParent {
        print() {
            console.log("Child");
        }
    }
    let objC = new testChild();
    objC.print();
    //^ >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    /*
    
    ?   Abstract Class is a class
        * that created to be inherit only
        * contain Abstract Methods (Without Implementation) and regular Methods (With Implementation)
    */
    class Form {
        name = "";
        age = 0;
    }
    class secForm extends Form {
        printGender() {
            console.log("gender");
        }
        ;
    }
    let secFormObj = new secForm();
    secFormObj.printGender();
    class MainHuman {
        eat() {
            console.log("eating");
        }
        play() {
            console.log("playing");
        }
    }
}
function longWithLength(value) {
    console.log(value.length);
}
longWithLength("Mando");
class Store {
    _products = [];
    add(newProduct) {
        this._products.push(newProduct);
    }
    printProducts() {
        this._products.forEach(function (product) {
            console.log(product);
        });
    }
}
class Stock1 extends Store {
}
let storObj = new Stock1();
storObj.add({
    brand: "Hp",
    price: 20000,
});
storObj.add({
    brand: "dell",
    price: 30000,
});
storObj.printProducts();
class Stock2 extends Store {
}
let storObj2 = new Stock2();
storObj2.add({
    brand: "Hp ProBook",
    price: 40000,
});
storObj2.add({
    brand: "dell 7600",
    price: 50000,
});
storObj2.printProducts();
//  * Creating A Generic Function
function creatingClass(MyClass) {
    return new MyClass();
}
// * Defining Class 
class Car {
    constructor() {
        console.log("car");
    }
}
const myCar = creatingClass(Car);
console.log(myCar);
//# sourceMappingURL=index.js.map