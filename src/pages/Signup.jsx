import React, { useState } from "react";
import InputLabelText from "../components/InputLabelText";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {

  const navigate = useNavigate()
  
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)

  const handleSubmit = (e)=>{
    e.preventDefault()

    const newUser ={
      username,
      email,
      password
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
      <form onSubmit={handleSubmit} className="mx-auto my-10 w-4/6 sm:w-2/5 lg:w-1/5 flex flex-col items-center gap-4 ">
      <InputLabelText
          id="username"
          label="Username"
          name="username"
          value={username}
          onChange={(e)=>{setUsername(e.target.value)}}
          placeholder="your username"
          type={"text"}
        />
        <InputLabelText
          id="password"
          label="Password"
          name="password"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          placeholder="your password"
          type={"password"}
        />
        <InputLabelText
          id="email"
          label="Email"
          name="email"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          placeholder="your email"
          type={"email"}
        />
        <p className="text-sm text-gray-500">
        {"Already have account? "}
        <Link to={"/login"} className="font-bold underline">Login</Link> 
        </p>
        <button  className="btn-primary px-4 py-2">
          Sign up
        </button>
      </form>

      {errorMessage ? <p>{errorMessage}</p> : <></>}
      
    </>
  );
};

export default Signup;
