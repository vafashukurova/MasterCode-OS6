const buttons = document.getElementsByClassName("btn");
console.log(buttons);

const links = document.querySelectorAll(".link");
console.log(links);

// buttons.forEach((button)=>{
//     console.log(button)
// })

for (let i = 0; i < buttons.length; i++) {
  console.log(buttons[i]);
}

links.forEach((link) => {
  console.log(link);
});

//? JS DOM -changing css
document.querySelector(".text").style.color = "red";
// document.querySelector('.container').style.width='100px'
// document.querySelector('.container').style.height='100px'
// document.querySelector('.container').style.backgroundColor='yellow'
document.querySelector(".container").style.display = "none";
document.querySelector(".container").style.display = "block";

//? DOM document createElement()

const input1 = document.createElement("input");
const input2 = document.createElement("input");

// const form=document.createElement('form')

const form = document.querySelector(".form");

// form.appendChild(input1)
// form.append(input1,input2)

const div = document.querySelector(".container");

const div1 = document.createElement("div");
div1.style.width = "50px";
div1.style.height = "50px";
div1.style.backgroundColor = "red";

const div2 = document.createElement("div");
div2.style.width = "50px";
div2.style.height = "50px";
div2.style.backgroundColor = "blue";

// div.append(div1,div2)

// div.appendChild('hello')

// div.append('hello')
// div.appendChild('<h1>hello</h1>')
// div.append('<h1>hello</h1>')

//? innerHTML

// div.innerHTML=('<h1>hello</h1>')
console.log(div.innerHTML);

// function appendText() {
//   div.innerHTML += "<h1>hello</h1>";
// }

// setInterval(appendText, 1000);


//? innerText and textContent


// document.querySelector('.title').innerText='hello'
// document.querySelector('.title').textContent='textContent'


const title=document.querySelector('#title')
console.log(title.textContent)
console.log(title.innerText)