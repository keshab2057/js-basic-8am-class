console.log("Hello objects");
//objects(Real life objects,properties and methords)
//CRUD=>create,read,update,delete
//objects-->colletion of complex data type,
//objects are the collections of values


// left side --> variable declaration
//right side --> data

//1. CREATE
// const person = {
//     firstName: "keshab",
//     lastName: "sutar",
//     birthYear: "2000",
//     gender: "male",
//     marriedStatus: "unmarried",
//     occupation: "student",
//     getFulLName: function(){
//         return this.firstName + this.lastName;

//     }

// }
//2.READ
// console.log(person.birthYear);
// console.log(person.getFullName);

//3.UPDATE

// person.birthYear = 2010;
// console.log(person.birthYear);

//DELETE

// delete person.marriedStatus;
// console.log(person);

//SPREAD OPERATOR-->delete nagarer spread garnu parx

// const{marriedStatus,...rest} = person;
// console.log(person);


//Array-->list of items(collections of objects)
//collections of items use for array

//1.CREATE
// const classes= ["keshab sutar",{firsName:"ram",middleName:"singh",lastName:"karki"},{firsName:"bikky",middleName:"kumar",lastName:"sharma"}];


//READ
// console.log(classes[1]);

//UPDATE
// classes[1] = "hari prasad";
// console.log(classes);

//SPREAD OPERATOR-->DELETE-->EXCLUDE
// const[a,...rest] = classes;
// console.log(classes);




//use short methord of array to sort them data in accending order

// const group = [
//     {name:"keshab",age:20},
//     {name:"rajan",age:15},
//     {name:"hari",age:50}
// ]
// const newGroup = group.sort((a,b)=> a.age - b.age);
// console.log(newGroup);


//** write a function to find the maximum and maximum value of an array
// let arr = [10,20,40,25,50,100];
//min = 10 and max = 100;
const maxMinFun = (arr) => {
    const stored = arr.sort((a,b) => a - b);
    return {min:stored[0],max:stored.pop()};
}
const result = maxMinFun([10,20,40,25,50,100]);
console.log(result);
  

//write a program to execute password from the array
//  const users = [
//     {user:"a",pw:"test"},
//     {user:"b",pw:"test1"},
//     {user:"c",pw:"test2"}

//  ];
// const newUsers = users.map((user)=> {
// const {pw,...rest} = user;
// return rest;  
// });
// console.log(newUsers);


//write a program sum of number 1 to 1o;
//map,filter,reduce,some,find,every-->these documentation used for this question


// let arr = [1,2,3,4,5,6,7,8,9,10];
// let sum = 0;
// for (i = 0; i<arr.length;i++ ){
// sum += arr[i];
// }
// console.log(sum);

//Another methord
// const arr1 = [1,2,3,4,5,6,7,8,9,10];
// const intialValue = 0;
// const sum = arr1.reduce((accumulator,currentvalue)=>accumulator+currentvalue,intialValue);
// console.log(sum);

//Another methord
// const sumAll = (arr) =>{
// const result  = arr.reduce((sum,currentValue)=>sum+currentValue,0);
// return result;
// //return arr.reduce ((sum,currentValue)=>sum+currentValue,0);-->yesto ni garna sakxau
// }
// const sum = sumAll([1,2,3,4,5,6,7,8,9,10]);
// console.log({sum});