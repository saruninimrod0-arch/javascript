// Function with parameters.
// Parameters are values that get passed as arguments when we invoke a function.
// They help us to create function that can be reusable throughout a program.
function greeting(name){
    console.log("Hello", name, "How have you been?")
}
greeting("Saruni Nim")
greeting("Rayal Benard")
greeting("Jenning senard")

console.log("=================")
// Below is a function with parameters to calculate the sum of two numbers
function addition(number1, number2){
    sum = number1 + number2
    console.log("The sum of the numbers is: ", sum)
}

addition(45, 60)
console.log("=================")
function addition(number1, number2){
    sum = (number1 + number2)
    console.log("The sum ot the numbers is: ",sum)
}

addition(90, 50)
console.log("==================")
function addition (number1, number2){

}
// by use of function that accepts parameters, calculate the area of a triangle whose base is 20cm and height is 12cm.
function area(base, height){
    area = 0.5 * base * height
    area = (base * height)/2
    console.log ("The area of the triangle is", area, "cm\u00B2")

}
area(20, 12)

console.log("================")
// Find the simple interest as 50000, rate as 5% and time as 8 years
function simpleInterest(principal,rate,time){
intereast = (principal * rate * time)/100
console.log("Simple interest is", interest)
}
simpleInterest(5000, 5, 8)