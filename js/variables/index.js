console.log("hello world");

const year = Number(prompt("what is your birth year?"));
console.log(year);
const age = 2024 - year;
console.log(age);

//Statement

//Age

//below 18 teen
//above 18 adult
// exact or above 60 old

if(age > 18){
    alert("you are adult");
}else{
    alert("you are teen");
}

//switch
switch (age > 18) {
  case true:
    alert("you are adult");
    break;
  case false:
    alert("you are teen");
    break;
  default:
    alert("invalid data");
}

//Ternary operators
//variabe = condition? true : false
const result = age > 18 ?  alert("you are adult") :  alert("you are teen");

