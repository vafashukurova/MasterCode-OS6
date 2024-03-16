var b = 20;
// b='a'
// b=10
// b=true
var c;
c = 10;
c = "a";
c = true;
// let d:unknown;
// let m:never;
// let unknowVal:unknown;
// let strVal:string='hello'
// let anyVal:any;
// let numVal=10
// console.log(unknowVal=strVal)
// console.log(strVal=unknowVal)
// console.log(anyVal=numVal)
// console.log(numVal=anyVal)
// type Size=number
// let size:Size
// size=10
// type Size=number | string;
// let size:Size;
// size=36
// size='m'
// type Size='xs' | 's' | 'm'
// let size:Size
// size=10
// size='l'
// size='xs'
//! array
// let arr:number[]=[1,2,3,4]
var strArr = ["s", "b"];
var multiTypeArr = [1, "s", "f", true];
//! Enum
var User;
(function (User) {
    User["name"] = "Yunis";
    User["surname"] = "Qulamov";
})(User || (User = {}));
console.log(User.surname);
var Days;
(function (Days) {
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
    Days[Days["Sunday"] = 7] = "Sunday";
})(Days || (Days = {}));
// console.log(Days.Monday)
// console.log(Days.Friday)
// console.log(Days['Saturday'])
function getDaysName(day) {
    return Days[day];
}
var selectday = Days.Saturday;
console.log(selectday);
//! Type assertions
var username;
username = "John";
var splitStr = username.split("");
console.log(splitStr);
function calculate() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    var count = numbers.length;
    numbers.forEach(function (item) {
        total += item;
    });
    return total / count;
}
console.log(calculate(1, 2, 3, 4, 7));
var toyota = {
    brand: "toyota",
    model: "corolla",
    year: 2020,
};
var hyundai = {
    brand: "hyundai",
    model: "santa fe",
    year: 2019
};
function getItem(car) {
    console.log("car ".concat(car.brand, " ").concat(car.model, " year: ").concat(car.year));
}
getItem(toyota);
getItem(hyundai);
//! todo exercise
var input = document.querySelector("input");
var addBtn = document.querySelector('.add-btn');
var todoList = document.querySelector('.todoList');
addBtn.addEventListener('click', function () {
    createElement();
});
function createElement() {
    if (input.value.trim() != '') {
        var li = document.createElement('li');
        li.innerHTML = "\n        <span>".concat(input.value, "</span>\n        <button onclick=deleteTodo(this)>delete</button>\n        ");
        todoList.appendChild(li);
    }
    input.value = '';
}
function deleteTodo(deleteItem) {
    var _a;
    (_a = deleteItem.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
}
