import {useState} from 'react'

function TextBox() {
    const [text,setText]=useState('text')
    function handleInput(e){
        // console.log(e.target.value)
        setText(e.target.value)
    }
  return (
   <>
   <input onInput={handleInput} />
   <h1>{text}</h1>
   </>
  )
}

export default TextBox
