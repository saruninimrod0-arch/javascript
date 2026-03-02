// while loop
// below is a simple syntax of the while loop
// 1. initialization of a variable
// 2. while keyword
// 3. condition to be checked
// 4. body of while loop

let i = 0;

while (i <= 10) {
    console.log("New value is: ", i);
    i++;
}

console.log("==========================")

// come up with a js example of a map loop
// it creates a new array

let number =[1,2,3,4,5];
let squares =number.map(num => num**2);

console.log(squares)

console.log("======================")

const users = [
{ id: 1, name: 'Andrew', email: 'andrew@gmail.com' },
{ id: 2, name: 'Bob', email: 'bob@gmail.com' },
{ id: 3, name: 'Charlie', email: 'charlie@gmail.com' }
];
// Extract only the names into a simple string array
const userNames = users.map(user => user.name);
console.log(userNames);
// Output: ["Andrew", "Bob", "Charlie"]
 
console.log("=====================")

// pg 30
for (let i = 1; i<= 19; i+= 2){
    console.log(i);
}
for(let i = 10; i >=i; i--){
    console.log(i);
}