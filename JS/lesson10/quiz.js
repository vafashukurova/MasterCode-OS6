//? quiz 1

// function foo(){
//     console.log(a)
//     console.log(bar());
//     var a =1;
//     function bar(){
//         return 2;
//     }
// }

// foo();


//? quiz 2
// const carDetails={
//     name:'Ford Mustang',
//     yearBought:2005,
//     getName: function(){
//         return this.name
//     },
//     isRegistered:true,
// }

// console.log(carDetails.getName());


//? quiz 3
// const a=()=>{console.log('a')}
// const b=()=>{setTimeout(()=>{console.log('b')},2000)}
// const c=()=>{console.log('c')}
// a();
// b();
// c();

//? quiz 4
// const person={userName: 'John', age:38, city:'New York'}

// let {userName,age,city}=person
// console.log(userName,age,city)


//? quiz 5
// const person={userName: 'John', age:38}

// let {userName,age=10,city='Baku'}=person
// console.log(userName,age,city);


//? quiz 6

// let timerId = setInterval(() => console.log('hello'), 2000);

// setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);



//? quiz 7
// let timerId = setTimeout(function test() {
//     console.log('hello');
//     timerId = setTimeout(test, 1000);
//   }, 5000);



//? quiz 8

// let i = 0;

// setTimeout(() => alert(i), 100); 

// for(let j = 0; j < 100; j++) {
//   i++;
// }



//? quiz 9
//! printNum(from,to) adli bir funksiya yazin, funksiya from -dan baslayaraq to (to daxil olmaqla) arasinda deyerleri cixisa versin ve to  ile bitsin(neticeni alert ile cixisa verin)

// printNumbers(10,15) --> 10,11,12,13,14,15



// let arr=[1,2,3,4,5]
// console.log(arr.slice(0,3))