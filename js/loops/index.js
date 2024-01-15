console.log("Hello loops chapter");
//wap the multiplication table for 3

// for(let i = 1; i <= 10; i++){
//     const result = 3 * i;
//     // console.log("the multiplication table of 3 is 3*", i, "=", result);
//     console.log("3*", i, "=", result);
// }




//write a program to print the even numbers 1 to 100;



//calculate sum of 1 to 10
// let sum = 0;
// for(i = 1; i <= 10;i++){
//     sum = sum + i;
// }console.log(sum);

//write a program to print the even numbers

// for( let num = 0; num <= 100; num++){
//     if(num%2 == 0){
//         console.log("odd numbers from 1 to 100 is=",num);
//     }
// } 

//oR

// for(let i = 0; i <= 100; i += 2){
//     console.log("even numbers from 1 t 100 is =",i);

// }
    //write a program to print only odd numbers

//     for(i = 1; i <= 10; i = i +2){
// console.log(i);
//     }

//write a game where you start with any random game number. ask the user to keep gussing the number untill the users enters correct value.

// let gameNumber = 25;
// let userNum = prompt("Guess the game number:");
// while(userNum != gameNumber){
//  userNum = prompt("you entered wrong number. guess again");
// }
// console.log("congratulations, you entered write number");


//ternary operator
//syntax-->condition?expressionTrue:expressionFalse
// var number = 1;
// var result = (number > 0) ? "Positive" : (number < 0) ? "Negative" : "Zero";

// console.log(result);

//another methord-->ternary operator vhaneko if else statement ko short curt form
// const num = 0;
// if(num>0){
//     console.log("positive");
// }
// else{
//     console.log("negative");
// }
// let isAdmin=true;
// var userStatus = isAdmin ? "Admin User" : "Regular User";

// console.log(userStatus);

//find the maximum number
// let num1 = 20;
// let num2 = 30;
// const max = (num1>num2)? "num1" : "num2";
// console.log(max);

//checke the string is empty or not
let text = "";
const check = (text !=="")? "non-empty string":"empty string";
console.log(check);
