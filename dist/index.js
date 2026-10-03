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
//# sourceMappingURL=index.js.map