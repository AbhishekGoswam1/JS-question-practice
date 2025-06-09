// Math.round
console.log(Math.round(10.6)); //11

//Math.ceil
console.log(Math.ceil(10.2)); //11

//Math.floor
console.log(Math.floor(10.9)); //10

//Math.trunc
console.log(Math.trunc(3.56)); //3

//Math.pow
console.log(Math.pow(3,4)); //3^4 = 81

//Math.sqrt
console.log(Math.sqrt(64)); //8

//Math. cbrt
console.log(Math.cbrt(729)); //9

//Math.abs
console.log(Math.abs(-10)); //10

//Math.max
console.log(Math.max(34, 6, 78, 90, 54)); // 90

//Math.min
console.log(Math.min(4 , 67, 87, 1, 57)); // 1

// Math.random
console.log(Math.random()); //it will give random no. between 0-1

//toFixed
num1 = 23.5747
console.log(num1.toFixed(2)); //23.57, now it will take only two digits after decimal, but it will make the number string.
console.log(typeof(num1.toFixed(2)));  //string


//Problems

// 1. Generate random 4 digit OTP
console.log(Math.trunc((Math.random()*9000)+1000)); //it gives no. btwn 1000-10000

//2. Area of triangle using Heron's Formula
let sideA = 4;
let sideB = 6;
let sideC = 8;

let s = (sideA + sideB + sideC)/2; //semi-parameter of triangle 
console.log(`s = ${s}`);


console.log((Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC))).toFixed(2));

//Math.PI - not a function
console.log(Math.PI);