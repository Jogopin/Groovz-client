import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

export const useAuth = () => {
    const auth = useContext(AuthContext)
    const {isLoggedIn,isLoading,authUser,storeToken,authenticateUser,logOutUser,isAdmin } = auth
    if(auth === undefined){
        throw new Error("useAuth must be used within an AuthProviderWrapper")
    }
    
    return {isLoggedIn,isLoading,authUser,storeToken,authenticateUser,logOutUser,isAdmin };
}