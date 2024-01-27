//Print (console.log()) value of the property "name" in the given object:
let student = {
  name: "Max",
  age: 27,
};
console.log(student.name);

//2a. Find the value of the price property and if it is greater than 100, discount it by 10%. If that’s not the case, discount it by 7%. b. Update the object with the new property - discount and the corresponding value (7% or 10%) and the new price.

let product = {
  Name: "daraj",
  price: 150,
};
let discountPercentage = product.price > 100 ? 10 : 7;
let discount = (product.price * discountPercentage) / 100;
let discountedPrice = product.price - discount;
// Update the object with discount information
product.discountPercentage = discountPercentage;
product.discountedPrice = discountedPrice;

// Display the updated product
console.log("Original Product:", product);

//filter for numbers divisible by 10 from a given array.

const arr = [2, , 20, 40, 33, 60, 50, 8, 645];
const res1 = arr.filter((k) => k % 10 === 0);
console.log(res1);

//Write a program which can return a boolean if value is present in the range with given start and end values in an object

// Example
// let range = {
//   start: 10,
//   end: 50,
//   };

// 5 in range; // false
// 25 in range; // true
const isValueInRange = (value, range) => {
  return value >= range.start && value <= range.end;
};

// Example
let range = {
  start: 10,
  end: 50,
};

console.log(isValueInRange(5, range)); // false
console.log(isValueInRange(25, range)); // true

//Write a JavaScript program to calculate circle area and perimeter.

//first find the circle area
// const circleArea = (r)=>{
//   return Math.PI*r**2;
// };
// const ca = circleArea(2);
// console.log(ca);

const circleArea = (r) => Math.PI * r ** 2;
console.log(circleArea(2));

//second area of perimeter
// const perimeterArea = (r)=>{
//   return 2*Math.PI*r;
// };
// const res2 = perimeterArea(3);
// console.log(res2);
const perimeterArea = (r) => 2 * Math.PI * r;
console.log(perimeterArea(3));

//5.Write a function to calculate compound interest based on the principle amount


// p = 100000;
// r = 10 %
// t = 10 year

const CI = (p,t,r)=>{
    return p * (1 + r/100) ** t;
}
const answer = CI(100000,10,10);
console.log(answer);