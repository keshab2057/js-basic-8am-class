console.log("Hello function chapter");

//check the function is even or odd
function check(number) {
  const result = number % 2;
  if (result === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
//call/run
check(); //default odd print
