// await fetch('https://jsonplaceholder.typicode.com/users')


// async function getData(){
//     document.querySelector('button').disabled=true
//     await fetch('https://jsonplaceholder.typicode.com/users')
//     document.querySelector('button').disabled=false
// }

// getData()

async function getData(){
  
  const result= await fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json())
  console.log(result)
  console.log('before')
}


console.log('after')
getData()


