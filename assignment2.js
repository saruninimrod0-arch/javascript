// Assignment Two Javascript
// if ... else if ... else statement

let distance = 350;

let amount;
if (distance >= 0 && distance <= 100) {
    amount = 5;
} else if (distance >= 101 && distance <= 500) {
amount = 10; 
} else if (distance >= 501 && distance <= 1000) {
    amount = 20;
} else if (distance >= 1001) {
    amount = 40;
}
else {
    amount = "invalid distance";
}

console.log("Amount to pay",amount);

