//! primitive and referance typelar arasindaki ferqler

let a=10;
let b=a;
b=20;
console.log(a,b)

let word1='test'
let word2=word1
word2='lesson'
console.log(word1, word2)


let obj1={name:'Yunis'};
let obj2=obj1;
obj2.name='Solmaz';

console.log(obj1,obj2)

let char1=['a','b','c','d'];
// let copyChar=char1;
let copyChar=char1.slice(); // shallow copy
console.log(copyChar)
copyChar.pop();
console.log(char1,copyChar)


//! objects

let userData={
    userName:'John',
    userSurname:'Wick',
    email:'john@gmail.com',
    hobbies:['music','painting'],
    adress:{
        country:'Azerbaijan',
        city:'Baku'
    },
    sayHello:function(){
        // return 'hello world'
        return `hello ${this.userName}`
    }
    // sayHello:()=>{
    //     // return 'hello'
    //     return this
    // }
}

console.log(userData.userName)
console.log(userData['hobbies'])

//! this keyword
console.log(this)
console.log(window)

console.log(userData.sayHello())

//! objects methods

// object.keys() - obyektin keylerinden ibaret array qaytarir

console.log(Object.keys(userData))

// object.values()- obyektin deyerlerini geri qaytarir

console.log(Object.values(userData))

// object.entries()-obyektin key value cutluyunu array formatinda geri qaytarir

console.log(Object.entries(userData))

// object.assign() - yeni deyer assign etmek ucun 

let age={age:30}
// console.log(Object.assign(userData,{age:30}))
// console.log(Object.assign(userData,age))




// object.freeze() - obyekti dondurur (modify,delete ve assign etmek olmur)
// object.isFrozen()- obyektin freez olunub olunmadigini yoxlayir ve return edir booelan deyer

console.log(Object.isFrozen(userData))
console.log(userData)
// Object.freeze(userData)

console.log(Object.isFrozen(userData))

// console.log(Object.assign(userData,age))
// userData.email='example@gmail.com'
delete userData.hobbies
console.log(userData)


// object.seal()-> modify etmeye icaze verir, diger emeliyyatlari ignore edir

Object.seal(userData)

console.log(userData)

// delete userData.email
// console.log(Object.assign(userData,age))

userData.email='example@gmail.com'

console.log(userData.email)
console.log(userData)


//! date object
let date=new Date();
console.log(date)
console.log(date.getDay())
console.log(date.getMonth())
console.log(date.getFullYear())
console.log(date.getTime())

