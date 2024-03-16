let b = 20;
// b='a'
// b=10
// b=true

let c;
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

let strArr: string[] = ["s", "b"];

// let arr: Array<number> =[1,2,3,4]

// let multiTypeArr:[number,string,boolean]=[1,'a',true,]

type MultiType = [number, string, string, boolean];
let multiTypeArr = [1, "s", "f", true];

//! Enum

enum User {
  name = "Yunis",
  surname = "Qulamov",
}

console.log(User.surname);

enum Days {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

// console.log(Days.Monday)
// console.log(Days.Friday)
// console.log(Days['Saturday'])

function getDaysName(day: Days): string {
  return Days[day];
}
const selectday: Days = Days.Saturday;
console.log(selectday);

//! Type assertions
let username;
username = "John";

const splitStr = (username as string).split("");
console.log(splitStr);

function calculate(...numbers: number[]): number {
  let total = 0;
  let count = numbers.length;
  numbers.forEach((item) => {
    total += item;
  });

  return total / count;
}

console.log(calculate(1, 2, 3, 4, 7));

interface Car {
  brand: string;
  model: string;
  year: number;
}

let toyota: Car = {
  brand: "toyota",
  model: "corolla",
  year: 2020,
};

let hyundai: Car = {
  brand: "hyundai",
  model: "santa fe",
  year:2019
};

function getItem(car:Car){
    console.log(`car ${car.brand} ${car.model} year: ${car.year}`)
}

getItem(toyota)
getItem(hyundai)


//! todo exercise

const input=document.querySelector("input") as HTMLInputElement
const addBtn=document.querySelector('.add-btn') as HTMLButtonElement
const todoList=document.querySelector('.todoList') as HTMLUListElement

addBtn.addEventListener('click',()=>{
 createElement()
})

function createElement(){
    if(input.value.trim()!=''){
        let li =document.createElement('li') as HTMLLIElement
        li.innerHTML=`
        <span>${input.value}</span>
        <button onclick=deleteTodo(this)>delete</button>
        `
        todoList.appendChild(li)
    }
    input.value=''
}

function deleteTodo(deleteItem:HTMLButtonElement){
    deleteItem.parentElement?.remove()
}
