// Example 1

// let a = 5;
// let b = 6;

// function addThem() {
//   console.log(a + b);
// }

// addThem();

/********************************************************************/

//Example 2

// let tea = 'sweet';

// if (true) {
//   let tea = 'iced';
//   tea = 'sour';
// }

// console.log(tea);


/********************************************************************/

//Example 3
// let tea = 'sweet';

// if (true) {
//   tea = 'sour';
//   let tea = 'iced';
// }

// console.log(tea);

/********************************************************************/

// Example 4

// let tea = 'sweet';

// if (true) {
//   tea = 'sour';
//   var tea = 'iced';
// }

// console.log(tea);

/********************************************************************/

//Example 5

// let numberOfBagels = 5;

// function eatBagel() {
//   numberOfBagels -= 1;
//   if (numberOfBagels === 0) {
//     console.log('Oh nO, Out Of bagles!');
//   } else {
//     console.log(`Yummy. There are ${numberOfBagels} left!`);
//   }
// }

// eatBagel();
// eatBagel();
// console.log(numberOfBagels);

/********************************************************************/

// Example 6
// var a = 5;
// const b = 6;

// function addThem() {
//   console.log(a + b);
// }

// addThem();

/********************************************************************/

//Example 7

// if (true) {
//     let word = 'test';
//   };

//   console.log(word);

/********************************************************************/

// Example 8
// let str = 'example';

// function outerFunc() {

//   function innerFunc() {
//     let word = 'string';
//   }

//   innerFunc();
//   console.log(str + word)
// }

// outerFunc();

/********************************************************************/

// Example 9

// let counter = 0;
// function add() {
//  return counter += 1;
// }

// console.log(add())
// console.log(add())
// console.log(add())
// console.log(counter);

/********************************************************************/

//Example 10
// function add() {
//   let counter = 0;
//   counter += 1;
//   return counter;
// }

// add();
// add();
// add();

// console.log(add());
// console.log(add());
// console.log(add());



/********************************************************************/
//Example 11

// function createCounter() {
//   let counter = 0;

//   function add() {
//     counter += 1;
//     return counter;
//   }

//   return add;
// }

// const addFunction = createCounter();

// console.log(addFunction());
// console.log(addFunction());
// console.log(addFunction());
