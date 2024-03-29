import React, { useState } from "react";
import InputLabel from "../components/InputLabel";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { login } from "../services/api";
import { toast } from "react-hot-toast";
import capitalize from "../utils/capitalize";
import ButtonText from "../components/ButtonText";


const Login = () => {
  const navigate = useNavigate()
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)
  const { storeToken, authenticateUser } = useAuth()

  const handleSubmit = async (e)=>{
    e.preventDefault()

    try{
      const response = await login({username,password})
      storeToken(response.authToken)
      authenticateUser()
      toast.success(`Welcome ${capitalize(username)}!`);
      navigate("/")
    }catch(error){
      setErrorMessage(error.response.data.message)
    }
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-10 flex w-4/6 flex-col items-center gap-4 sm:w-2/5 lg:w-1/5 "
      >
        <InputLabel
          id={"username"}
          label={"Username"}
          input={{
            name: "username",
            value: username,
            onChange: (e) => setUsername(e.target.value),
            placeholder: "John",
          }}
        />
        <InputLabel
          id={"password"}
          label={"Password"}
          input={{
            name: "password",
            value: password,
            onChange: (e) => setPassword(e.target.value),
            placeholder: "your password",
            type:"password"
          }}
        />
        {errorMessage ? <p className="text-sm text-red-500">{errorMessage}</p> : <></>}
        <p className="text-sm text-gray-500">
          {"Don't have an account yet? "}
          <Link to={"/signup"} className="font-bold underline">
            Sign Up
          </Link>
        </p>
        <ButtonText text={"Login"}/>
        
      </form>
    </>
  );
};

export default Login;
