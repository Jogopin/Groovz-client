import axios from "axios";
import { createContext, useEffect, useState } from "react";
import {
  clearTokenHeaders,
  setTokenInHeaders,
  verifyUser,
} from "../services/api";

const AuthContext = createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin,setIsAdmin]= useState(false)
  const [authUser, setAuthUser] = useState(null)

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
    setTokenInHeaders(token);
  };
  const removeToken = () => {
    localStorage.removeItem("authToken");
    clearTokenHeaders();
  };

  const authenticateUser = async () => {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      setTokenInHeaders(storedToken);
      try {
        const response = await verifyUser();
        const {isAdmin} = response
        //If the server verifies that the JWT token is valid
        setAuthUser(response);
        setIsLoggedIn(true);
        setIsLoading(false);
        setIsAdmin(isAdmin)

      } catch (error) {
        // If the server sends an error response (invalid token)
        // Update state variables
        setIsLoggedIn(false);
        setIsLoading(false);
        setAuthUser(null);
        setIsAdmin(false)
        removeToken()
        
      }
    }else{
       // If the token is not available (or is removed)
       setIsLoggedIn(false);
       setIsLoading(false);
       setAuthUser(null);
       setIsAdmin(false)
    }
  };

  const logOutUser = () => {
    removeToken();

    //update the state variables
    authenticateUser();
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        authUser,
        storeToken,
        authenticateUser,
        logOutUser,
        isAdmin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
