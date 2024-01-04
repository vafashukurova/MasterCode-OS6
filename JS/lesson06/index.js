//! Math methods-> abs,ceil, floor,round,random,max,min,pow,sqrt

//? abs

console.log(Math.abs(-10))
console.log(Math.ceil(2.1))
console.log(Math.floor(2.6))
console.log(Math.round(6.3))
console.log(Math.pow(2,4))
console.log(Math.sqrt(16))

console.log(Math.max(1,2,3,4))
console.log(Math.min(1,2,3,4))

console.log(Math.random())

// let randomNum=Math.random()*10;
// randomNum=Math.floor(randomNum)
// console.log(randomNum)

function randomNum(min,max){
  return Math.floor(Math.random()*(max-min+1))+min;
}

console.log(randomNum(5,10))


//! Array.from()
console.log(Array.from('word'))
let num=[1,2,3]
console.log(Array.from(num,(x)=>x*2))


//! string methods

let test='abcde'
console.log(test.length)
console.log(test[0])

test[0]='f'
console.log(test);

//? charAt()
console.log(test.charAt(2))


//? includes()
let email="exAmple@gmail.Com";
console.log(email.includes('y'))

//? startsWith()
console.log(email.startsWith('m',3))


//? endsWith()
console.log(email.endsWith('m'))

//? toLowerCase
console.log(email.toLowerCase())

//? toUpperCase
console.log(email.toUpperCase())

//? slice()
let str='JS is programming language'
console.log(str.slice(2,10))

//? repeat
console.log(str.repeat(3))

//? replace 
console.log(str.replace('JS','JAVA'))

//? split
console.log(str.split())
console.log(str.split(' '))
console.log(str.split(''))

let character=str.split('');
console.log(character[3]);

//? trim
const word='      hello world'
console.log(word.trim())

//? substring
console.log(str.substring(5,10))




//! objects
  
let students={
    lastName:'Yunis',
    surName:'Qulamov',
    age:20,
    location:{
        city:'Baku',
        country:'Azerbaijan'
    },
    hobby:['take a photo','swimming']

}

students.skills='html,css'

console.log(students['age'])
console.log(students.surName)
console.log(students.location.city)

console.log(students)

students.location.count=19;
console.log(students.location);

students.sayhello=function(){
    console.log('hello world')
}

students.sayhello()

delete students.age
console.log(students)


