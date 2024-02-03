//! Browser storage

localStorage;
console.log(localStorage);

localStorage.setItem("name", "example");
localStorage.setItem("color", "red");

console.log(localStorage.getItem("name"));

localStorage.removeItem("name");

console.log(localStorage.getItem("name"));

localStorage.clear();

// sessionStorage.setItem('age','22')
// localStorage.setItem('age','20')

let students = ["Ramin", "Nihad"];
// localStorage.setItem('students',students)

localStorage.setItem("students", JSON.stringify(students));

let user = {
  email: "example@gmail.com",
  age: 20,
};

localStorage.setItem("user", JSON.stringify(user));
localStorage.clear();

//! Promise
// pending, resolve,reject

let randomNum = new Promise(function (resolve, reject) {
  const random = Math.random();
  setTimeout(() => {
    if (random > 0.7) {
      resolve(random);
    } else {
      reject(random);
    }
  }, 1000);
});

// console.log(randomNum);

randomNum
  .then(function (num) {
    console.log("resolved", num);
  })
  .catch(function (num) {
    console.log("rejected", num);
  })
  .finally(function () {
    console.log("finally");
  });

//! Fetch()

const div = document.querySelector(".container");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (users) {
    users.forEach((user) => {
      //  console.log(user.name)
      div.innerHTML+= `
     <div class="card">
     <h3>${user.name}</h3>
     <p>${user.username}</p>
     <span>${user.email}</span>
    </div>
     `;
    });
  });

fetch("./data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (users) {
    users.forEach((user) => {
      //  console.log(user.name)
      div.innerHTML+= `
     <div class="card">
     <h3>${user.name}</h3>
     <p>${user.username}</p>
     <span>${user.email}</span>
    </div>
     `;
    })

  }).catch((error)=>{
    console.log(error.message)
})

const form = document.querySelector(".form");
const input = document.querySelector("input");
const button = document.querySelector("button");
const img = document.querySelector("img");

form.addEventListener("submit", function (e) {
  e.preventDefault();
//   console.log(input.value)

input.value=''
  fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${input.value}d&amp;size=150x150`)
  .then((response)=>{
    // console.log(response.url)
    img.src=response.url
  })
});
