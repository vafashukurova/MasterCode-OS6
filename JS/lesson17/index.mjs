// function getData(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res)=>res.json())
//     .then(data=>console.log(data))
// }

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await response.json();
  console.log(result);
}

// getData();

let a = 5;
let b = 10;
console.log(a + b);

//! npm - node package manager
//? built in js modules
//? local js modules
//? community js modules

let m = 2.34;
console.log(Math.floor(m));


//! 2 local js modules
//? common js

// const fs = require("fs");

// fs.writeFile('./readme.md',"# JAVASCRIPT",'utf-8',(err)=>{
//     console.log(err)
// })

// fs.readFile('./readme.md','utf-8',((err,data)=>{
//     console.log(data)
// }))

// let person={
//   name:'john',
//   age:20
// }

// let first=person.name
// let second=person.age

// let {name,age}=person
// console.log(name,age)

// const {userName,userSurname}=require('./app.js')

// function sayHello(name,surName){
// console.log(`welcome ${name} ${surName}`)
// }

// sayHello(userName,userSurname)

//? es6 (export,import)

import {userName,userSurname} from "./app.mjs";

function sayHello(name,surname) {
  console.log(`welcome ${name} ${surname}`);
}

sayHello(userName,userSurname);
