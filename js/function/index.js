console.log("Hello function chapter");

// function testString(input){
//     return input.toUpercase();
// }
// const result = testString("keshab");
// console.log(result);


// function string(input){
//     return input.toUpperCase();
// }
// const re = string("keshab");
// console.log(re);

// es6
// const upperCase = (world) =>{
//     return world.toUpperCase();
// }
// const response = upperCase("keshab");
// console.log(response);


//1.Anonymous function/nameless function
// const ex = function(){
//     console.log("hello");
// }
// //Inline function
// const exs = function (){
// console.log("hello");
// }

//Default function
// const pagination = (page = 1, limit = 20) =>{
//     console.log(page,limit);
// };
// pagination(undefined,50);


//write a default function to print welcome guest if user name is not youer name
// const wecome = (neme, role = "guest") =>{
// if(name === "keshab") return 'welcome Admin';
// return 'welcom ${role}';
// };

//write a default function to create the multiplication of 5

// const multiplication = (Number = 5)=>{
//     for(i = 1; i <=10; i++){
//         result = 5 * i;
//     console.log("5*",i ,"=", result);
//     }
// }
// multiplication();

//write a functon to calculate simple interst based on the principle ammunt
//Formula = p * t * r;

// const interst = (p,t,r)=>{
//     return p * t * r / 100;
// }
// const inter = interst (1000,2,6);
// console.log(inter);

 

//write a function to calculate the compound interst
/*p = 100000;
r = 10 %
t = 10 year
CI = P(1 + r/100)pow t
// */
// const CI = (p,t,r)=>{
//     return p * (1 + r/100) ** t;
// }
// const answer = CI(100000,10,10);
// console.log(answer);

 

//