function Button({text,bgColor}) {
    console.log(text, bgColor)
    const css={
     color:"#fff",
     padding:"10px 20px",
     backgroundColor: bgColor? bgColor : "green",
     border:'none',
     marginRight: "10px"
    }
  return (
    <>
      <button style={css}>{text ? text : "click me"}</button>
    </>
  )
}

export default Button
