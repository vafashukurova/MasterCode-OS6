import { useState } from "react";

function Form() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [text,setText]=useState("salam")

  function handleFName(e) {
    setFName(e.target.value);
  }
  function handleLName(e) {
    setLName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setText(`firstname:${fname} lastname:${lname} email:${email}`)
    setEmail("")
    setFName("")
    setLName("")
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="fname"
          placeholder="enter your firstname"
          autoComplete="of"
          onInput={handleFName}
          value={fname}
        />
        <input
          name="lname"
          placeholder="enter your lastname"
          autoComplete="off"
          onInput={handleLName}
          value={lname}
        />
        <input
          name="email"
          placeholder="enter your email"
          autoComplete="off"
          onInput={handleEmail}
          value={email}
        />
        <button type="submit">submit</button>
      </form>
      <h1>{text}</h1>
    </>
  );
}

export default Form;
