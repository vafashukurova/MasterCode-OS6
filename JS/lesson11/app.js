const div=document.querySelector('.container');
const button=document.createElement('button');
button.textContent='add me'



div.append(button)

div.prepend(button)

div.appendChild(button)

div.before(button)

div.after(button)


div.insertAdjacentElement('afterbegin',button)

div.insertAdjacentElement('afterend',button)

div.insertAdjacentElement('beforebegin',button)

div.insertAdjacentElement('beforeend',button)

div.insertAdjacentHTML('afterbegin','<h1>hello</h1>')

div.innerHTML='<h1>hello</h1>'

const text=document.querySelector(".text")
text.remove();



//? events 

window.addEventListener('scroll',function(){
    console.log('scroll event')
})

window.addEventListener('load',function(){
    console.log('page is loaded')
})


button.addEventListener('mouseover',function(){
    console.log('mouseover event') // button uzerine geldikde
})

button.addEventListener('mouseout',function(){
    console.log('mouseout event') // button uzerinden geri cekdikde
})

button.addEventListener('mousedown',function(){
    console.log('mousedown event')
})

button.addEventListener('mouseup',function(){
    console.log('mouseup event')
})


button.addEventListener('click',function(){
    console.log('clicked')
})




const incBtn=document.querySelector('.increment')
const decBtn=document.querySelector('.decrement')
const resetBtn=document.querySelector('.reset')
const count=document.querySelector(".count")

let oldCount=Number(count.textContent)


incBtn.addEventListener('click',function(){
    oldCount++
    count.textContent=oldCount;
})

decBtn.addEventListener('click',function(){
    oldCount--
    count.textContent=oldCount
})

resetBtn.addEventListener('click',function(){
    oldCount=0;
    count.textContent=oldCount
})


const btn=document.querySelector('#btn')

btn.addEventListener('click',function (obj) { 
    console.log(obj)
 })



 
 const link=document.querySelector('.link')

 link.addEventListener('click',function(event){
    event.preventDefault()
    console.log('link is clicked')
 })