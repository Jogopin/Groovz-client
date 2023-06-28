import React, { useRef, useState } from "react";
import InputLabelText from "../components/InputLabelText";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {

  const navigate = useNavigate()
  
  const username = useRef(null)
  const email  = useRef(null)
  const password = useRef(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const handleSubmit = (e)=>{
    e.preventDefault()

    const newUser ={
      username:username.current.value,
      email: email.current.value,
      password:password.current.value
    }

    axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`,newUser)
      .then(response=>{
        
        navigate("/login")
      })
      .catch(error=>{
        console.log("error signing up, ",error)
        setErrorMessage(error.response.data.message)
        
      })
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="m-8 flex flex-col items-center gap-8">
        <InputLabelText
          id="username"
          label="Username"
          name="username"
          inputRef={username}
          placeholder="your username"
          type={"text"}
        />
        <InputLabelText
          id="password"
          label="Password"
          name="password"
          inputRef={password}
          placeholder="your password"
          type={"password"}
        />
        <InputLabelText
          id="email"
          label="Email"
          name="email"
          inputRef={email}
          placeholder="your email"
          type={"email"}
        />
        <button  className="btn-primary px-4 py-2">
          Sign up
        </button>
      </form>

      {errorMessage ? <p>{errorMessage}</p> : <></>}
      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </>
  );
};

export default Signup;
