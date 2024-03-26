import {useState} from 'react'

function Counter() {
    const [count, setCount]=useState(10)
    // for(var i=0; i<1e9; i++){}

    function handleNext(){
        console.log('ok')
        setCount((count)=>count+1)
        // console.log(count)
    }

    function handlePrev(){
        console.log('ok')
        setCount((count)=>count-1)
        // console.log(count)
    }

  return (
    <>
    <h1>counter {count}</h1>
    <button onClick={handleNext}>+</button>
    <button onClick={handlePrev}>-</button>
    </>
  )
}

export default Counter
