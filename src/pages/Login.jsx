import React, { useContext, useState } from "react";
import InputLabelText from "../components/InputLabelText";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";


const Login = () => {
  const navigate = useNavigate()
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)
  const { storeToken, authenticateUser } = useContext(AuthContext)

  const handleSubmit = (e)=>{
    e.preventDefault()

    axios.post(`${import.meta.env.VITE_API_URL}/auth/login`,{username ,password})
      .then(response=>{
        storeToken(response.data.authToken)
        authenticateUser()
        navigate("/")

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
        <p className="text-sm text-gray-500">
        {"Don't have an account yet? "}
        <Link to={"/signup"} className="font-bold underline">Sign Up</Link>
      </p>
        <button className="btn-primary">
          Login
        </button>
      </form>

      {errorMessage ? <p>{errorMessage}</p> : <></>}

      
    </>
  );
};

export default Login;
