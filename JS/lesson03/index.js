//! for

for (var i = 0; i < 10; i++) {
  console.log(i);
}

// i=i+2;  i+=2;
// i=i-2; i-=2;

// var n=5; n-e qeder olan ededlerin cemini tapmaq lazimdir.

var n = 5;

var sum = 0;

for (var i = 0; i < n; i++) {
  console.log(i);
  sum = sum + i;
}
console.log(sum);

// factorialin hesablanmasi

var fact = 1;
var m = 10;
for (var i = 1; i <= m; i++) {
  fact = fact * i;
}

console.log(fact);

// n ededin icinden 5-e bolunen ededleri tap;

var n = 12;
for (var i = 1; i < n; i++) {
  if (i % 5 == 0) {
    console.log(i, "5-e bolunur");
  }
}

// n ededinin bolunduyu ededleri tapmaq;

let N = 12;
for (let i = 2; i < N; i++) {
  if (N % i == 0) {
    console.log(i + " " + "qaliqsiz bolunur");
    // break -loopu dayandirir;
    continue; // loopu dayandirmir, o setirden sonra olan emelliyyatlari icra etmir qayidir loopun evveline
  }
  console.log(i);
}

//? Nested loops

for (var i = 1; i <= 2; i++) {
  for (var j = 1; j <= 10; j++) {
    console.log(i + "*" + j + "=" + i * j);
  }
}

//! array-> massiv;

let a = 20;
let b = "alma";
let isTrue = true;

let arr = [20, "alma", true, null, undefined];

let students = ["ramin", "yunis", "solmaz", "yuzemmed"];
console.log(students);

console.log(students[1]);

console.log(students[4]);

// students[4]='vefa';
// students[10]=30;
// students[-1]=10;
console.log(students);

//! arrays methods --> push(),pop(),unshift(),shift(),indexOf(), splice(),slice();

//? push() -> arrayin sonuna yeni element elave edir

students.push("nihad");
console.log(students);

//? pop() --> arrayin sonundaki elementi silir

students.pop();
console.log(students);

//? unshift() --> arrayin evveline yeni element elave edir

students.unshift(10);
console.log(students);

//? shift() --> arrayin evvelindeki elementi silir;
students.shift();
console.log(students);

const nums = [0, 1, 2, 3, 4, 5];

nums.push(6);
nums.unshift(0);
nums.pop();
console.log(nums);

//? length() --> arrayin uzunlugunu qaytarir;

console.log(students.length);
console.log(nums.length);

var arrItem = students[students.length - 1];
var arrItem1 = nums[nums.length - 1];

console.log(arrItem);
console.log(arrItem1);

//? indexOf()-tapdigi elementin indeksini verir, eks halda tapmayanda -1 qaytarir

console.log(students.indexOf("solmaz"));
console.log(students.indexOf(30));

//? splice()--> arrayi yerinde deyisdirir
console.log(students);
// students.splice(1,2)
// students.splice(1)
// students.splice(1,1,"bayram","nihad");
students.splice(1, 0, "bayram", "nihad"); // 0 yazanda element silinmir, elave edilir
console.log(students);


//? slice()-arrayin bir hissesini geri qaytarir, ozu oldugu kimi qalir

console.log(students.slice(1,3)); // 3 daxil deyil
console.log(students);


//? loops in array
// verilmis num arrayinin elementlerinin cemini tapin;

var num=[4,10,15];

var sumArr=0;
var count=1;
for (var i=0; i<num.length;i++){
    // console.log(i);
    // console.log(num[i]);
    sumArr=sumArr+num[i];
   count=count*num[i]
}
console.log(sumArr);
console.log(count);


console.log(typeof num);

