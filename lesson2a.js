// Object data type:
// An object in javascript is a data type that stores in form of key value pairs.

let person = {
    Name : "Saruni Nimrod",
    Age : 70,
    isRegistered : true
};

console.log("the details of the person is:", person)

// First method is by use of the square brackets
console.log(person["Age"])

// Second method is by use of the dot (.) notation
console.log(person.Name)

// check the data type
console.log(typeof(person))

// Array data types:
// This refers to collection of items that are on indexes
let fruits = ["Mango", "Pineaple", "Banana", "Melon", "Lemon", "Grapes"]

console.log("The entire array of fruits is:",fruits)

// To access the items of an array we use the index
console.log(fruits[3])

// you can slice items of an array
console.log(fruits.slice(2,5))
