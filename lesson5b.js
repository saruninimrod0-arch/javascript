// Arrow function with parameters

const great = (name) =>{
      console.log("Hello" + name + " How have you been? I trust that you are good.")
}

great("James");
great("Jamal");


// Example 2 
console.log("================")
// Below is a function to find the area of a circle
const pi =3.14

const CircleArea =(pi, radius) => {
    let area = pi * radius* radius
    console.log("The area of the circle is: " + area + "cm\u00B2")
}

CircleArea(pi, 7);
CircleArea(pi, 28)

console.log("==================")
// Come up with your own example of an arrow function that utilises 3 parameters
const volume =(length, width,height)=>{
    let vol = length * width * height;
    console.log("The volume of the rectangular prism is: ", area)
}
volume =(length, 3);
volume =(length, 4);
volume =(length, 5)