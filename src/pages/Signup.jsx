import React, { useRef } from "react";
import InputLabelText from "../components/InputLabelText";


const Signup = () => {
  
  const username = useRef(null)
  const email  = useRef(null)
  const password = useRef(null)

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(username.current.value)
    console.log(password.current.value)
    console.log(email.current.value)
  }
  return (
    <form className="m-8 flex flex-col gap-8 items-center">
     <InputLabelText id="username" label="Username" name="username" inputRef={username} placeholder="your username"
     />
     <InputLabelText id="password" label="Password" name="password" inputRef={password} placeholder="your password"
     />
     <InputLabelText id="email" label="Email" name="email" inputRef={email} placeholder="your email"
     />
      <button onClick={handleSubmit} className="btn-primary px-4 py-2">Sign up</button>
    </form>
  );
};

export default Signup;
