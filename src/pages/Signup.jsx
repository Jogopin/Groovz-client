import React, { useState } from "react";
import InputLabel from "../components/InputLabel";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../services/api";
import { Toaster, toast } from "react-hot-toast";
import capitalize from "../utils/capitalize";
import ButtonText from "../components/ButtonText";


const Signup = () => {
  const navigate = useNavigate()
  
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)

  const handleSubmit = async (e)=>{
    e.preventDefault()

    const newUser ={
      username,
      email,
      password
    }
    try{
      await signup(newUser)
      toast.success(`Welcome, ${capitalize(username)}! Your account has been created successfully.`);
      navigate("/login")
    }catch(error){      
        setErrorMessage(error.response.data.message)
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto my-10 w-4/6 sm:w-2/5 lg:w-1/5 flex flex-col items-center gap-4 ">
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
        <InputLabel
          id={"email"}
          label={"Email"}
          input={{
            name: "email",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: "your email",
            type:"email"
          }}
        />
      {errorMessage ? <p className="text-sm text-red-500">{errorMessage}</p> : <></>}
        <p className="text-sm text-gray-500">
        {"Already have an account? "}
        <Link to={"/login"} className="font-bold underline">Login</Link> 
        </p>
        <ButtonText text={"Sign up"}/>
      </form>

      
    </>
  );
};

export default Signup;
