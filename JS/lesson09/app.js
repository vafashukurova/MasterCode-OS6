//! destructuring assingment

const person = {
  userName: "john",
  userSurname: "wick",
  // age:20,
  age: undefined,
};

person.userName;
person["userSurname"];

//  const personUser=person.userName
// const userSurname=person.userSurname
// console.log(userName,userSurname)

// const {userName:personUser,userSurname} =person

// console.log(personUser,userSurname)

const { userName, userSurname, age = 0 } = person;

console.log(userName, userSurname, age);

//! array destructuring
const students = ["yunis", "bayram", "solmaz"];

// const firstStudent=students[0]
// const secondStudent=students[1]

const [firstStudent, secondStudent] = students;

console.log(firstStudent, secondStudent);

//! error handling

// let user = "john";
try {
  console.log(user);
} catch (error) {
  error.message = "deyisen teyin edilmeyib";
  //   console.log(error.message);
  //   console.log(error.name);
  console.log(error);
} finally {
  console.log("end");
}

// console.log(user)

console.log("after error");

//! Asynchronous js -> setTimeout, setInterval

// for(let i=0; i<10e9; i++){

// }

// console.log('for loop end')

//? setTimeout()
// console.log("before setimeout");

// setTimeout(() => {
//   console.log("setTimeout is starting");
// }, 0);

// console.log("after setimeout");

//? setInterval()

// setInterval(()=>{
//     console.log('hello')
// },2000)

// let interval = 0;

// let time = setInterval(() => {
//   console.log("setInterval is starting");
//   interval++;
//   console.log(interval)

//   if(interval==5){
//     clearInterval(time)
//   }
// },2000);

// console.log('hello')




//! DOM-document object model

console.log(document)


//? id ile elementi cagirma

// let warningBtn=document.getElementById('btn-warning');
// console.log(warningBtn)

//? class name ile elementi cagirma

// let warningBtn=document.getElementsByClassName('btn')
// let warningBtn=document.getElementsByClassName('btn')[0]
// console.log(warningBtn)

//? tag name ile elementi cagirma
let warningBtn=document.getElementsByTagName('button')
console.log(warningBtn)

//? name e gore elementi cagirma 
let inputs=document.getElementsByName('user')
console.log(inputs)


// queryselector

// let paragraph=document.querySelector('p')
// console.log(paragraph)

// let paragraph=document.querySelector('.container p')
// console.log(paragraph)

// let paragraph=document.querySelector('#paragraph2')
// console.log(paragraph)

let paragraph=document.querySelectorAll('p')
console.log(paragraph)

