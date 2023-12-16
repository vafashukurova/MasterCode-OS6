//? DOM-Document object model
//? BOM-Browser object model

// console.log('salam');
// console.error('deyisen teyin edilmeyib')
// console.warn('test');
// console.log(window);

//? JS variable - var, let , const

// let age; //declaration
// var name = "vefa"; // initialization

// var a = 10;
// var a = 20;

// let b = 5;
// let b = 10;
// console.log(b);

// console.log(a);

// var a=10;

// const surName = "shukurova";

// let name = "vefa",
//   age = 18;

// console.log(age);

//? JS variable name

//1. Variable must start letter, underscore(_) or $;
// var name = "vefa";
// let _isStart = "yes";
// const $age = 18;

//2. Variable must start cannot contain space;
//  var my name='vefa';

//3. Variable must be camelCase;
// let surName;

//4. Variable cannot be the same as reserved keywords;
// var let = "test";

//? JS data types -> Primitive types, Reference types
//! Primitive types-> string, number, undefined, boolean, null, bigint, symbol
//! Reference types-> object-> function,arrays

//? string

var name = "vefa";
var userName = "shukurova";
// var word=`test`

// let count=20;
// let test=`word ${count}`
// let test=`word ${count}`
console.log(typeof userName);

//? number

// let age = 19;

// console.log(age);
// console.log("age type", typeof age);

//? bigint
let count = 100n;
console.log(count);
console.log("count type", typeof count);

//? boolean
let isStart = false;
console.log(isStart);
console.log(typeof isStart);

//? undefined-> teyin edilmemis;
var isDefined;
console.log(isDefined);
console.log(typeof isDefined);

//? null-> bos;
let student = null;
console.log(student);
console.log(typeof student);

//? symbol
let testSymbol = Symbol("test");
console.log(testSymbol);
console.log(typeof testSymbol);

// 'use strict'
// x = 10;
// console.log(x);














//? get data from user
//! alert, prompt, confirm

// //? alert

// let alertMsg=alert('hello world');
// console.log(alertMsg);

// //? prompt

// let promptMsg=prompt("adinizi daxil edin:",'Nihad');
// console.log(promptMsg);

// //? confirm

// let confirmMsg=confirm('telebesinizmi?');
// console.log(confirmMsg);









//? Conditional statements -> if, else

// let sum=20;

// if(sum<10){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

//! && - and;
//! || - or;

let userPromptAge = prompt("yasinizi daxil edin:");
let keyWord = "abcd";
let keyWordPrompt = prompt("acar sozu daxil edin:");

if (userPromptAge > 18 && keyWordPrompt == keyWord) {
  console.log("sisteme giris edildi");
} else if (userPromptAge < 18) {
  console.log("qeydiyyat ucun yasiniz 18den yuxari olmalidir");
} else {
  console.log("daxil etdiyiniz acar soz yanlisdir");
}
