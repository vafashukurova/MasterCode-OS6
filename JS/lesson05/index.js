//! arrays methods -> forEach(),map(),fill,concat,sort,find,filter,reduce,some,every,join,reverse,findIndex,includes,isArray,lastIndexOf

//? forEach()

let students = ["bayram", "yunis", "ramin", "nihad"];

students.forEach(function(student,index){
    console.log(`${index} student name ${student}`);
});

//? map()

let ages = [10, 20, 25, 30];
let arrMethodMap = ages.map(function (age) {
  // return 10;
  // return age*2;
  if (age % 3 == 0) {
    return age / 3;
  }
  return age
});

// let arrMethodMap = ages.map((age) => age * 2);

// console.log(arrMethodMap);
// console.log(ages);

//? find

// const arrMethodFind=ages.find(function(age){
//     return age%5==0;
// })
// console.log(arrMethodFind);

//? findIndex()

const arrMethodFind = ages.findIndex(function (age) {
  return age % 5 == 0;
});
console.log(arrMethodFind);

//? filter

const filterAge = ages.filter(function (age) {
  return age % 2 == 0;
});

console.log("filterAge", filterAge);
console.log("ages", ages);

//? fill

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// array.fill('a',2,5)
array.fill("a", 2);
console.log(array);

//? concat

const arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];
const arr3 = arr1.concat(arr2);

console.log(arr1);
console.log(arr2);
console.log(arr3);

//? reduce

let count = [1, 2, 3, 4];

let arrReduceMethod = count.reduce(function (acc, curr) {
  return acc + curr;
}, 0);

console.log(arrReduceMethod);

// [1,2,3,4]
// acc=0 curr=1 -> 1
// acc=1 curr=2 ->3
// acc=3 curr=3 ->6
// acc=6 curr=4 ->10

//? join

// let joinArr=count.join();
let joinArr = count.join(":");
console.log(joinArr);

//? reverse

let reverseArr = count.reverse();
console.log(reverseArr);

//? includes

// let includesArr=count.includes(3);
let includesArr = count.includes(10);
console.log(includesArr);

//? some
const even = count.some(function (x) {
  return x % 2 == 0;
});

console.log(even);


//? every

const arr4 = count.every(function (y) {
  return y < 3;
});

console.log(arr4);

//? lastIndexOf

// const char=['a', 'b', 'c', 'd', 'e', 'a'];
// console.log(char.lastIndexOf('a'))

//? isArray
console.log(Array.isArray([2,3]));
console.log(Array.isArray({}));

//? sort
// const char=['a', 'c', 'b', 'd', 'e', 'a'];
const char=['a', 'C', 'b', 'd', 'e', 'A'];
console.log(char.sort())

// let numbers=[3,4,1,9,6];
let numbers=[3,4,11,9,-6];
console.log(numbers.sort());

function compareFn(a,b){
    if(a>b){return 1};
    if(a<b) {return -1}
    return 0
}

console.log(numbers.sort(compareFn))

let sortedArr=numbers.sort(function(a,b){
    return b-a // boyukden kiciye dogru
    // return a-b // kiciyden boyuye dogru
});

console.log(sortedArr)