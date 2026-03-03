// Arrow functions
// This is a function that was introduced in the ECMA Script 6 and they give us the latest/modern way of defining function in a compact manner.
// At times the arrow  function can be said to be annonymous function why? This is because they use the names of the variables they contained in.


const sayHello = () => {
    console.lof("This is an Arrow Function.")
}

saayHello();
console.log("================")
// create an arrow function that is able to find the product of three numbers.
const product = (a, b, c) => {
    let num1 = 3
    let num2 = 5
    let num3 = 4
    answer = num1*num2*num3
    console.log("This is the product:",answer)
}
product();