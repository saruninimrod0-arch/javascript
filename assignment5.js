
// Write a function that prints the numbers from 1 to n. But for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".def Fizz(n):
const numbers = (n) => {
    for (i =i; i <= n; i++){
        if (i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz")
        }
        else if (i % 3 == 0) {
            console.log("Fizz")
        }
        else if(i % 5 == 0) {
            console.log("Buzz")
        }
        else{
            console.log(i)
        }
    }
}
numbers(50);