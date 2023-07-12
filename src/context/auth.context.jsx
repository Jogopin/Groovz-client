import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { clearTokenHeaders, setTokenInHeaders } from "../services/api";

const AuthContext = createContext()

function AuthProviderWrapper(props){

    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading]= useState(true)
    const [user,setUser] = useState(null)

    const storeToken = (token)=>{
        localStorage.setItem("authToken",token)
        setTokenInHeaders(token)
    }
    const removeToken =()=>{
        localStorage.removeItem("authToken")
        clearTokenHeaders()
    }
    

    const authenticateUser =()=>{

        const storedToken = localStorage.getItem("authToken")

        if (storedToken) {
          axios
            .get(`${import.meta.env.VITE_API_URL}/auth/verify`, {
              headers: { Authorization: `Bearer ${storedToken}` }
            })
            .then((response) => {
              //If the server verifies that the JWT token is valid
              setUser(response.data);
              setIsLoggedIn(true);
              setIsLoading(false);
            })
            .catch((error) => {
              // If the server sends an error response (invalid token)
              // Update state variables
              setIsLoggedIn(false);
              setIsLoading(false);
              setUser(null);
            });
        } else {
          // If the token is not available (or is removed)
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
        }

        
    }

    const logOutUser =()=>{
        
        removeToken()

        //update the state variables
        authenticateUser()
    }
    
    useEffect(()=>{
        authenticateUser()
    },[])

        return(
        <AuthContext.Provider value={{isLoggedIn,isLoading,user,storeToken,authenticateUser,logOutUser }}>
            {props.children}
        </AuthContext.Provider>

    )
}

export { AuthProviderWrapper, AuthContext }