console.log("Hello operators schapter");

// alert("Good morning keshab");
// const age = Number(prompt("How old are you?"));
// console.log(age);
// const isValid = confirm("Are you above 18?");
// console.log(isValid);


//write a program that store the information about their birth year and calculate age.

// const year = Number(prompt("what is birth year?"));
// console.log(year);
// const age = 2024 - year;
// console.log(age);
// //age>18-->to print adult \\age<18-->to print teeners
// if(age < 18){
//     alert("you are teeners");
// }else{
//     alert("you are adult");
// }


//write a js function to convert the string into the properCase
//eg('the fox is sly=> The Fox IS Sly')


// function properCase(str) {
//     str = str.toLowerCase().split(' ');
//     for (let i = 0; i < str.length; i++) {
//         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }
//     return str.join(' ');
// }
// console.log(properCase("the fox is sly"));




// const properCase = (string)=>{
//     return string.split("").map(string);
    
// }

//Reduce
// arr = [1,4,6,8,9]
// const res = arr.reduce((h1,h2)=>{
//     return h1 + h2;
// })

// console.log(res);

const arr = [0,-1,-3,5,8,-2]
const res = arr.filter((value)=>{
    return value < 0;
})
console.log(res);