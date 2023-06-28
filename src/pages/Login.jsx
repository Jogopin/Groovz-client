import React, { useContext, useRef, useState } from "react";
import InputLabelText from "../components/InputLabelText";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";


const Login = () => {
  const navigate = useNavigate()
  const username = useRef(null)
  const password = useRef(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const { storeToken, authenticateUser } = useContext(AuthContext)

  const handleSubmit = (e)=>{
    e.preventDefault()

    const userToLogin = {
      username: username.current.value,
      password:password.current.value,
    }

    axios.post(`${import.meta.env.VITE_API_URL}/auth/login`,userToLogin)
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
        <button className="btn-primary px-4 py-2">
          Login
        </button>
      </form>

      {errorMessage ? <p>{errorMessage}</p> : <></>}

      <p>Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link>
    </>
  );
};

export default Login;
