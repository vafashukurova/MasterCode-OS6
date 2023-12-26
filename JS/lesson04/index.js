//! for in, for of

let charArr = ["a", "b", "c", "d"];

for (let i in charArr) {
  console.log(i); // return index of array
}

for (let j of charArr) {
  console.log(j); //return element of array
}

//? 2d array

const arrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(arrays);
console.log(arrays[1]);
console.log(arrays[1][1]);
console.log(arrays[2][2]);

for (let i = 0; i < arrays.length; i++) {
  //    console.log(arrays[i]);
  for (let j = 0; j < arrays[i].length; j++) {
    console.log(arrays[i][j]);
  }
}

//! Funksiyalar

function sumTwoNum(x, y) {
  // function parametr
  //   console.log(x + y);
  console.log("returndan evvel");
  return x + y;
  console.log("returndan sonra");
}
console.log(sumTwoNum(2, 3)); // function arguments

function example() {
  console.log(arguments);
  console.log(...arguments);
}
example(1, 2, 3);

//? function declarations

getInfo("ramin");
function getInfo(user) {
  console.log("welcome to" + " " + user);
}

// getInfo("ramin")

//? function expressions

// getInfo1("solmaz");
const getInfo1 = function getUser(user) {
  console.log("welcome to" + " " + user);
};

getInfo1("bayram");

//! Scope-> global scope, function scope, block scope

//?global scope
var a = "alma";
console.log(a);

//? block scope
{
  let b = "test";
  const c = "test1";
  var d = "test3";
  // console.log(b);
}

// console.log(b)
// console.log(c)
console.log(d);

//? function scope

function test() {
  let charA = "a";
  var charB = "b";
  // console.log(char);
  // console.log(charB);
}
console.log(charA);

console.log(charB);
test();

//? var-function scoped
let age = 40;
{
  //   let age = 20;
  {
    // let age = 10;
    console.log(age);
  }
  //   console.log(age);
}

var charB = "b";
function test() {
  console.log(charB);
  //   var charB = "b";
}

test();

//! arrow function

const arrowFunction = (a, b) => {
  console.log(a + b);
};

arrowFunction(2, 3);

const arrowFunction1 = (age) => console.log(age);

arrowFunction1(10);

const arrowFunction3 = (a, b) => {
  let sum = a + b;
  console.log(sum);
};

arrowFunction3(2, 3);

//! Closures

function outerFunc() {
  let outerVariable = "test1";

  function innerFunc() {
    let innerVariable = "test2";
    console.log(outerVariable, innerVariable);
  }
  innerFunc();
  //   console.log(outerVariable, innerVariable);
}
outerFunc();

function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
let m = counter();
console.log(m());
console.log(m());
console.log(m());

//! callback function

function sayHello(text, user) {
  console.log(text, user);
}

function userName(userName) {
  return userName;
}

sayHello("welcome to", userName("yunis"));

//! IIFE -> Immediately Invoked Function Expression

(function (a,b) {
  console.log("IIFE",a+b);
})(10,20);

(
    (a,b)=>console.log("IIFE",a+b)
)(10,30)