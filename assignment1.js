
// Assignment research and come up with examples on object and Array data types . Show how to access items of the objects and of an array.

// A) Object data types: store data in key value pairs.
let student = {
    name: "Nimrod",
    Age: 22,
    course: "Computer Science",
    isGraduated: false
};

// How to access the values is an object.
// 1) Dot Notation
console.log(student.name);      // Nimrod
console.log(student.age);       // 21

// 2) Bracket Notation
console.log(student["course"]);   // Computer Science
console.log(student["isGraduated"]);   // false


// B) Array data types: An array store multiple values in a single variables. It uses index numbers starting  from 0.
let fruits = ["Mango", "Orange", "Apple", "Pineable"];

// How to access the values in an array
// 1) Using index numbers
console.log(fruits[0]);  //Mango
console.log.fruits.slice(2,4);  //Orange
console.log(types(fruits))


//OBJECT INSIDE ARRAY
let users = [
    {name: "Saruni", age: 20},
    {name: "Rayal", age: 25}

]
   
// How to access the values in an object code inside an array
console.log(users[0].name);  // Saruni
console.log(users[0].age);  // 20

// ARRAY INSIDE OBJECT
let school = {
    name: "Kasarani School",
    students: ["Bravin", "Jamal", "Meshack"]
};

// How to access the value in an array inside an object
console.log(school.students[0])    // Jamal


