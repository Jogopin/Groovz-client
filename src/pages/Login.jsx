import React, { useRef } from "react";
import InputLabelText from "../components/InputLabelText";


const Login = () => {
  const username = useRef(null)
  const password = useRef(null)

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(username.current.value)
    console.log(password.current.value)
  }
  return (
    <form className="m-8 flex flex-col gap-8 items-center">
     <InputLabelText id="username" label="Username" name="username" inputRef={username} placeholder="your username"
     />
     <InputLabelText id="password" label="Password" name="password" inputRef={password} placeholder="your password"
     />
      <button onClick={handleSubmit} className="btn-primary px-4 py-2">Login</button>
    </form>
  );
};

export default Login;
