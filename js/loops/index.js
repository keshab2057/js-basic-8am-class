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

let gameNumber = 25;
let userNum = prompt("Guess the game number:");
while(userNum != gameNumber){
 userNum = prompt("you entered wrong number. guess again");
}
console.log("congratulations, you entered write number");




