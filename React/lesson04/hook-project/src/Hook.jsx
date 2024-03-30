import  { useEffect, useState } from 'react'

function Hook() {
  const [count,setCount]=useState(0)
  const [text,setText]=useState('hello')

  useEffect(()=>{
    console.log('first useEffect')
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then(data=>console.log(data))
  },[count])

  useEffect(()=>{
    console.log('second useEffect')
  },[text])

  return (
   <>
   <h1>{text}</h1>
   <h2>{count}</h2>
   <button onClick={()=>setText('salam')}>change me</button>
   <button onClick={()=>setCount((count)=>count+1)}>add me</button>
   </>
  )
}

export default Hook
