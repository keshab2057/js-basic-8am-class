//1.write a program to sum value of array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = array.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(result);

//2.Write a program to find the maximum and minimum value of an array
// const array = [4,200,34,55,21,100,1,];

const minMax = (array) => {
  const res = array.sort((a, b) => a - b);
  return { min: res[0], max: res.pop() };
};
const answer = minMax([4, 200, 34, 55, 21, 100, 1]);
console.log(answer);

//3.Write a program to reverse an array of integer values.

// const arr = [1,2,3,4,5,6,7,8,9,10];

const reverse = (keshab) => {
  return keshab.toReverse();
};
const ans = reverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(ans);

//4.Write a program to find the second largest element in an array.

// const array3 = [100,30,40,90,10,500]
const secondLargest = (aary) => {
  const store = aary.sort((a, b) => a - b);
  return { sl: store[store.length - 2] };
};
const answ = secondLargest([100, 30, 40, 90, 10, 500]);
console.log(answ);

//5.Write a function Myfunc that takes in an array of numbers and multiply each of the elements by 2.

// const array2 = [2,3,4,5,6];
// const mul = array2.map((a)=>a*2);
// console.log(mul);

const array2 = [2, 3, 4, 5, 6];
const mul = array2.map((k)=>k*2)
  

console.log(mul);

//6. let food = ['Noodle', 'Pasta', 'Ice-cream'];
// let food = ['Fries', 'Ice-cream', 'Pizza'];
// Compare the 2 arrays and find common food if any.

const food1 = ["Noodle", "Pasta", "Ice-cream"];
const food2 = ["Fries", "Ice-cream", "Pizza", "Pasta"];
const commonFood = food1.filter((food) => food2.includes(food));
console.log({ commonFood });

//7.Square and sum the array elements using the arrow function and then find the average of the array.

const array5 = [2, 3, 4, 5, 6];
//find square
const sq = array5.map((a) => a ** 2);

//find the square sum
const sum = sq.reduce((acc, curr) => {
  return acc + curr;
});

//find the square of average
const avg = sum / array5.length;
console.log("array square is:", { sq });
console.log("sum of the square:", { sum });
console.log("average of the sum", { avg });

//8.Create a new array whose elements is in uppercase of words present in the original array.

const array6 = ["keshab", "ram", "shyam", "hari"];

function countItems(arr) {
  newarray = [];
  for (let i = 0; i < arr.length; i++) {
    newarray.push(arr[i].toUpperCase());
  }
  return newarray;
}
console.log(countItems(array6));
