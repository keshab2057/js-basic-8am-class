console.log("hello loops");
//wap the multiplication table for 3

// for(let i = 1; i <= 10; i++){
//     const result = 3 * i;
//     // console.log("the multiplication table of 3 is 3*", i, "=", result);
//     console.log("3*", i, "=", result);
// }

//write a program to print the even numbers
for(let i = 0; i<=100; i+2){
    console.log(i);
}

// function check even numbers
function even(number){
    const result = number%2;
   if(result === 0){ 
   console.log("even");
}else{
    console.log("odd");
}
}
//call/run
even(12);

