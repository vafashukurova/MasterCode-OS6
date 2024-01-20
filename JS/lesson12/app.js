// console.log(document.documentElement)

const div=document.querySelector('.container')
console.log(div.parentElement)
console.log(div.firstElementChild)
console.log(div.lastElementChild)

const h1=div.firstElementChild
const p=h1.nextElementSibling;
const prev=p.previousElementSibling
// console.log(prev)


const btn=document.querySelector('.btn')

// window.addEventListener('click',function(){
//     console.log('window is clicked')
// })

// document.body.addEventListener('click',function(){
//     console.log('body is clicked')
// })

// btn.addEventListener('click',function(e){
//     console.log('btn is clicked')
// })


function btnClicked(){
    console.log('btn is clicked')
}

btn.addEventListener('click',btnClicked)

btn.removeEventListener('click',btnClicked)


const form =document.querySelector('.form')
const input=document.querySelector('#name')



form.addEventListener('submit',function(event){
    event.preventDefault()
   console.log('form is clicked')
   console.log(form.elements)
   console.log(input.value)

   document.querySelector('.text').textContent=input.value
})


document.addEventListener('keyup',function(event){
  console.log(event.key)
})


//? dropdown menu practice

const dropdownBtn=document.querySelector('.dropdown-btn');
const dropdownContainer=document.querySelector('.dropdown-links')

dropdownBtn.addEventListener('click',function(){
    // dropdownContainer.style.display='flex'
    // if(dropdownContainer.style.display==='flex'){
    //     dropdownContainer.style.display='none'
    // }
    // else{
    //     dropdownContainer.style.display='flex'
    // }

    //   dropdownContainer.classList.add('open')
    //   dropdownContainer.classList.remove('dropdown-links')
    dropdownContainer.classList.toggle('open')
})


input.addEventListener('select',function(e){
    console.log('selected:', e.target.value)
})


input.addEventListener('copy',function(e){
    console.log('copied:', e.target.value)
})


