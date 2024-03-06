//! async and await
//? ec7-de async and await adlanan bir funksionnaliq gelidi js-e, bu bize promislernen islemek ucun yeni bir yol verir


// await fetch("https://jsonplaceholder.typicode.com/users")
// console.log('ok')
//? await istifade olunur ve bu zaman fetch ya resolved yada rejected olana qeder ondan sonraki emliyyatlar icra edilmir






// async function getData() {
//   await fetch("https://jsonplaceholder.typicode.com/users");
//   console.log("ok");
// }

// getData()


//? await o zman yazilirki funksiyanin qarsisinda async acar sozu ist olunsun 


//! numune olaraq htmlda button yarat ve ona disabled et 
// async function getData() {
//   document.querySelector('button').disabled=true;
//   await fetch("https://jsonplaceholder.typicode.com/users");
//   document.querySelector('button').disabled=false;
// }

// getData()

async function getData() {
 console.log('before')
  const result=await fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json());
  console.log(result)
  console.log('after')
}

// console.log('ok')
getData()




//! put post get delete
//? her hansisa bir api-ya request gonderdikde biz muxtelif metodlardn ist ede bilerik.hansiki bular https metodlar adlanir.


