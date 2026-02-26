// Assignment Two Javascript
// if ... else if ... else statement
let amount;{
if (distance >= 0 && distance <= 100) {
    amount = 5;
} else if (distance >= 101 && distance <= 500) {
amount = 10; 
} else if (distance >= 501 && distance <= 1000) {
    amount = 20;
} else{
    amount = 40;
}

return amount;
}
