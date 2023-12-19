//! loose equality -> ==;
//! strict equality -> ===;

// let age = prompt("age:");
// console.log("prompt age:", typeof age);

// if (age === 18) {
//   console.log("you are 18 years old");
// } else {
//   console.log("you are not 18 years old");
// }

//! type coercion

// 1, 3,45 -> integer
// 1.27 , 2.0 -> float(double)

//? string->number

let count = "20";
count = Number(count);
console.log(count, typeof count);

let stringToInt = parseInt(count);
console.log(stringToInt);

let stringToFloat = parseFloat(count);
console.log(stringToFloat);

//? number->string;

let num = 30;
console.log(num.toString());

//? boolean-> string
let isBoolean = true;
console.log(isBoolean.toString());

//? boolean->number

let isTrue = true;
console.log(Number(isTrue) + 2);

//? string concat

let name1 = "vefa";
let surName = "shukurova";
let fullName = name1 + " " + surName;
let fullNAME = `${name1} ${surName}`;
console.log(fullName);

//? NaN-> not a number
let text = "200aa";
console.log(text - 2);

//! Operators-> +, -, *,/,%, <, >,<=,>=,==, !=,++,--,+=,-=,&&,||,!,?,**;

//? Math functions
let num1 = 4;
let num2 = 2;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log("/", num1 / num2);
console.log("%", num1 % num2);

console.log(num1 ** num2);

let obj = null;
console.log(Number(obj));
console.log(obj + num1);

//? increment -> ++;
//? decrement -> --;

//? ++num1 ->  once artirir, sonra deyisene menimsedir;
//? num1++ ->  once menimsedir, sonra artirir;
//? num1-- -> once menimsedir, sonra artirir;
//? --num1 -> once artirir, sonra deyisene menimsedir;

// console.log(++num1);
// console.log(num1--);
// console.log(num1);

// console.log(--num1);
// console.log(num1);

//? logical operators -> and, or , not

let a = 5;

// if(!(a>10)){
//     console.log('a boyukdur 10 ve a beraberdir 10');
// }
// else{
//     console.log('a kicikdir 10');
// }

// console.log(!(false)); // return true

// ? ternary operator;

// a > 10 ? console.log("a boyukdur 10") : console.log("a kicikdir 10");

// a > 10
//   ? console.log("a boyukdur 10")
//   : a == 10
//   ? console.log("a beraberdir 10")
//   : console.log("a kicikdir 10");

//? switch, case

switch (a) {
  case 10:
    console.log("a beraberdir 10");
    break;
  case 9:
    console.log("a kicikdir 9");
    break;
  default:
    console.log("a boyukdur 10");
    break;
}

//? statement -> geriye deyer qaytarmir (if else, switch case)
//? expression -> geriye deyer qaytarir (a>10 -> return false or true);

//! Loops -> for, do while, while, for in, for of;

let x = 10;

while (false) {
  console.log(x);
  x--;
}

do {
  console.log("hello");
} while (false);

let keyWord = "abcd";
let userPromptKeyword;

// while (userPromptKeyword != keyWord) {
//   userPromptKeyword= prompt("acar sozu daxil edin:");
// }

do {
  userPromptKeyword = prompt("acar sozu daxil edin:");
} while (userPromptKeyword != keyWord);
