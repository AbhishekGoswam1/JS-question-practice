//type casting - changing from one datatype to another.

// let age = prompt("Enter your age: ");
// age = Number(age);

// console.log(typeof age);

// Swapping

let a = 20;
let b = 30;
let c;

c = a;
a = b;
b = c;

console.log(`b = ${b}, a = ${a}`);


// division and remainder
z = 19;
x = 5;

console.log(Math.floor(z/x));
console.log(z%x);


// to get last digit
num =  5678;
console.log(num%10);

// to remove last digit

console.log(Math.floor(num/10));

// pre & post inc.

let i = 12;
i = i++ + ++i;  //12 + 14 (after i++ the value of i will be 13 and after ++i value will be 14)
// so 12 + 14 = 26

console.log(i);

// inc., dec. operator (unary operator) problems

let j = 11, k = 22;
let h = j + k + j++ + k++ + ++j + ++k;

console.log(`j = ${j}`);  // 13
console.log(`k = ${k}`); //24
console.log(`h = ${h}`); //103


// increment of boolean value
let l = true;
l++;
console.log(l); //2 (because it assumes true as 1, so 1++ = 2)

let v = false;
v++;
console.log(v); //1 because false = 0 and 0++ = 1

// we can not apply unary operator on constants, it will give us error
// let aa = 10++;
// console.log(aa);


// let bb = 10;
// let cc = ++(bb++); //bb++ = 10, and ++10 is not valid so it will give error
// console.log(cc);  this will also give error 
